/*!
 * @wasmer/sdk
 * Wasmer Javascript SDK. It allows interacting with Wasmer Packages in Node.js and the Browser.
 *
 * @version v0.8.0
 * @author Wasmer Engineering Team <engineering@wasmer.io>
 * @homepage https://github.com/wasmerio/wasmer-js
 * @repository git+https://github.com/wasmerio/wasmer-js.git
 * @license MIT
 */
import{init as e}from"./index.mjs";export{Atom,Command,DeployedApp,Directory,Instance,IntoUnderlyingByteSource,IntoUnderlyingSink,IntoUnderlyingSource,PublishPackageOutput,ReadableStreamSource,Runtime,ThreadPoolWorker,Trap,User,UserPackageDefinition,Volume,Wasmer,WasmerPackage,WritableStreamSink,initSync,initializeLogger,on_start,runWasix,setRegistry,setWorkerUrl,wat2wasm}from"./index.mjs";import t from"node:fs/promises";import a from"node:path";const r=async a=>{if(a||(a={}),!a.module){const e=new URL("wasmer_js_bg.wasm",import.meta.url).pathname;a.module=await t.readFile(e)}return e(a)};async function i(e,r={}){let n=await t.readdir(e);for(let o of n){const n=a.join(e,o);let m=await t.stat(n);if(await m.isDirectory())r[o]={},await i(n,r[o]);else{r[a.basename(o)]={data:new Uint8Array(await t.readFile(n)),modified:m.mtime}}}return r}export{r as init,i as walkDir};
