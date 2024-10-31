import harData from "./chrome_har.js"
import { createFetchShim } from "./fetch_shim.js"

const originalFetch = globalThis.fetch
function monkeyPatch(object, attrName, createNewFunction) {
    let prevObj = null
    while (!Object.getOwnPropertyNames(object).includes(attrName)) {
        prevObj = object
        object = Object.getPrototypeOf(object)
        if (prevObj === object) {
            throw new Error(`Could not find ${attrName} on ${object}`)
        }
    }
    const originalFunction = object[attrName]
    let theThis
    const wrappedOriginal = function(...args) {
        return originalFunction.apply(theThis, args)
    }
    const innerReplacement = createNewFunction(wrappedOriginal)
    object[attrName] = function(...args) {
        theThis = this
        return innerReplacement.apply(this, args)
    }
}
// use local responses
monkeyPatch(globalThis, "fetch", original=>{
    const fakeFetch = createFetchShim(harData, { realFetch: originalFetch, disableRealFetch: true })
    return async (...args)=>{
        console.log(`fetching ${args[0]?.url||args[0]?.href||args[0]}`)
        let output = await fakeFetch(...args)
        try {
            console.log(`text`)
            try {
                throw new Error("")
            } catch (error) {
                console.log(`fetch happend at:`,error.stack.replace("Error", ""))
            }
        } catch (error) {
            
        }
        console.log(`output is:`,output)
        return output
    }
})

import { Wasmer, init, Directory } from "./wasmer_sdk/index.mjs"

// log can be "trace", idk of any other options
console.log(`running init`)
await init({log: null, module: "/node_modules/@wasmer/sdk/dist/wasmer_js_bg.wasm"});

var packageName = "sharrattj/bash";
var uses = ["wasmer/neatvi"]
var args = [];
console.log(`getting package ${packageName}`)
var pkg = await Wasmer.fromRegistry(packageName);
console.log(`got package ${packageName}`)
// 
// setup files
// 
    var home = new Directory();
    // await home.writeFile("example.c",
    // `#include<stdio.h>

    // int main() {
    // printf("Hello World from WebAssembly!\\n");
    // return 0;
    // }
    // `);
    // await home.writeFile("donut.c", `
    // #include <stdio.h>
    // #include <string.h>

    //             k;double sin()
    //         ,cos();main(){float A=
    //     0,B=0,i,j,z[1760];char b[
    //     1760];printf("\x1b[2J");for(;;
    // ){memset(b,32,1760);memset(z,0,7040)
    // ;for(j=0;6.28>j;j+=0.07)for(i=0;6.28
    // >i;i+=0.02){float c=sin(i),d=cos(j),e=
    // sin(A),f=sin(j),g=cos(A),h=d+2,D=1/(c*
    // h*e+f*g+5),l=cos      (i),m=cos(B),n=s\
    // in(B),t=c*h*g-f*        e;int x=40+30*D*
    // (l*h*m-t*n),y=            12+15*D*(l*h*n
    // +t*m),o=x+80*y,          N=8*((f*e-c*d*g
    // )*m-c*d*e-f*g-l        *d*n);if(22>y&&
    // y>0&&x>0&&80>x&&D>z[o]){z[o]=D;;;b[o]=
    // ".,-~:;=!*#$@"[N>0?N:0];}}/*#****!!-*/
    // printf("\x1b[H");for(k=0;1761>k;k++)
    // putchar(k%80?b[k]:10);A+=0.04;B+=
    //     0.02;}}/*****####*******!!=;:~
    //     ~::==!!!**********!!!==::-
    //         .,~~;;;========;;;:~-.
    //             ..,--------,*/
    // `);

export var instance = await pkg.entrypoint.run({ args, uses,  mount: { "/home": home }, cwd: "/home"});
globalThis.instance = instance