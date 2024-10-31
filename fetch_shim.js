import { capitalize, indent, toCamelCase, digitsToEnglishArray, toPascalCase, toKebabCase, toSnakeCase, toScreamingKebabCase, toScreamingSnakeCase, toRepresentation, toString, regex, findAll, iterativelyFindAll, escapeRegexMatch, escapeRegexReplace, extractFirst, isValidIdentifier, removeCommonPrefix, didYouMean } from "https://deno.land/x/good@1.13.0.1/string.js"
import { bytesToBase64, base64ToBytes } from "./byte_convert.js"
import { levenshteinDistanceOrdering } from "https://deno.land/x/good@1.13.0.1/flattened/levenshtein_distance_ordering.js"

// based on:
    // (yeah it says "dont use" but whatever)
    // https://w3c.github.io/web-performance/specs/HAR/Overview.html#sec-object-types-params
const realFetch = globalThis.fetch
function hashCode(str) {
    return str
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function cutOfCommonCommonDomain(url, domainsToIgnore) {
    const urlObject = new URL(url)
    // remove extra slashes (which cause fetch to not match)
    urlObject.pathname = urlObject.pathname.replace(/\/+/, "/")
    url = urlObject.href
    
    domainsToIgnore = domainsToIgnore || []
    // make sure longest are first
    domainsToIgnore.sort((a,b)=>b.length-a.length)
    for (const each of domainsToIgnore) {
        if (url.startsWith(each)) {
            return url.slice(each.length)
        }
    }
    return url
}

function requestJsonToId(request, {domainsToIgnore}) {
    if (!request) {
        return null
    }
    let url = request.url
    if (typeof url == "string") { // should always be a string but whatever
        url = cutOfCommonCommonDomain(url, domainsToIgnore)
    }
    return hashCode(JSON.stringify({url, method: request.method, postData: { encoding: request.postData?.encoding, text: request.postData?.text,}}))
}

async function fetchArgsToId(urlOrRequest, options=undefined, { domainsToIgnore }) {
    // standardize format of first argument
    if (typeof urlOrRequest == 'string') {
        try {
            const urlObject = new URL(urlOrRequest)
            // remove extra slashes (which cause fetch to not match)
            urlObject.pathname = urlObject.pathname.replace(/\/+/, "/")
            urlOrRequest = urlObject.href
        } catch (error) {
            if (globalThis.window?.location?.pathname) {
                const source = window.location.origin + window.location.pathname
                urlOrRequest = new URL(`${source}/${urlOrRequest}`)
                // remove extra slashes (which cause fetch to not match)
                urlOrRequest.pathname = urlOrRequest.pathname.replace(/\/+/, "/")
            } else {
                urlOrRequest = new URL(`file://${urlOrRequest}`)
                urlOrRequest.pathname = urlOrRequest.pathname.replace(/\/+/, "/")
            }
        }
    }

    // turn all of it into a Request object
    let request
    if (options) {
        // options for Request:
        // method,
        // headers,
        // body,
        // referrer,
        // referrerPolicy,
        // mode,
        // credentials,
        // cache,
        // redirect,
        // integrity,
        // keepalive,
        // signal,
        // window,
        // duplex,
        // priority,
        request = new Request(urlOrRequest, options)
    } else if (urlOrRequest instanceof Request) {
        request = urlOrRequest
    } else if (urlOrRequest instanceof URL) {
        request = new Request(urlOrRequest)
    } else {
        // e.g. throw error because its an invalid argument (but use the real fetch to trigger the error)
        return realFetch(urlOrRequest)
    }

    // 
    // extract url and params
    // 
    const url = request.url

    // 
    // extract method
    // 
    const method = request.method

    // const { credentials, headers, referrer, method, mode, body, redirect } = options
    let postData = { encoding: undefined, text: undefined }
    if (method === 'POST') {
        var requestCopy = request.clone()
        try {
            postData.text = await requestCopy.text()
        } catch (error) {
            postData.text = bytesToBase64(new Uint8Array(await requestCopy.arrayBuffer()))
            postData.encoding = "base64"
        }
    }
    return hashCode(
        JSON.stringify({url: cutOfCommonCommonDomain(url, domainsToIgnore), method, postData})
    )
}

function responseJsonToResponseObject(jsonObj, url) {
    const headers = new Headers()
    for (const { name, value } of jsonObj.headers) {
        headers.append(name, value)
    }
    if (jsonObj.content?.mimeType) {
        headers.set("Content-Type", jsonObj.content.mimeType)
    }
    let body = ""
    if (jsonObj.content?.text) {
        body = jsonObj.content.text
        globalThis.contentResponse = jsonObj.content
        if (jsonObj.content?.encoding === "base64") {
            try {
                body = base64ToBytes(body)
            } catch (error) {
                throw error
            }
        }
    }
    const response = new Response(body, {
        status: jsonObj.status,
        statusText: jsonObj.statusText,
        headers: headers,
    })
    const originalThing = response
    const proxyObject = new Proxy(originalThing, {
        get(original, key, ...args) {
            if (key == "url") {
                return url
            }
            if (key == "then") {
                return (func)=>func(originalThing)
            }
            const value = originalThing[key]
            return value
        },
        set(original, key, ...args) {
            return Reflect.set(original, key, ...args)
        },
        has: Reflect.has,
        deleteProperty: Reflect.deleteProperty,
        isExtensible: Reflect.isExtensible,
        preventExtensions: Reflect.preventExtensions,
        setPrototypeOf: Reflect.setPrototypeOf,
        defineProperty: Reflect.defineProperty,
        getPrototypeOf: Reflect.getPrototypeOf,
    })
    Object.setPrototypeOf(proxyObject, Object.getPrototypeOf(originalThing))
    return proxyObject
}

export function createFetchShim(data, {realFetch, domainsToIgnore, dontIgnoreSelf=false, dontIgnoreOriginator=false, disableRealFetch=false}={}) {
    domainsToIgnore = domainsToIgnore||[]
    if (!dontIgnoreSelf) {
        if (globalThis.window?.location?.pathname) {
            const source = window.location.origin + window.location.pathname
            domainsToIgnore.push(source)
        } else {
            domainsToIgnore.push("file:///")
        }
    }
    if (!dontIgnoreSelf) {
        const pages = data?.log?.pages||[]
        domainsToIgnore.push(
            // NOTE: not sure why they picked "title" when its actually the url
            ...pages.map(({title})=>title).filter(each=>typeof each == "string")
        )
    }
    if (!realFetch) {
        realFetch = globalThis.fetch
    }
    const allReqestIds = new Set()
    
    const idToResponse = {}
    for (const {request: requestJson, response: responseJson} of data.log.entries) {
        if (!requestJson) {
            continue
        }
        const requestId = requestJsonToId(requestJson, { domainsToIgnore })
        allReqestIds.add(requestId)
        idToResponse[requestId] = ()=>responseJsonToResponseObject(responseJson, requestJson.url)
    }
    
    return async function fetch(url, options) {
        // e.g. url, method, postData
        const requestId = await fetchArgsToId(url, options, {domainsToIgnore})
        if (!allReqestIds.has(requestId)) {
            if (disableRealFetch) {
                throw Error(`tried to fetch the following, but fetch as been disabled (by createFetchShim)\nfirst argument: ${url}\noptions: ${toRepresentation(options)}\n\nThe requestId was: ${requestId}\n\nThe following request id's are the most similar ones in the HAR data:\n    ${levenshteinDistanceOrdering({ word: requestId, otherWords: [...allReqestIds]}).join("\n    ")}`)
            }
            return realFetch(url, options)
        }
        return Promise.resolve(idToResponse[requestId]())
    }
}