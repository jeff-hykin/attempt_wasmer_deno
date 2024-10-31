`deno install --global -A npm:vite`
`vite`

- chrome works (open devtools, wait a few secs then type `instance ` (press enter) and it'll show an object)
- firefox/zen gets a weird error `Uncaught Error: recursive use of an object detected which would lead to unsafe aliasing in rust __wbindgen_throw http://127.0.0.1:8081/wasmer_sdk/index.mjs:1450`
- deno just hangs, loads forever. Seems like some kind of deadlock because its not waiting on fetch

Note:
- this code works offline (fetch is monkey patched, and fakes everything using the data in `chrome_har.js`)