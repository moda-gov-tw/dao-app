import { r as requireLocalforage } from "./index.43f3f5e7.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var localforageExports = requireLocalforage();
const localforage = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: localforageExports
}, [localforageExports]);
export {
  localforage as l
};
