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
let _
const e = new Array(128).fill(void 0)
function n(_) {
    return e[_]
}
e.push(void 0, null, !0, !1)
let t = 0,
    r = null
function i() {
    return (null !== r && r.buffer === _.memory.buffer) || (r = new Uint8Array(_.memory.buffer)), r
}
const o =
        "undefined" != typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                  encode: () => {
                      throw Error("TextEncoder not available")
                  },
              },
    a = function (_, e) {
        const n = o.encode(_)
        return e.set(n), { read: _.length, written: n.length }
    }
function c(_, e, n) {
    if (void 0 === n) {
        const n = o.encode(_),
            r = e(n.length, 1) >>> 0
        return (
            i()
                .subarray(r, r + n.length)
                .set(n),
            (t = n.length),
            r
        )
    }
    let r = _.length,
        c = e(r, 1) >>> 0
    const b = i()
    let g = 0
    for (; g < r; g++) {
        const e = _.charCodeAt(g)
        if (e > 127) break
        b[c + g] = e
    }
    if (g !== r) {
        0 !== g && (_ = _.slice(g)), (c = n(c, r, (r = g + 3 * _.length), 1) >>> 0)
        const e = i().subarray(c + g, c + r)
        ;(g += a(_, e).written), (c = n(c, r, g, 1) >>> 0)
    }
    return (t = g), c
}
function b(_) {
    return null == _
}
let g = null
function s() {
    return (null !== g && g.buffer === _.memory.buffer) || (g = new Int32Array(_.memory.buffer)), g
}
const w =
    "undefined" != typeof TextDecoder
        ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
        : {
              decode: () => {
                  throw Error("TextDecoder not available")
              },
          }
function u(_, e) {
    return (_ >>>= 0), w.decode(i().slice(_, _ + e))
}
"undefined" != typeof TextDecoder && w.decode()
let f = e.length
function d(_) {
    f === e.length && e.push(e.length + 1)
    const n = f
    return (f = e[n]), (e[n] = _), n
}
function l(_) {
    const t = n(_)
    return (
        (function (_) {
            _ < 132 || ((e[_] = f), (f = _))
        })(_),
        t
    )
}
let p = null
function y() {
    return (null !== p && p.buffer === _.memory.buffer) || (p = new Float64Array(_.memory.buffer)), p
}
let h = null
function m(_) {
    const e = typeof _
    if ("number" == e || "boolean" == e || null == _) return `${_}`
    if ("string" == e) return `"${_}"`
    if ("symbol" == e) {
        const e = _.description
        return null == e ? "Symbol" : `Symbol(${e})`
    }
    if ("function" == e) {
        const e = _.name
        return "string" == typeof e && e.length > 0 ? `Function(${e})` : "Function"
    }
    if (Array.isArray(_)) {
        const e = _.length
        let n = "["
        e > 0 && (n += m(_[0]))
        for (let t = 1; t < e; t++) n += ", " + m(_[t])
        return (n += "]"), n
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(_))
    let t
    if (!(n.length > 1)) return toString.call(_)
    if (((t = n[1]), "Object" == t))
        try {
            return "Object(" + JSON.stringify(_) + ")"
        } catch (_) {
            return "Object"
        }
    return _ instanceof Error ? `${_.name}: ${_.message}\n${_.stack}` : t
}
const k =
    "undefined" == typeof FinalizationRegistry
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((e) => {
              _.__wbindgen_export_3.get(e.dtor)(e.a, e.b)
          })
function v(e, n, t, r) {
    const i = { a: e, b: n, cnt: 1, dtor: t },
        o = (...e) => {
            i.cnt++
            const n = i.a
            i.a = 0
            try {
                return r(n, i.b, ...e)
            } finally {
                0 == --i.cnt ? (_.__wbindgen_export_3.get(i.dtor)(n, i.b), k.unregister(i)) : (i.a = n)
            }
        }
    return (o.original = i), k.register(o, i, i), o
}
function R(e, n, t) {
    _._ZN136__LT_dyn_u20_core__ops__function__FnMut_LT__LP_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17h312b1476c58c80d4E(e, n, d(t))
}
function A(e, n, t, r) {
    const i = { a: e, b: n, cnt: 1, dtor: t },
        o = (...e) => {
            i.cnt++
            try {
                return r(i.a, i.b, ...e)
            } finally {
                0 == --i.cnt && (_.__wbindgen_export_3.get(i.dtor)(i.a, i.b), (i.a = 0), k.unregister(i))
            }
        }
    return (o.original = i), k.register(o, i, i), o
}
function F(e, n) {
    return l(_._ZN129__LT_dyn_u20_core__ops__function__Fn_LT__LP__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17ha77455448910e942E(e, n))
}
function T(e, n, t) {
    return _._ZN133__LT_dyn_u20_core__ops__function__Fn_LT__LP_A_C__RP__GT__u2b_Output_u20__u3d__u20_R_u20_as_u20_wasm_bindgen__closure__WasmClosure_GT_8describe6invoke17hc81cccb7863638f7E(e, n, d(t))
}
function z(e, n) {
    try {
        return e.apply(this, n)
    } catch (e) {
        _.__wbindgen_exn_store(d(e))
    }
}
function W(e) {
    try {
        const i = _.__wbindgen_add_to_stack_pointer(-16),
            o = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            a = t
        _.wat2wasm(i, o, a)
        var n = s()[i / 4 + 0],
            r = s()[i / 4 + 1]
        if (s()[i / 4 + 2]) throw l(r)
        return l(n)
    } finally {
        _.__wbindgen_add_to_stack_pointer(16)
    }
}
function S() {
    _.on_start()
}
function M(e) {
    _.setWorkerUrl(d(e))
}
function O(_, e) {
    if (!(_ instanceof e)) throw new Error(`expected instance of ${e.name}`)
    return _.ptr
}
function j(e, n) {
    return l(_.runWasix(d(e), d(n)))
}
function E(e) {
    try {
        const o = _.__wbindgen_add_to_stack_pointer(-16)
        var n = b(e) ? 0 : c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.initializeLogger(o, n, r)
        var i = s()[o / 4 + 0]
        if (s()[o / 4 + 1]) throw l(i)
    } finally {
        _.__wbindgen_add_to_stack_pointer(16)
    }
}
const x = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_atom_free(e >>> 0))
class L {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), x.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_atom_free(e)
    }
}
const C = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_command_free(e >>> 0))
class I {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(I.prototype)
        return (e.__wbg_ptr = _), C.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), C.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_command_free(e)
    }
    get name() {
        return l(_.__wbg_get_command_name(this.__wbg_ptr))
    }
    set name(e) {
        _.__wbg_set_command_name(this.__wbg_ptr, d(e))
    }
    run(e) {
        return l(_.command_run(this.__wbg_ptr, b(e) ? 0 : d(e)))
    }
    binary() {
        return l(_.command_binary(this.__wbg_ptr))
    }
}
const U = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_deployedapp_free(e >>> 0))
class P {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(P.prototype)
        return (e.__wbg_ptr = _), U.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), U.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_deployedapp_free(e)
    }
    get id() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_id(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set id(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_id(this.__wbg_ptr, n, r)
    }
    get created_at() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_created_at(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set created_at(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_created_at(this.__wbg_ptr, n, r)
    }
    get version() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_version(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set version(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_version(this.__wbg_ptr, n, r)
    }
    get description() {
        try {
            const t = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_description(t, this.__wbg_ptr)
            var e = s()[t / 4 + 0],
                n = s()[t / 4 + 1]
            let r
            return 0 !== e && ((r = u(e, n).slice()), _.canonical_abi_free(e, 1 * n, 1)), r
        } finally {
            _.__wbindgen_add_to_stack_pointer(16)
        }
    }
    set description(e) {
        var n = b(e) ? 0 : c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_description(this.__wbg_ptr, n, r)
    }
    get yaml_config() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_yaml_config(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set yaml_config(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_yaml_config(this.__wbg_ptr, n, r)
    }
    get user_yaml_config() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_user_yaml_config(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set user_yaml_config(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_user_yaml_config(this.__wbg_ptr, n, r)
    }
    get config() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_config(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set config(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_config(this.__wbg_ptr, n, r)
    }
    get json_config() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_json_config(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set json_config(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_json_config(this.__wbg_ptr, n, r)
    }
    get url() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_url(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set url(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_url(this.__wbg_ptr, n, r)
    }
    get app_id() {
        try {
            const t = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_app_id(t, this.__wbg_ptr)
            var e = s()[t / 4 + 0],
                n = s()[t / 4 + 1]
            let r
            return 0 !== e && ((r = u(e, n).slice()), _.canonical_abi_free(e, 1 * n, 1)), r
        } finally {
            _.__wbindgen_add_to_stack_pointer(16)
        }
    }
    set app_id(e) {
        var n = b(e) ? 0 : c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_app_id(this.__wbg_ptr, n, r)
    }
}
const B = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_directory_free(e >>> 0))
class D {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), B.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_directory_free(e)
    }
    __getClassname() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.directory___getClassname(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    constructor(e) {
        try {
            const r = _.__wbindgen_add_to_stack_pointer(-16)
            _.directory_new(r, b(e) ? 0 : d(e))
            var n = s()[r / 4 + 0],
                t = s()[r / 4 + 1]
            if (s()[r / 4 + 2]) throw l(t)
            return (this.__wbg_ptr = n >>> 0), this
        } finally {
            _.__wbindgen_add_to_stack_pointer(16)
        }
    }
    readDir(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        return l(_.directory_readDir(this.__wbg_ptr, n, r))
    }
    writeFile(e, n) {
        const r = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            i = t
        return l(_.directory_writeFile(this.__wbg_ptr, r, i, d(n)))
    }
    readFile(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        return l(_.directory_readFile(this.__wbg_ptr, n, r))
    }
    readTextFile(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        return l(_.directory_readTextFile(this.__wbg_ptr, n, r))
    }
    createDir(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        return l(_.directory_createDir(this.__wbg_ptr, n, r))
    }
    removeDir(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        return l(_.directory_removeDir(this.__wbg_ptr, n, r))
    }
    removeFile(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        return l(_.directory_removeFile(this.__wbg_ptr, n, r))
    }
}
const $ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_instance_free(e >>> 0))
class q {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(q.prototype)
        return (e.__wbg_ptr = _), $.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), $.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_instance_free(e)
    }
    get stdin() {
        return l(_.__wbg_get_instance_stdin(this.__wbg_ptr))
    }
    get stdout() {
        return l(_.__wbg_get_instance_stdout(this.__wbg_ptr))
    }
    get stderr() {
        return l(_.__wbg_get_instance_stderr(this.__wbg_ptr))
    }
    wait() {
        const e = this.__destroy_into_raw()
        return l(_.instance_wait(e))
    }
}
const G = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_intounderlyingbytesource_free(e >>> 0))
class N {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), G.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_intounderlyingbytesource_free(e)
    }
    get type() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.intounderlyingbytesource_type(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    get autoAllocateChunkSize() {
        return _.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0
    }
    start(e) {
        _.intounderlyingbytesource_start(this.__wbg_ptr, d(e))
    }
    pull(e) {
        return l(_.intounderlyingbytesource_pull(this.__wbg_ptr, d(e)))
    }
    cancel() {
        const e = this.__destroy_into_raw()
        _.intounderlyingbytesource_cancel(e)
    }
}
const Z = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_intounderlyingsink_free(e >>> 0))
class J {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), Z.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_intounderlyingsink_free(e)
    }
    write(e) {
        return l(_.intounderlyingsink_write(this.__wbg_ptr, d(e)))
    }
    close() {
        const e = this.__destroy_into_raw()
        return l(_.intounderlyingsink_close(e))
    }
    abort(e) {
        const n = this.__destroy_into_raw()
        return l(_.intounderlyingsink_abort(n, d(e)))
    }
}
const K = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_intounderlyingsource_free(e >>> 0))
class V {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), K.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_intounderlyingsource_free(e)
    }
    pull(e) {
        return l(_.intounderlyingsource_pull(this.__wbg_ptr, d(e)))
    }
    cancel() {
        const e = this.__destroy_into_raw()
        _.intounderlyingsource_cancel(e)
    }
}
const Y = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_publishpackageoutput_free(e >>> 0))
class H {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(H.prototype)
        return (e.__wbg_ptr = _), Y.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), Y.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_publishpackageoutput_free(e)
    }
    get manifest() {
        return l(_.__wbg_get_publishpackageoutput_manifest(this.__wbg_ptr))
    }
    set manifest(e) {
        _.__wbg_set_publishpackageoutput_manifest(this.__wbg_ptr, d(e))
    }
    get hash() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_id(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set hash(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_id(this.__wbg_ptr, n, r)
    }
}
const Q = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_readablestreamsource_free(e >>> 0))
class X {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(X.prototype)
        return (e.__wbg_ptr = _), Q.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), Q.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_readablestreamsource_free(e)
    }
    pull(e) {
        return l(_.readablestreamsource_pull(this.__wbg_ptr, d(e)))
    }
    cancel() {
        _.readablestreamsource_cancel(this.__wbg_ptr)
    }
    get type() {
        return l(_.readablestreamsource_type(this.__wbg_ptr))
    }
}
const __ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_runtime_free(e >>> 0))
class e_ {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(e_.prototype)
        return (e.__wbg_ptr = _), __.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), __.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_runtime_free(e)
    }
    __getClassname() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.runtime___getClassname(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    constructor(e) {
        try {
            const r = _.__wbindgen_add_to_stack_pointer(-16)
            _.runtime_js_new(r, b(e) ? 0 : d(e))
            var n = s()[r / 4 + 0],
                t = s()[r / 4 + 1]
            if (s()[r / 4 + 2]) throw l(t)
            return (this.__wbg_ptr = n >>> 0), this
        } finally {
            _.__wbindgen_add_to_stack_pointer(16)
        }
    }
    static global(e) {
        try {
            const r = _.__wbindgen_add_to_stack_pointer(-16)
            _.runtime_global(r, b(e) ? 16777215 : e ? 1 : 0)
            var n = s()[r / 4 + 0],
                t = s()[r / 4 + 1]
            if (s()[r / 4 + 2]) throw l(t)
            return 0 === n ? void 0 : e_.__wrap(n)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16)
        }
    }
}
const n_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_threadpoolworker_free(e >>> 0))
class t_ {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), n_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_threadpoolworker_free(e)
    }
    constructor(e) {
        const n = _.threadpoolworker_new(e)
        return (this.__wbg_ptr = n >>> 0), this
    }
    handle(e) {
        return l(_.threadpoolworker_handle(this.__wbg_ptr, d(e)))
    }
}
const r_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_trap_free(e >>> 0))
class i_ {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(i_.prototype)
        return (e.__wbg_ptr = _), r_.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), r_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_trap_free(e)
    }
    static __wbg_wasmer_trap() {
        _.trap___wbg_wasmer_trap()
    }
}
const o_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_user_free(e >>> 0))
class a_ {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(a_.prototype)
        return (e.__wbg_ptr = _), o_.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), o_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_user_free(e)
    }
    get id() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_id(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set id(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_id(this.__wbg_ptr, n, r)
    }
    get username() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_deployedapp_created_at(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set username(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_deployedapp_created_at(this.__wbg_ptr, n, r)
    }
}
const c_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_userpackagedefinition_free(e >>> 0))
class b_ {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(b_.prototype)
        return (e.__wbg_ptr = _), c_.register(e, e.__wbg_ptr, e), e
    }
    static __unwrap(_) {
        return _ instanceof b_ ? _.__destroy_into_raw() : 0
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), c_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_userpackagedefinition_free(e)
    }
    __getClassname() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.userpackagedefinition___getClassname(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    get hash() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_userpackagedefinition_hash(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    set hash(e) {
        const n = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            r = t
        _.__wbg_set_userpackagedefinition_hash(this.__wbg_ptr, n, r)
    }
}
const g_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_volume_free(e >>> 0))
class s_ {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), g_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_volume_free(e)
    }
}
const w_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_wasmer_free(e >>> 0))
class u_ {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(u_.prototype)
        return (e.__wbg_ptr = _), w_.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), w_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_wasmer_free(e)
    }
    static deployApp(e) {
        return l(_.wasmer_deployApp(d(e)))
    }
    static deleteApp(e) {
        return l(_.wasmer_deleteApp(d(e)))
    }
    static createPackage(e) {
        return l(_.wasmer_createPackage(d(e)))
    }
    static publishPackage(e) {
        O(e, u_)
        return l(_.wasmer_publishPackage(e.__wbg_ptr))
    }
    static whoami() {
        return l(_.wasmer_whoami())
    }
    __getClassname() {
        let e, n
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.wasmer___getClassname(i, this.__wbg_ptr)
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            return (e = t), (n = r), u(t, r)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16), _.canonical_abi_free(e, n, 1)
        }
    }
    get entrypoint() {
        const e = _.__wbg_get_wasmer_entrypoint(this.__wbg_ptr)
        return 0 === e ? void 0 : I.__wrap(e)
    }
    set entrypoint(e) {
        let n = 0
        b(e) || (O(e, I), (n = e.__destroy_into_raw())), _.__wbg_set_wasmer_entrypoint(this.__wbg_ptr, n)
    }
    get commands() {
        return l(_.__wbg_get_wasmer_commands(this.__wbg_ptr))
    }
    set commands(e) {
        _.__wbg_set_wasmer_commands(this.__wbg_ptr, d(e))
    }
    get pkg() {
        const e = _.__wbg_get_wasmer_pkg(this.__wbg_ptr)
        return 0 === e ? void 0 : b_.__wrap(e)
    }
    set pkg(e) {
        let n = 0
        b(e) || (O(e, b_), (n = e.__destroy_into_raw())), _.__wbg_set_wasmer_pkg(this.__wbg_ptr, n)
    }
    static fromRegistry(e, n) {
        const r = c(e, _.__wbindgen_malloc, _.__wbindgen_realloc),
            i = t
        return l(_.wasmer_fromRegistry(r, i, b(n) ? 0 : d(n)))
    }
    static fromFile(e, n) {
        return l(_.wasmer_fromFile(d(e), b(n) ? 0 : d(n)))
    }
    static fromWasm(e, n) {
        try {
            const i = _.__wbindgen_add_to_stack_pointer(-16)
            _.wasmer_fromWasm(i, d(e), b(n) ? 0 : d(n))
            var t = s()[i / 4 + 0],
                r = s()[i / 4 + 1]
            if (s()[i / 4 + 2]) throw l(r)
            return u_.__wrap(t)
        } finally {
            _.__wbindgen_add_to_stack_pointer(16)
        }
    }
}
const f_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_wasmerpackage_free(e >>> 0))
class d_ {
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), f_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_wasmerpackage_free(e)
    }
    get manifest() {
        return l(_.__wbg_get_publishpackageoutput_manifest(this.__wbg_ptr))
    }
    set manifest(e) {
        _.__wbg_set_publishpackageoutput_manifest(this.__wbg_ptr, d(e))
    }
    get data() {
        try {
            const a = _.__wbindgen_add_to_stack_pointer(-16)
            _.__wbg_get_wasmerpackage_data(a, this.__wbg_ptr)
            var e = s()[a / 4 + 0],
                n = s()[a / 4 + 1],
                t = ((r = e), (o = n), (r >>>= 0), i().subarray(r / 1, r / 1 + o)).slice()
            return _.canonical_abi_free(e, 1 * n, 1), t
        } finally {
            _.__wbindgen_add_to_stack_pointer(16)
        }
        var r, o
    }
    set data(e) {
        const n = (function (_, e) {
                const n = e(1 * _.length, 1) >>> 0
                return i().set(_, n / 1), (t = _.length), n
            })(e, _.__wbindgen_malloc),
            r = t
        _.__wbg_set_deployedapp_id(this.__wbg_ptr, n, r)
    }
}
const l_ = "undefined" == typeof FinalizationRegistry ? { register: () => {}, unregister: () => {} } : new FinalizationRegistry((e) => _.__wbg_writablestreamsink_free(e >>> 0))
class p_ {
    static __wrap(_) {
        _ >>>= 0
        const e = Object.create(p_.prototype)
        return (e.__wbg_ptr = _), l_.register(e, e.__wbg_ptr, e), e
    }
    __destroy_into_raw() {
        const _ = this.__wbg_ptr
        return (this.__wbg_ptr = 0), l_.unregister(this), _
    }
    free() {
        const e = this.__destroy_into_raw()
        _.__wbg_writablestreamsink_free(e)
    }
    close() {
        return l(_.writablestreamsink_close(this.__wbg_ptr))
    }
    abort(e) {
        _.writablestreamsink_abort(this.__wbg_ptr, d(e))
    }
    write(e) {
        return l(_.writablestreamsink_write(this.__wbg_ptr, d(e)))
    }
}
function y_() {
    const e = {}
    var r
    return (
        (e.wbg = {}),
        (e.wbg.__wbindgen_string_get = function (e, r) {
            const i = n(r),
                o = "string" == typeof i ? i : void 0
            var a = b(o) ? 0 : c(o, _.__wbindgen_malloc, _.__wbindgen_realloc),
                g = t
            ;(s()[e / 4 + 1] = g), (s()[e / 4 + 0] = a)
        }),
        (e.wbg.__wbindgen_is_string = function (_) {
            return "string" == typeof n(_)
        }),
        (e.wbg.__wbg_new_72fb9a18b5ae2624 = function () {
            return d(new Object())
        }),
        (e.wbg.__wbindgen_string_new = function (_, e) {
            return d(u(_, e))
        }),
        (e.wbg.__wbindgen_number_new = function (_) {
            return d(_)
        }),
        (e.wbg.__wbg_defineProperty_cc00e2de8a0f5141 = function (_, e, t) {
            return d(Object.defineProperty(n(_), n(e), n(t)))
        }),
        (e.wbg.__wbg_desiredSize_9c9634287ae396f2 = function (_, e) {
            const t = n(e).desiredSize
            ;(y()[_ / 8 + 1] = b(t) ? 0 : t), (s()[_ / 4 + 0] = !b(t))
        }),
        (e.wbg.__wbg_new_63b92bc8671ed464 = function (_) {
            return d(new Uint8Array(n(_)))
        }),
        (e.wbg.__wbg_error_4663ab3a7a3a9771 = function (_, e) {
            n(_).error(n(e))
        }),
        (e.wbg.__wbindgen_object_clone_ref = function (_) {
            return d(n(_))
        }),
        (e.wbg.__wbg_new_16b304a2cfa7ff4a = function () {
            return d(new Array())
        }),
        (e.wbg.__wbg_push_a5b05aedc7234f9f = function (_, e) {
            return n(_).push(n(e))
        }),
        (e.wbg.__wbg_user_new = function (_) {
            return d(a_.__wrap(_))
        }),
        (e.wbg.__wbg_deployedapp_new = function (_) {
            return d(P.__wrap(_))
        }),
        (e.wbg.__wbindgen_is_object = function (_) {
            const e = n(_)
            return "object" == typeof e && null !== e
        }),
        (e.wbg.__wbg_deleteProperty_13e721a56f19e842 = function () {
            return z(function (_, e) {
                return Reflect.deleteProperty(n(_), n(e))
            }, arguments)
        }),
        (e.wbg.__wbindgen_is_array = function (_) {
            return Array.isArray(n(_))
        }),
        (e.wbg.__wbg_from_89e3fc3ba5e6fb48 = function (_) {
            return d(Array.from(n(_)))
        }),
        (e.wbg.__wbg_length_cd7af8117672b8b8 = function (_) {
            return n(_).length
        }),
        (e.wbg.__wbg_get_bd8e338fbd5f5cc8 = function (_, e) {
            return d(n(_)[e >>> 0])
        }),
        (e.wbg.__wbg_getwithrefkey_4a92a5eca60879b9 = function (_, e) {
            return d(n(_)[n(e)])
        }),
        (e.wbg.__wbg_cwd_99b87adaacac0b1e = function (e, r) {
            const i = n(r).cwd
            var o = b(i) ? 0 : c(i, _.__wbindgen_malloc, _.__wbindgen_realloc),
                a = t
            ;(s()[e / 4 + 1] = a), (s()[e / 4 + 0] = o)
        }),
        (e.wbg.__wbg_uses_87ee8532bf7067c2 = function (_) {
            const e = n(_).uses
            return b(e) ? 0 : d(e)
        }),
        (e.wbg.__wbg_navigator_96ba491902f8f083 = function (_) {
            return d(n(_).navigator)
        }),
        (e.wbg.__wbg_userAgent_569b1cd728f0086d = function () {
            return z(function (e, r) {
                const i = c(n(r).userAgent, _.__wbindgen_malloc, _.__wbindgen_realloc),
                    o = t
                ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
            }, arguments)
        }),
        (e.wbg.__wbg_navigator_342a57e9bfc210d1 = function (_) {
            return d(n(_).navigator)
        }),
        (e.wbg.__wbg_userAgent_d6dbb7190613e928 = function () {
            return z(function (e, r) {
                const i = c(n(r).userAgent, _.__wbindgen_malloc, _.__wbindgen_realloc),
                    o = t
                ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
            }, arguments)
        }),
        (e.wbg.__wbg_publishpackageoutput_new = function (_) {
            return d(H.__wrap(_))
        }),
        (e.wbg.__wbg_new_7a20246daa6eec7e = function () {
            return z(function () {
                return d(new Headers())
            }, arguments)
        }),
        (e.wbg.__wbg_append_aa3f462f9e2b5ff2 = function () {
            return z(function (_, e, t, r, i) {
                n(_).append(u(e, t), u(r, i))
            }, arguments)
        }),
        (e.wbg.__wbg_new_0ae46f44b7485bb2 = function () {
            return z(function () {
                return d(new AbortController())
            }, arguments)
        }),
        (e.wbg.__wbg_signal_3c701f5f40a5f08d = function (_) {
            return d(n(_).signal)
        }),
        (e.wbg.__wbg_fetch_25e3a297f7b04639 = function (_) {
            return d(fetch(n(_)))
        }),
        (e.wbg.__wbg_status_d6d47ad2837621eb = function (_) {
            return n(_).status
        }),
        (e.wbg.__wbg_url_83a6a4f65f7a2b38 = function (e, r) {
            const i = c(n(r).url, _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbg_headers_24def508a7518df9 = function (_) {
            return d(n(_).headers)
        }),
        (e.wbg.__wbg_stringify_8887fe74e1c50d81 = function () {
            return z(function (_) {
                return d(JSON.stringify(n(_)))
            }, arguments)
        }),
        (e.wbg.__wbg_text_668782292b0bc561 = function () {
            return z(function (_) {
                return d(n(_).text())
            }, arguments)
        }),
        (e.wbg.__wbg_length_c20a40f15020d68a = function (_) {
            return n(_).length
        }),
        (e.wbg.__wbg_random_26e2d782b541ca6b =
            "function" == typeof Math.random
                ? Math.random
                : ((r = "Math.random"),
                  () => {
                      throw new Error(`${r} is not defined`)
                  })),
        (e.wbg.__wbg_abort_2c4fb490d878d2b2 = function (_) {
            n(_).abort()
        }),
        (e.wbg.__wbindgen_is_undefined = function (_) {
            return void 0 === n(_)
        }),
        (e.wbg.__wbg_userpackagedefinition_unwrap = function (_) {
            return b_.__unwrap(l(_))
        }),
        (e.wbg.__wbindgen_boolean_get = function (_) {
            const e = n(_)
            return "boolean" == typeof e ? (e ? 1 : 0) : 2
        }),
        (e.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function () {
            return z(function (_, e) {
                n(_).getRandomValues(n(e))
            }, arguments)
        }),
        (e.wbg.__wbindgen_memory = function () {
            return d(_.memory)
        }),
        (e.wbg.__wbg_buffer_12d079cc21e14bdb = function (_) {
            return d(n(_).buffer)
        }),
        (e.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb = function (_, e, t) {
            return d(new Uint8Array(n(_), e >>> 0, t >>> 0))
        }),
        (e.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
            return z(function (_, e) {
                n(_).randomFillSync(l(e))
            }, arguments)
        }),
        (e.wbg.__wbg_crypto_1d1f22824a6a080c = function (_) {
            return d(n(_).crypto)
        }),
        (e.wbg.__wbg_process_4a72847cc503995b = function (_) {
            return d(n(_).process)
        }),
        (e.wbg.__wbg_versions_f686565e586dd935 = function (_) {
            return d(n(_).versions)
        }),
        (e.wbg.__wbg_node_104a2ff8d6ea03a2 = function (_) {
            return d(n(_).node)
        }),
        (e.wbg.__wbg_require_cca90b1a94a0255b = function () {
            return z(function () {
                return d(module.require)
            }, arguments)
        }),
        (e.wbg.__wbg_msCrypto_eb05e62b530a1508 = function (_) {
            return d(n(_).msCrypto)
        }),
        (e.wbg.__wbg_newwithlength_e9b4878cebadb3d3 = function (_) {
            return d(new Uint8Array(_ >>> 0))
        }),
        (e.wbg.__wbg_next_196c84450b364254 = function () {
            return z(function (_) {
                return d(n(_).next())
            }, arguments)
        }),
        (e.wbg.__wbg_done_298b57d23c0fc80c = function (_) {
            return n(_).done
        }),
        (e.wbg.__wbg_value_d93c65011f51a456 = function (_) {
            return d(n(_).value)
        }),
        (e.wbg.__wbg_iterator_2cee6dadfd956dfa = function () {
            return d(Symbol.iterator)
        }),
        (e.wbg.__wbg_next_40fc327bfc8770e6 = function (_) {
            return d(n(_).next)
        }),
        (e.wbg.__wbindgen_is_function = function (_) {
            return "function" == typeof n(_)
        }),
        (e.wbg.__wbg_call_27c0f87801dedf93 = function () {
            return z(function (_, e) {
                return d(n(_).call(n(e)))
            }, arguments)
        }),
        (e.wbg.__wbg_self_ce0dbfc45cf2f5be = function () {
            return z(function () {
                return d(self.self)
            }, arguments)
        }),
        (e.wbg.__wbg_window_c6fb939a7f436783 = function () {
            return z(function () {
                return d(window.window)
            }, arguments)
        }),
        (e.wbg.__wbg_globalThis_d1e6af4856ba331b = function () {
            return z(function () {
                return d(globalThis.globalThis)
            }, arguments)
        }),
        (e.wbg.__wbg_global_207b558942527489 = function () {
            return z(function () {
                return d(global.global)
            }, arguments)
        }),
        (e.wbg.__wbg_newnoargs_e258087cd0daa0ea = function (_, e) {
            return d(new Function(u(_, e)))
        }),
        (e.wbg.__wbg_newwithlength_66ae46612e7f0234 = function (_) {
            return d(new Array(_ >>> 0))
        }),
        (e.wbg.__wbg_isArray_2ab64d95e09ea0ae = function (_) {
            return Array.isArray(n(_))
        }),
        (e.wbg.__wbg_instanceof_ArrayBuffer_836825be07d4c9d2 = function (_) {
            let e
            try {
                e = n(_) instanceof ArrayBuffer
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_toString_0b527fce0e8f2bab = function (e, r, i) {
            const o = c(n(r).toString(i), _.__wbindgen_malloc, _.__wbindgen_realloc),
                a = t
            ;(s()[e / 4 + 1] = a), (s()[e / 4 + 0] = o)
        }),
        (e.wbg.__wbg_message_5bf28016c2b49cfb = function (_) {
            return d(n(_).message)
        }),
        (e.wbg.__wbg_apply_6d0b9cd50eb480c3 = function () {
            return z(function (_, e, t) {
                return d(n(_).apply(n(e), n(t)))
            }, arguments)
        }),
        (e.wbg.__wbg_call_b3ca7c6051f9bec1 = function () {
            return z(function (_, e, t) {
                return d(n(_).call(n(e), n(t)))
            }, arguments)
        }),
        (e.wbg.__wbg_isSafeInteger_f7b04ef02296c4d2 = function (_) {
            return Number.isSafeInteger(n(_))
        }),
        (e.wbg.__wbg_getTime_2bc4375165f02d15 = function (_) {
            return n(_).getTime()
        }),
        (e.wbg.__wbg_toString_c816a20ab859d0c1 = function (_) {
            return d(n(_).toString())
        }),
        (e.wbg.__wbg_then_0c86a60e8fcfe9f6 = function (_, e) {
            return d(n(_).then(n(e)))
        }),
        (e.wbg.__wbg_set_a47bac70306a19a7 = function (_, e, t) {
            n(_).set(n(e), t >>> 0)
        }),
        (e.wbg.__wbg_instanceof_Uint8Array_2b3bbecd033d19f6 = function (_) {
            let e
            try {
                e = n(_) instanceof Uint8Array
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_buffer_dd7f74bc60f1faab = function (_) {
            return d(n(_).buffer)
        }),
        (e.wbg.__wbg_subarray_a1f73cd4b5b42fe1 = function (_, e, t) {
            return d(n(_).subarray(e >>> 0, t >>> 0))
        }),
        (e.wbg.__wbg_byteLength_58f7b4fab1919d44 = function (_) {
            return n(_).byteLength
        }),
        (e.wbg.__wbg_apply_0a5aa603881e6d79 = function () {
            return z(function (_, e, t) {
                return d(Reflect.apply(n(_), n(e), n(t)))
            }, arguments)
        }),
        (e.wbg.__wbg_get_e3c254076557e348 = function () {
            return z(function (_, e) {
                return d(Reflect.get(n(_), n(e)))
            }, arguments)
        }),
        (e.wbg.__wbg_has_0af94d20077affa2 = function () {
            return z(function (_, e) {
                return Reflect.has(n(_), n(e))
            }, arguments)
        }),
        (e.wbg.__wbg_set_1f9b04f170055d33 = function () {
            return z(function (_, e, t) {
                return Reflect.set(n(_), n(e), n(t))
            }, arguments)
        }),
        (e.wbg.__wbg_new_e84e6f87c19e0a68 = function () {
            return z(function (_, e) {
                return d(new WebAssembly.Instance(n(_), n(e)))
            }, arguments)
        }),
        (e.wbg.__wbg_instanceof_Module_85e61e50678d3f9d = function (_) {
            let e
            try {
                e = n(_) instanceof WebAssembly.Module
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_new_e52b434e80c9c879 = function () {
            return z(function (_) {
                return d(new WebAssembly.Module(n(_)))
            }, arguments)
        }),
        (e.wbg.__wbg_get_c5eec4a80c99e682 = function () {
            return z(function (_, e) {
                return d(n(_).get(e >>> 0))
            }, arguments)
        }),
        (e.wbg.__wbg_new_68a214e593397fc2 = function () {
            return z(function (_) {
                return d(new WebAssembly.Memory(n(_)))
            }, arguments)
        }),
        (e.wbg.__wbindgen_object_drop_ref = function (_) {
            l(_)
        }),
        (e.wbg.__wbindgen_error_new = function (_, e) {
            return d(new Error(u(_, e)))
        }),
        (e.wbg.__wbindgen_jsval_loose_eq = function (_, e) {
            return n(_) == n(e)
        }),
        (e.wbg.__wbindgen_number_get = function (_, e) {
            const t = n(e),
                r = "number" == typeof t ? t : void 0
            ;(y()[_ / 8 + 1] = b(r) ? 0 : r), (s()[_ / 4 + 0] = !b(r))
        }),
        (e.wbg.__wbg_entries_95cc2c823b285a09 = function (_) {
            return d(Object.entries(n(_)))
        }),
        (e.wbg.__wbindgen_as_number = function (_) {
            return +n(_)
        }),
        (e.wbg.__wbg_String_389b54bd9d25375f = function (e, r) {
            const i = c(String(n(r)), _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbg_new_d9bc3a0147634640 = function () {
            return d(new Map())
        }),
        (e.wbg.__wbg_set_9182712abebf82ef = function (_, e, t) {
            n(_)[l(e)] = l(t)
        }),
        (e.wbg.__wbindgen_bigint_get_as_i64 = function (e, t) {
            const r = n(t),
                i = "bigint" == typeof r ? r : void 0
            ;(((null !== h && h.buffer === _.memory.buffer) || (h = new BigInt64Array(_.memory.buffer)), h)[e / 8 + 1] = b(i) ? BigInt(0) : i), (s()[e / 4 + 0] = !b(i))
        }),
        (e.wbg.__wbindgen_debug_string = function (e, r) {
            const i = c(m(n(r)), _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbindgen_throw = function (_, e) {
            throw new Error(u(_, e))
        }),
        (e.wbg.__wbindgen_rethrow = function (_) {
            throw l(_)
        }),
        (e.wbg.__wbindgen_link_fc1eedd35dc7e0a6 = function (e) {
            const n = c("data:application/javascript," + encodeURIComponent("onmessage = function (ev) {\n            let [ia, index, value] = ev.data;\n            ia = new Int32Array(ia.buffer);\n            let result = Atomics.wait(ia, index, value);\n            postMessage(result);\n        };\n        "), _.__wbindgen_malloc, _.__wbindgen_realloc),
                r = t
            ;(s()[e / 4 + 1] = r), (s()[e / 4 + 0] = n)
        }),
        (e.wbg.__wbg_new_ff19bad2f50bf62b = function () {
            return z(function (_, e) {
                return d(new Worker(u(_, e)))
            }, arguments)
        }),
        (e.wbg.__wbg_setonmessage_9961dd0a8670d682 = function (_, e) {
            n(_).onmessage = n(e)
        }),
        (e.wbg.__wbg_of_6a70eed8d41f469c = function (_, e, t) {
            return d(Array.of(n(_), n(e), n(t)))
        }),
        (e.wbg.__wbindgen_cb_drop = function (_) {
            const e = l(_).original
            if (1 == e.cnt--) return (e.a = 0), !0
            return !1
        }),
        (e.wbg.__wbg_data_ba3ea616b5392abf = function (_) {
            return d(n(_).data)
        }),
        (e.wbg.__wbg_then_a73caa9a87991566 = function (_, e, t) {
            return d(n(_).then(n(e), n(t)))
        }),
        (e.wbg.__wbg_waitAsync_5d743fc9058ba01a = function () {
            return d(Atomics.waitAsync)
        }),
        (e.wbg.__wbg_new_8cccba86b0f574cb = function (_) {
            return d(new Int32Array(n(_)))
        }),
        (e.wbg.__wbg_waitAsync_46d5c36955b71a79 = function (_, e, t) {
            return d(Atomics.waitAsync(n(_), e, t))
        }),
        (e.wbg.__wbg_async_19c0400d97cc72fe = function (_) {
            return n(_).async
        }),
        (e.wbg.__wbg_value_571d60108110e917 = function (_) {
            return d(n(_).value)
        }),
        (e.wbg.__wbg_new_81740750da40724f = function (e, n) {
            try {
                var t = { a: e, b: n }
                const r = new Promise((e, n) => {
                    const r = t.a
                    t.a = 0
                    try {
                        return (function (e, n, t, r) {
                            _._ZN12wasm_bindgen7convert8closures11invoke2_mut17h3c6428028aee8d8cE(e, n, d(t), d(r))
                        })(r, t.b, e, n)
                    } finally {
                        t.a = r
                    }
                })
                return d(r)
            } finally {
                t.a = t.b = 0
            }
        }),
        (e.wbg.__wbg_queueMicrotask_481971b0d87f3dd4 = function (_) {
            queueMicrotask(n(_))
        }),
        (e.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6 = function (_) {
            return d(n(_).queueMicrotask)
        }),
        (e.wbg.__wbg_resolve_b0083a7967828ec8 = function (_) {
            return d(Promise.resolve(n(_)))
        }),
        (e.wbg.__wbg_byobRequest_05466bb0cacd89fa = function (_) {
            const e = n(_).byobRequest
            return b(e) ? 0 : d(e)
        }),
        (e.wbg.__wbg_view_1fe68975176283b3 = function (_) {
            const e = n(_).view
            return b(e) ? 0 : d(e)
        }),
        (e.wbg.__wbg_close_d29a75e8efc5fa94 = function () {
            return z(function (_) {
                n(_).close()
            }, arguments)
        }),
        (e.wbg.__wbg_new_28c511d9baebfa89 = function (_, e) {
            return d(new Error(u(_, e)))
        }),
        (e.wbg.__wbg_byteOffset_81d60f7392524f62 = function (_) {
            return n(_).byteOffset
        }),
        (e.wbg.__wbg_byteLength_2e8dcbbe54bdad62 = function (_) {
            return n(_).byteLength
        }),
        (e.wbg.__wbg_getPrototypeOf_455485b4d3ea2844 = function () {
            return z(function (_) {
                return d(Reflect.getPrototypeOf(n(_)))
            }, arguments)
        }),
        (e.wbg.__wbg_constructor_1d9b26449d83b236 = function (_) {
            return d(n(_).constructor)
        }),
        (e.wbg.__wbg_imports_b8bfe22c16ff426c = function (_) {
            return d(WebAssembly.Module.imports(n(_)))
        }),
        (e.wbg.__wbg_trap_new = function (_) {
            return d(i_.__wrap(_))
        }),
        (e.wbg.__wbg_instanceof_Error_e20bb56fd5591a93 = function (_) {
            let e
            try {
                e = n(_) instanceof Error
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_exports_96215cbfbd768629 = function (_) {
            return d(WebAssembly.Module.exports(n(_)))
        }),
        (e.wbg.__wbg_value_ba389979a670beb7 = function (_) {
            return d(n(_).value)
        }),
        (e.wbg.__wbg_setvalue_b71bb305de7bfe5e = function (_, e) {
            n(_).value = n(e)
        }),
        (e.wbg.__wbg_instanceof_Object_71ca3c0a59266746 = function (_) {
            let e
            try {
                e = n(_) instanceof Object
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_for_27c67e2dbdce22f6 = function (_, e) {
            return d(Symbol.for(u(_, e)))
        }),
        (e.wbg.__wbg_assert_cbe0f437102f186a = function (_, e) {
            console.assert(0 !== _, n(e))
        }),
        (e.wbg.__wbg_registry_3c50a218bff1b9c2 = function (_) {
            const e = n(_).registry
            return b(e) ? 0 : d(e)
        }),
        (e.wbg.__wbindgen_is_null = function (_) {
            return null === n(_)
        }),
        (e.wbg.__wbg_apiKey_45d9470ec7a59981 = function (e, r) {
            const i = n(r).apiKey
            var o = b(i) ? 0 : c(i, _.__wbindgen_malloc, _.__wbindgen_realloc),
                a = t
            ;(s()[e / 4 + 1] = a), (s()[e / 4 + 0] = o)
        }),
        (e.wbg.__wbg_networkGateway_19db657660e81113 = function (e, r) {
            const i = n(r).networkGateway
            var o = b(i) ? 0 : c(i, _.__wbindgen_malloc, _.__wbindgen_realloc),
                a = t
            ;(s()[e / 4 + 1] = a), (s()[e / 4 + 0] = o)
        }),
        (e.wbg.__wbg_read_79c1f6a58844174c = function (_) {
            return d(n(_).read())
        }),
        (e.wbg.__wbindgen_is_falsy = function (_) {
            return !n(_)
        }),
        (e.wbg.__wbg_grow_d22cf52ca640e518 = function () {
            return z(function (_, e) {
                return n(_).grow(e >>> 0)
            }, arguments)
        }),
        (e.wbg.__wbg_instanceof_RangeError_02b6d567ba14691e = function (_) {
            let e
            try {
                e = n(_) instanceof RangeError
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_instanceof_Blob_c7124075b9fe8788 = function (_) {
            let e
            try {
                e = n(_) instanceof Blob
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_readAsArrayBuffer_a3d6ef46725fe135 = function () {
            return z(function (_, e) {
                n(_).readAsArrayBuffer(n(e))
            }, arguments)
        }),
        (e.wbg.__wbg_result_d1e1134585be8336 = function () {
            return z(function (_) {
                return d(n(_).result)
            }, arguments)
        }),
        (e.wbg.__wbg_grow_fab8eb706381c80c = function (_, e) {
            return n(_).grow(e >>> 0)
        }),
        (e.wbg.__wbg_hardwareConcurrency_d03718a8f6c952ca = function (_) {
            return n(_).hardwareConcurrency
        }),
        (e.wbg.__wbg_hardwareConcurrency_882bdbf2314d9697 = function (_) {
            return n(_).hardwareConcurrency
        }),
        (e.wbg.__wbg_instance_new = function (_) {
            return d(q.__wrap(_))
        }),
        (e.wbg.__wbg_wasmer_new = function (_) {
            return d(u_.__wrap(_))
        }),
        (e.wbg.__wbg_instanceof_TypeError_6134172734e39ae0 = function (_) {
            let e
            try {
                e = n(_) instanceof TypeError
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbindgen_is_bigint = function (_) {
            return "bigint" == typeof n(_)
        }),
        (e.wbg.__wbindgen_bigint_from_u64 = function (_) {
            return d(BigInt.asUintN(64, _))
        }),
        (e.wbg.__wbindgen_jsval_eq = function (_, e) {
            return n(_) === n(e)
        }),
        (e.wbg.__wbg_BigInt_42b692c18e1ac6d6 = function (_) {
            return d(BigInt(n(_)))
        }),
        (e.wbg.__wbindgen_ge = function (_, e) {
            return n(_) >= n(e)
        }),
        (e.wbg.__wbg_static_accessor_IMPORT_META_URL_3be0dba93f76ed43 = function (e) {
            const n = c(import.meta.url, _.__wbindgen_malloc, _.__wbindgen_realloc),
                r = t
            ;(s()[e / 4 + 1] = r), (s()[e / 4 + 0] = n)
        }),
        (e.wbg.__wbg_lineno_b77a96a16d456fa4 = function (_) {
            return n(_).lineno
        }),
        (e.wbg.__wbg_colno_33832be35c161583 = function (_) {
            return n(_).colno
        }),
        (e.wbg.__wbg_newwithu8arraysequenceandoptions_8a6b4effbcac4a62 = function () {
            return z(function (_, e) {
                return d(new Blob(n(_), n(e)))
            }, arguments)
        }),
        (e.wbg.__wbg_createObjectURL_9fbd9480174d7f02 = function () {
            return z(function (e, r) {
                const i = c(URL.createObjectURL(n(r)), _.__wbindgen_malloc, _.__wbindgen_realloc),
                    o = t
                ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
            }, arguments)
        }),
        (e.wbg.__wbg_terminate_4181935ab1b2fa80 = function (_) {
            n(_).terminate()
        }),
        (e.wbg.__wbg_instanceof_DedicatedWorkerGlobalScope_b4fdf8f55d323b44 = function (_) {
            let e
            try {
                e = n(_) instanceof DedicatedWorkerGlobalScope
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_postMessage_101f1eec24e6c59b = function () {
            return z(function (_, e) {
                n(_).postMessage(n(e))
            }, arguments)
        }),
        (e.wbg.__wbg_new_abda76e883ba8a5f = function () {
            return d(new Error())
        }),
        (e.wbg.__wbg_stack_658279fe44541cf6 = function (e, r) {
            const i = c(n(r).stack, _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbg_error_f851667af71bcfc6 = function (e, n) {
            let t, r
            try {
                ;(t = e), (r = n), console.error(u(e, n))
            } finally {
                _.canonical_abi_free(t, r, 1)
            }
        }),
        (e.wbg.__wbg_set_d4638f722068f043 = function (_, e, t) {
            n(_)[e >>> 0] = l(t)
        }),
        (e.wbg.__wbindgen_bigint_from_i64 = function (_) {
            return d(_)
        }),
        (e.wbg.__wbg_keys_91e412b4b222659f = function (_) {
            return d(Object.keys(n(_)))
        }),
        (e.wbg.__wbg_is_010fdc0f4ab96916 = function (_, e) {
            return Object.is(n(_), n(e))
        }),
        (e.wbg.__wbindgen_lt = function (_, e) {
            return n(_) < n(e)
        }),
        (e.wbg.__wbg_new_5dd86ebc917d9f52 = function (_, e) {
            return d(new TypeError(u(_, e)))
        }),
        (e.wbg.__wbg_instanceof_Date_f65cf97fb83fc369 = function (_) {
            let e
            try {
                e = n(_) instanceof Date
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01 = function (_) {
            let e
            try {
                e = n(_) instanceof Window
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_setTimeout_06458eba2b40711c = function () {
            return z(function (_, e, t) {
                return n(_).setTimeout(n(e), t)
            }, arguments)
        }),
        (e.wbg.__wbg_setTimeout_4f29f8d8e0e349da = function () {
            return z(function (_, e, t) {
                return n(_).setTimeout(n(e), t)
            }, arguments)
        }),
        (e.wbg.__wbg_args_4d15d7afb42e284d = function (_) {
            const e = n(_).args
            return b(e) ? 0 : d(e)
        }),
        (e.wbg.__wbg_env_ad8595f2986ecc88 = function (_) {
            return d(n(_).env)
        }),
        (e.wbg.__wbg_stdin_00c789dbac01e87a = function (_) {
            const e = n(_).stdin
            return b(e) ? 0 : d(e)
        }),
        (e.wbg.__wbg_mount_6bbd20e7e89111c6 = function (_) {
            return d(n(_).mount)
        }),
        (e.wbg.__wbg_program_86b0cb49d1fef987 = function (_) {
            return d(n(_).program)
        }),
        (e.wbg.__wbg_runtime_0041006d6e1bcee1 = function (_) {
            return d(n(_).runtime)
        }),
        (e.wbg.__wbg_new_2575c598b4006174 = function () {
            return z(function (_, e) {
                return d(new WebSocket(u(_, e)))
            }, arguments)
        }),
        (e.wbg.__wbg_send_4048cf6609d823d6 = function () {
            return z(function (_, e) {
                n(_).send(n(e))
            }, arguments)
        }),
        (e.wbg.__wbg_setonopen_1264714f7bce70f8 = function (_, e) {
            n(_).onopen = n(e)
        }),
        (e.wbg.__wbg_setonclose_b2fc3455ef8818f4 = function (_, e) {
            n(_).onclose = n(e)
        }),
        (e.wbg.__wbg_new_d881a9e329b0c6bb = function () {
            return z(function () {
                return d(new FileReader())
            }, arguments)
        }),
        (e.wbg.__wbg_setonloadend_b4bc238c5134e2ce = function (_, e) {
            n(_).onloadend = n(e)
        }),
        (e.wbg.__wbg_setbinaryType_68fc3c6feda7310c = function (_, e) {
            n(_).binaryType = l(e)
        }),
        (e.wbg.__wbg_setonmessage_46f324ad82067922 = function (_, e) {
            n(_).onmessage = n(e)
        }),
        (e.wbg.__wbg_writablestreamsink_new = function (_) {
            return d(p_.__wrap(_))
        }),
        (e.wbg.__wbg_newwithunderlyingsinkandstrategy_c2f6ff1feb31a75d = function () {
            return z(function (_, e) {
                return d(new WritableStream(n(_), n(e)))
            }, arguments)
        }),
        (e.wbg.__wbg_readablestreamsource_new = function (_) {
            return d(X.__wrap(_))
        }),
        (e.wbg.__wbg_newwithunderlyingsourceandstrategy_6d0f6af669981cbe = function () {
            return z(function (_, e) {
                return d(new ReadableStream(n(_), n(e)))
            }, arguments)
        }),
        (e.wbg.__wbg_new_e4a725de62485552 = function () {
            return z(function (_) {
                return d(new ReadableStreamDefaultReader(n(_)))
            }, arguments)
        }),
        (e.wbg.__wbg_releaseLock_6eb6fa75435874b8 = function (_) {
            n(_).releaseLock()
        }),
        (e.wbg.__wbg_command_new = function (_) {
            return d(I.__wrap(_))
        }),
        (e.wbg.__wbg_log_a4530b4fe289336f = function (_) {
            console.log(n(_))
        }),
        (e.wbg.__wbg_set_8417257aaedc936b = function (_, e, t) {
            return d(n(_).set(n(e), n(t)))
        }),
        (e.wbg.__wbindgen_in = function (_, e) {
            return n(_) in n(e)
        }),
        (e.wbg.__wbg_newwithoptions_6e193f98830c7b27 = function () {
            return z(function (_, e, t) {
                return d(new Worker(u(_, e), n(t)))
            }, arguments)
        }),
        (e.wbg.__wbg_setonerror_3592f5397c5abfa6 = function (_, e) {
            n(_).onerror = n(e)
        }),
        (e.wbg.__wbindgen_module = function () {
            return d(v_.__wbindgen_wasm_module)
        }),
        (e.wbg.__wbg_instanceof_Table_5c3f1de7ecca11f1 = function (_) {
            let e
            try {
                e = n(_) instanceof WebAssembly.Table
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_instanceof_Function_e2a139db462a50e5 = function (_) {
            let e
            try {
                e = n(_) instanceof Function
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_instanceof_Global_3778f3e008d5c71c = function (_) {
            let e
            try {
                e = n(_) instanceof WebAssembly.Global
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbindgen_function_table = function () {
            return d(_.__wbindgen_export_3)
        }),
        (e.wbg.__wbg_bind_4d857b598695205e = function (_, e, t, r) {
            return d(n(_).bind(n(e), n(t), n(r)))
        }),
        (e.wbg.__wbg_exports_b1a9194ebc485332 = function (_) {
            return d(n(_).exports)
        }),
        (e.wbg.__wbindgen_bigint_from_u128 = function (_, e) {
            return d((BigInt.asUintN(64, _) << BigInt(64)) | BigInt.asUintN(64, e))
        }),
        (e.wbg.__wbg_instanceof_Response_4c3b1446206114d1 = function (_) {
            let e
            try {
                e = n(_) instanceof Response
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_headers_d135d2bb8cc60413 = function (_) {
            return d(n(_).headers)
        }),
        (e.wbg.__wbg_redirected_8fe7aaf7e40a1256 = function (_) {
            return n(_).redirected
        }),
        (e.wbg.__wbg_fetch_6c415b3a07763878 = function (_, e) {
            return d(n(_).fetch(n(e)))
        }),
        (e.wbg.__wbindgen_shr = function (_, e) {
            return d(n(_) >> n(e))
        }),
        (e.wbg.__wbg_instanceof_Memory_00b2d7185876ce08 = function (_) {
            let e
            try {
                e = n(_) instanceof WebAssembly.Memory
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function () {
            return d(new Date())
        }),
        (e.wbg.__wbg_new_cf3ec55744a78578 = function (_) {
            return d(new Date(n(_)))
        }),
        (e.wbg.__wbg_getTimezoneOffset_38257122e236c190 = function (_) {
            return n(_).getTimezoneOffset()
        }),
        (e.wbg.__wbg_instanceof_WorkerGlobalScope_af28ee97555db40a = function (_) {
            let e
            try {
                e = n(_) instanceof WorkerGlobalScope
            } catch (_) {
                e = !1
            }
            return e
        }),
        (e.wbg.__wbg_fetch_693453ca3f88c055 = function (_, e) {
            return d(n(_).fetch(n(e)))
        }),
        (e.wbg.__wbg_locked_904a38b2e76b53f2 = function (_) {
            return n(_).locked
        }),
        (e.wbg.__wbg_close_f1aedba2b84dc3a2 = function (_) {
            return d(n(_).close())
        }),
        (e.wbg.__wbg_close_79df9bcee94a607c = function () {
            return z(function (_) {
                n(_).close()
            }, arguments)
        }),
        (e.wbg.__wbg_enqueue_e8019641f9877e27 = function () {
            return z(function (_, e) {
                n(_).enqueue(n(e))
            }, arguments)
        }),
        (e.wbg.__wbg_newwithstrandinit_f581dff0d19a8b03 = function () {
            return z(function (_, e, t) {
                return d(new Request(u(_, e), n(t)))
            }, arguments)
        }),
        (e.wbg.__wbg_arrayBuffer_5b2688e3dd873fed = function () {
            return z(function (_) {
                return d(n(_).arrayBuffer())
            }, arguments)
        }),
        (e.wbg.__wbg_origin_d1b192ced92c0c90 = function (e, r) {
            const i = c(n(r).origin, _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbg_lastEventId_bc8a09aa2e426fdc = function (e, r) {
            const i = c(n(r).lastEventId, _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbg_postMessage_f071c51d77b68152 = function () {
            return z(function (_, e) {
                n(_).postMessage(n(e))
            }, arguments)
        }),
        (e.wbg.__wbg_message_a438a1cce45796a8 = function (e, r) {
            const i = c(n(r).message, _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbg_filename_c27bcace1c63f7c3 = function (e, r) {
            const i = c(n(r).filename, _.__wbindgen_malloc, _.__wbindgen_realloc),
                o = t
            ;(s()[e / 4 + 1] = o), (s()[e / 4 + 0] = i)
        }),
        (e.wbg.__wbg_set_27f236f6d7a28c29 = function () {
            return z(function (_, e, t, r, i) {
                n(_).set(u(e, t), u(r, i))
            }, arguments)
        }),
        (e.wbg.__wbg_respond_6272b341f88864a2 = function () {
            return z(function (_, e) {
                n(_).respond(e >>> 0)
            }, arguments)
        }),
        (e.wbg.__wbindgen_closure_wrapper6568 = function (_, e, n) {
            return d(v(_, e, 523, R))
        }),
        (e.wbg.__wbindgen_closure_wrapper6589 = function (_, e, n) {
            return d(v(_, e, 523, R))
        }),
        (e.wbg.__wbindgen_closure_wrapper7444 = function (_, e, n) {
            return d(A(_, e, 709, F))
        }),
        (e.wbg.__wbindgen_closure_wrapper8173 = function (_, e, n) {
            return d(A(_, e, 709, T))
        }),
        (e.wbg.__wbindgen_closure_wrapper8179 = function (_, e, n) {
            return d(v(_, e, 709, R))
        }),
        (e.wbg.__wbindgen_closure_wrapper8235 = function (_, e, n) {
            return d(v(_, e, 709, R))
        }),
        e
    )
}
function h_(_, e) {
    _.wbg.memory = e || new WebAssembly.Memory({ initial: 32, maximum: 16384, shared: !0 })
}
function m_(e, n) {
    return (_ = e.exports), (v_.__wbindgen_wasm_module = n), (h = null), (p = null), (g = null), (r = null), _.__wbindgen_start(), _
}
function k_(e, n) {
    if (void 0 !== _) return _
    const t = y_()
    h_(t, n), e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e))
    return m_(new WebAssembly.Instance(e, t), e)
}
async function v_(e, n) {
    if (void 0 !== _) return _
    void 0 === e && (e = new URL("wasmer_js_bg.wasm", import.meta.url))
    const t = y_()
    ;("string" == typeof e || ("function" == typeof Request && e instanceof Request) || ("function" == typeof URL && e instanceof URL)) && (e = fetch(e)), h_(t, n)
    const { instance: r, module: i } = await (async function (_, e) {
        if ("function" == typeof Response && _ instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
                try {
                    return await WebAssembly.instantiateStreaming(_, e)
                } catch (e) {
                    if ("application/wasm" == _.headers.get("Content-Type")) throw e
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e)
                }
            const n = await _.arrayBuffer()
            return await WebAssembly.instantiate(n, e)
        }
        {
            const n = await WebAssembly.instantiate(_, e)
            return n instanceof WebAssembly.Instance ? { instance: n, module: _ } : n
        }
    })(await e, t)
    return m_(r, i)
}
const R_ = async (_, e) => {
        _ ? (_ instanceof WebAssembly.Module || _ instanceof URL || _ instanceof WebAssembly.Module) && (e ? (console.info("Passing the module and memory as first arguments to the init function is deprecated, please use: `init({module: WASM_MODULE, memory: WASM_MEMORY})`"), (_ = { module: _, memory: e })) : (console.info("Passing the module as first argument to the init function is deprecated, please use: `init({module: WASM_MODULE})`"), (_ = { module: _ }))) : (_ = {}), A_(_)
        let n = await v_(_.module, _.memory)
        return _.log && E(_.log), _.workerUrl && M(_.workerUrl.toString()), n
    },
    A_ = (_) => {
        globalThis.__WASMER_REGISTRY__ = { registryUrl: _.registryUrl, token: _.token }
    }
;(globalThis.__WASMER_INTERNALS__ = { ThreadPoolWorker: t_, init: R_ }),
    (globalThis.__WASMER_INIT__ = !0),
    (globalThis.$RefreshReg$ = globalThis.$RefreshReg$ || function () {}),
    (globalThis.$RefreshSig$ =
        globalThis.$RefreshSig$ ||
        function () {
            return function () {}
        })
export { L as Atom, I as Command, P as DeployedApp, D as Directory, q as Instance, N as IntoUnderlyingByteSource, J as IntoUnderlyingSink, V as IntoUnderlyingSource, H as PublishPackageOutput, X as ReadableStreamSource, e_ as Runtime, t_ as ThreadPoolWorker, i_ as Trap, a_ as User, b_ as UserPackageDefinition, s_ as Volume, u_ as Wasmer, d_ as WasmerPackage, p_ as WritableStreamSink, R_ as init, k_ as initSync, E as initializeLogger, S as on_start, j as runWasix, A_ as setRegistry, M as setWorkerUrl, W as wat2wasm }
