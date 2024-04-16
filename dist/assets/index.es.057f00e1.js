import { I as IEvents, a as I, A as At$1, U as Ut$1, L as Li, c as cjs, N as N$1, e as events, h as cjs$1, _ as _default, j as generateKeyPair, k as encodeIss, R as Rn, l as An, s as signJWT, m as Un, n as _n, o as Pe, t as safeJsonStringify, V as Vn, v as jn, D as Dn, w as Cn, x as safeJsonParse, Z as Z$1, $ as $$3, y as toString, z as p$3, B as et$1, J as JsonRpcProvider, E as WsConnection, G as qn, H as isJsonRpcRequest, K as isJsonRpcResponse, M as formatJsonRpcResult, O as cjs$2, Q as U$2, S as ot$2, T as yt$1, X as mt$1, Y as Xn, a0 as it$1, a1 as A$1, a2 as formatJsonRpcError, a3 as st$1, a4 as isJsonRpcResult, a5 as isJsonRpcError, a6 as Dt$1, a7 as Rt$1, a8 as y$2, a9 as rt$1, aa as formatJsonRpcRequest, ab as nt$1, ac as tt$1, ad as $e$1, ae as je$1, af as ee, ag as Bn, ah as Yn, ai as $n, aj as at$1, ak as getBigIntRpcId, al as ut$1, am as C$1, an as H$2, ao as St$1, ap as ct$1, aq as wt$1, ar as jt, as as $t$1, at as sn, au as an, av as Vt, aw as cn, ax as _t$1, ay as Lt$1, az as kt$1, aA as xt$1, aB as Gt, aC as Mt$1, aD as Kt$1, aE as Ft$1, aF as Ct$1, aG as Fn, aH as requireBrowserPonyfill, aI as isHttpUrl, aJ as parseConnectionError, aK as Ze$1, aL as te, aM as S$2, aN as On, aO as __vitePreload } from "./index.43f3f5e7.js";
class n extends IEvents {
  constructor(s) {
    super(), this.opts = s, this.protocol = "wc", this.version = 2;
  }
}
class h extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
}
class a {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
}
class u$1 extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
}
class g$2 extends IEvents {
  constructor(s) {
    super();
  }
}
class p$2 {
  constructor(s, t, o, w2) {
    this.core = s, this.logger = t, this.name = o;
  }
}
class d extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
}
class E$1 extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t;
  }
}
class y$1 {
  constructor(s, t) {
    this.projectId = s, this.logger = t;
  }
}
class b {
  constructor(s) {
    this.opts = s, this.protocol = "wc", this.version = 2;
  }
}
class S$1 {
  constructor(s) {
    this.client = s;
  }
}
function $i$1(r, e) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
    t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var n2 = r.charAt(s), a2 = n2.charCodeAt(0);
    if (t[a2] !== 255)
      throw new TypeError(n2 + " is ambiguous");
    t[a2] = s;
  }
  var o = r.length, h2 = r.charAt(0), l = Math.log(o) / Math.log(256), d2 = Math.log(256) / Math.log(o);
  function b2(u2) {
    if (u2 instanceof Uint8Array || (ArrayBuffer.isView(u2) ? u2 = new Uint8Array(u2.buffer, u2.byteOffset, u2.byteLength) : Array.isArray(u2) && (u2 = Uint8Array.from(u2))), !(u2 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (u2.length === 0)
      return "";
    for (var D2 = 0, A2 = 0, v2 = 0, R = u2.length; v2 !== R && u2[v2] === 0; )
      v2++, D2++;
    for (var T = (R - v2) * d2 + 1 >>> 0, m2 = new Uint8Array(T); v2 !== R; ) {
      for (var S2 = u2[v2], x = 0, I2 = T - 1; (S2 !== 0 || x < A2) && I2 !== -1; I2--, x++)
        S2 += 256 * m2[I2] >>> 0, m2[I2] = S2 % o >>> 0, S2 = S2 / o >>> 0;
      if (S2 !== 0)
        throw new Error("Non-zero carry");
      A2 = x, v2++;
    }
    for (var P2 = T - A2; P2 !== T && m2[P2] === 0; )
      P2++;
    for (var B = h2.repeat(D2); P2 < T; ++P2)
      B += r.charAt(m2[P2]);
    return B;
  }
  function y2(u2) {
    if (typeof u2 != "string")
      throw new TypeError("Expected String");
    if (u2.length === 0)
      return new Uint8Array();
    var D2 = 0;
    if (u2[D2] !== " ") {
      for (var A2 = 0, v2 = 0; u2[D2] === h2; )
        A2++, D2++;
      for (var R = (u2.length - D2) * l + 1 >>> 0, T = new Uint8Array(R); u2[D2]; ) {
        var m2 = t[u2.charCodeAt(D2)];
        if (m2 === 255)
          return;
        for (var S2 = 0, x = R - 1; (m2 !== 0 || S2 < v2) && x !== -1; x--, S2++)
          m2 += o * T[x] >>> 0, T[x] = m2 % 256 >>> 0, m2 = m2 / 256 >>> 0;
        if (m2 !== 0)
          throw new Error("Non-zero carry");
        v2 = S2, D2++;
      }
      if (u2[D2] !== " ") {
        for (var I2 = R - v2; I2 !== R && T[I2] === 0; )
          I2++;
        for (var P2 = new Uint8Array(A2 + (R - I2)), B = A2; I2 !== R; )
          P2[B++] = T[I2++];
        return P2;
      }
    }
  }
  function k(u2) {
    var D2 = y2(u2);
    if (D2)
      return D2;
    throw new Error(`Non-${e} character`);
  }
  return { encode: b2, decodeUnsafe: y2, decode: k };
}
var Fi$1 = $i$1, Mi = Fi$1;
const Oe = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
    return r;
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Ki = (r) => new TextEncoder().encode(r), ki = (r) => new TextDecoder().decode(r);
class Bi {
  constructor(e, t, i) {
    this.name = e, this.prefix = t, this.baseEncode = i;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class ji {
  constructor(e, t, i) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return xe(this, e);
  }
}
class Vi {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return xe(this, e);
  }
  decode(e) {
    const t = e[0], i = this.decoders[t];
    if (i)
      return i.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const xe = (r, e) => new Vi({ ...r.decoders || { [r.prefix]: r }, ...e.decoders || { [e.prefix]: e } });
class qi {
  constructor(e, t, i, s) {
    this.name = e, this.prefix = t, this.baseEncode = i, this.baseDecode = s, this.encoder = new Bi(e, t, i), this.decoder = new ji(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const H$1 = ({ name: r, prefix: e, encode: t, decode: i }) => new qi(r, e, t, i), M$2 = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i, decode: s } = Mi(t, e);
  return H$1({ prefix: r, name: e, encode: i, decode: (n2) => Oe(s(n2)) });
}, Yi = (r, e, t, i) => {
  const s = {};
  for (let d2 = 0; d2 < e.length; ++d2)
    s[e[d2]] = d2;
  let n2 = r.length;
  for (; r[n2 - 1] === "="; )
    --n2;
  const a2 = new Uint8Array(n2 * t / 8 | 0);
  let o = 0, h2 = 0, l = 0;
  for (let d2 = 0; d2 < n2; ++d2) {
    const b2 = s[r[d2]];
    if (b2 === void 0)
      throw new SyntaxError(`Non-${i} character`);
    h2 = h2 << t | b2, o += t, o >= 8 && (o -= 8, a2[l++] = 255 & h2 >> o);
  }
  if (o >= t || 255 & h2 << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a2;
}, Gi = (r, e, t) => {
  const i = e[e.length - 1] === "=", s = (1 << t) - 1;
  let n2 = "", a2 = 0, o = 0;
  for (let h2 = 0; h2 < r.length; ++h2)
    for (o = o << 8 | r[h2], a2 += 8; a2 > t; )
      a2 -= t, n2 += e[s & o >> a2];
  if (a2 && (n2 += e[s & o << t - a2]), i)
    for (; n2.length * t & 7; )
      n2 += "=";
  return n2;
}, p$1 = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) => H$1({ prefix: e, name: r, encode(s) {
  return Gi(s, i, t);
}, decode(s) {
  return Yi(s, i, t, r);
} }), Ji = H$1({ prefix: "\0", name: "identity", encode: (r) => ki(r), decode: (r) => Ki(r) });
var Hi = Object.freeze({ __proto__: null, identity: Ji });
const Wi$1 = p$1({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Xi = Object.freeze({ __proto__: null, base2: Wi$1 });
const Zi = p$1({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Qi = Object.freeze({ __proto__: null, base8: Zi });
const es = M$2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ts$1 = Object.freeze({ __proto__: null, base10: es });
const is$1 = p$1({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), ss = p$1({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var rs$1 = Object.freeze({ __proto__: null, base16: is$1, base16upper: ss });
const ns$1 = p$1({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), as$1 = p$1({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), os$1 = p$1({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), hs = p$1({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), cs$1 = p$1({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), us = p$1({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), ls$1 = p$1({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), ds = p$1({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), gs = p$1({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var ps$1 = Object.freeze({ __proto__: null, base32: ns$1, base32upper: as$1, base32pad: os$1, base32padupper: hs, base32hex: cs$1, base32hexupper: us, base32hexpad: ls$1, base32hexpadupper: ds, base32z: gs });
const Ds = M$2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), ys = M$2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var bs = Object.freeze({ __proto__: null, base36: Ds, base36upper: ys });
const ms = M$2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), Es = M$2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var fs = Object.freeze({ __proto__: null, base58btc: ms, base58flickr: Es });
const ws = p$1({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), vs = p$1({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), Is = p$1({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), Cs = p$1({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var _s = Object.freeze({ __proto__: null, base64: ws, base64pad: vs, base64url: Is, base64urlpad: Cs });
const Ae = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"), Rs = Ae.reduce((r, e, t) => (r[t] = e, r), []), Ts = Ae.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function Ss(r) {
  return r.reduce((e, t) => (e += Rs[t], e), "");
}
function Ps(r) {
  const e = [];
  for (const t of r) {
    const i = Ts[t.codePointAt(0)];
    if (i === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Os = H$1({ prefix: "\u{1F680}", name: "base256emoji", encode: Ss, decode: Ps });
var xs = Object.freeze({ __proto__: null, base256emoji: Os }), As = Ne, ze = 128, zs = 127, Ns = ~zs, Us = Math.pow(2, 31);
function Ne(r, e, t) {
  e = e || [], t = t || 0;
  for (var i = t; r >= Us; )
    e[t++] = r & 255 | ze, r /= 128;
  for (; r & Ns; )
    e[t++] = r & 255 | ze, r >>>= 7;
  return e[t] = r | 0, Ne.bytes = t - i + 1, e;
}
var Ls = ae$1, $s = 128, Ue = 127;
function ae$1(r, i) {
  var t = 0, i = i || 0, s = 0, n2 = i, a2, o = r.length;
  do {
    if (n2 >= o)
      throw ae$1.bytes = 0, new RangeError("Could not decode varint");
    a2 = r[n2++], t += s < 28 ? (a2 & Ue) << s : (a2 & Ue) * Math.pow(2, s), s += 7;
  } while (a2 >= $s);
  return ae$1.bytes = n2 - i, t;
}
var Fs = Math.pow(2, 7), Ms = Math.pow(2, 14), Ks = Math.pow(2, 21), ks = Math.pow(2, 28), Bs = Math.pow(2, 35), js = Math.pow(2, 42), Vs = Math.pow(2, 49), qs = Math.pow(2, 56), Ys = Math.pow(2, 63), Gs = function(r) {
  return r < Fs ? 1 : r < Ms ? 2 : r < Ks ? 3 : r < ks ? 4 : r < Bs ? 5 : r < js ? 6 : r < Vs ? 7 : r < qs ? 8 : r < Ys ? 9 : 10;
}, Js = { encode: As, decode: Ls, encodingLength: Gs }, Le = Js;
const $e = (r, e, t = 0) => (Le.encode(r, e, t), e), Fe = (r) => Le.encodingLength(r), oe$1 = (r, e) => {
  const t = e.byteLength, i = Fe(r), s = i + Fe(t), n2 = new Uint8Array(s + t);
  return $e(r, n2, 0), $e(t, n2, i), n2.set(e, s), new Hs(r, t, e, n2);
};
class Hs {
  constructor(e, t, i, s) {
    this.code = e, this.size = t, this.digest = i, this.bytes = s;
  }
}
const Me = ({ name: r, code: e, encode: t }) => new Ws(r, e, t);
class Ws {
  constructor(e, t, i) {
    this.name = e, this.code = t, this.encode = i;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? oe$1(this.code, t) : t.then((i) => oe$1(this.code, i));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Ke = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)), Xs = Me({ name: "sha2-256", code: 18, encode: Ke("SHA-256") }), Zs = Me({ name: "sha2-512", code: 19, encode: Ke("SHA-512") });
var Qs = Object.freeze({ __proto__: null, sha256: Xs, sha512: Zs });
const ke = 0, er = "identity", Be = Oe, tr = (r) => oe$1(ke, Be(r)), ir = { code: ke, name: er, encode: Be, digest: tr };
var sr = Object.freeze({ __proto__: null, identity: ir });
new TextEncoder(), new TextDecoder();
const je = { ...Hi, ...Xi, ...Qi, ...ts$1, ...rs$1, ...ps$1, ...bs, ...fs, ..._s, ...xs };
({ ...Qs, ...sr });
function Ve(r) {
  return globalThis.Buffer != null ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r;
}
function rr(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Ve(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r);
}
function qe(r, e, t, i) {
  return { name: r, prefix: e, encoder: { name: r, prefix: e, encode: t }, decoder: { decode: i } };
}
const Ye = qe("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1))), he = qe("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = rr(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
}), nr = { utf8: Ye, "utf-8": Ye, hex: je.base16, latin1: he, ascii: he, binary: he, ...je };
function ar(r, e = "utf8") {
  const t = nr[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Ve(globalThis.Buffer.from(r, "utf-8")) : t.decoder.decode(`${t.prefix}${r}`);
}
const ce$1 = "wc", Ge = 2, W = "core", O$2 = `${ce$1}@2:${W}:`, Je = { name: W, logger: "error" }, He = { database: ":memory:" }, We = "crypto", ue = "client_ed25519_seed", Xe = cjs$2.ONE_DAY, Ze = "keychain", Qe = "0.3", et = "messages", tt = "0.3", it = cjs$2.SIX_HOURS, st = "publisher", rt = "irn", nt = "error", le$1 = "wss://relay.walletconnect.com", de = "wss://relay.walletconnect.org", at = "relayer", g$1 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, ot$1 = "_subscription", L$1 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, ht = cjs$2.ONE_SECOND / 2, ct = "2.9.2", ut = 1e4, lt = "0.3", dt = "WALLETCONNECT_CLIENT_ID", C = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, gt = "subscription", pt = "0.3", Dt = cjs$2.FIVE_SECONDS * 1e3, yt = "pairing", bt = "0.3", $$2 = { wc_pairingDelete: { req: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: cjs$2.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: cjs$2.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 0 } } }, _$1 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, mt = "history", Et = "0.3", ft = "expirer", w$1 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, wt = "0.3", X$1 = "verify-api", ge = "https://verify.walletconnect.com";
class vt {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = Ze, this.version = Qe, this.initialized = false, this.storagePrefix = O$2, this.init = async () => {
      if (!this.initialized) {
        const i = await this.getKeyChain();
        typeof i < "u" && (this.keychain = i), this.initialized = true;
      }
    }, this.has = (i) => (this.isInitialized(), this.keychain.has(i)), this.set = async (i, s) => {
      this.isInitialized(), this.keychain.set(i, s), await this.persist();
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.keychain.get(i);
      if (typeof s > "u") {
        const { message: n2 } = N$1("NO_MATCHING_KEY", `${this.name}: ${i}`);
        throw new Error(n2);
      }
      return s;
    }, this.del = async (i) => {
      this.isInitialized(), this.keychain.delete(i), await this.persist();
    }, this.core = e, this.logger = cjs.generateChildLogger(t, this.name);
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, Bn(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Yn(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class It {
  constructor(e, t, i) {
    this.core = e, this.logger = t, this.name = We, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n2 = generateKeyPair(s);
      return encodeIss(n2.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = Rn();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const n2 = await this.getClientSeed(), a2 = generateKeyPair(n2), o = An(), h2 = Xe;
      return await signJWT(o, s, h2, a2);
    }, this.generateSharedKey = (s, n2, a2) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), h2 = Un(o, n2);
      return this.setSymKey(h2, a2);
    }, this.setSymKey = async (s, n2) => {
      this.isInitialized();
      const a2 = n2 || _n(s);
      return await this.keychain.set(a2, s), a2;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, n2, a2) => {
      this.isInitialized();
      const o = Pe(a2), h2 = safeJsonStringify(n2);
      if (Vn(o)) {
        const y2 = o.senderPublicKey, k = o.receiverPublicKey;
        s = await this.generateSharedKey(y2, k);
      }
      const l = this.getSymKey(s), { type: d2, senderPublicKey: b2 } = o;
      return jn({ type: d2, symKey: l, message: h2, senderPublicKey: b2 });
    }, this.decode = async (s, n2, a2) => {
      this.isInitialized();
      const o = Dn(n2, a2);
      if (Vn(o)) {
        const h2 = o.receiverPublicKey, l = o.senderPublicKey;
        s = await this.generateSharedKey(h2, l);
      }
      try {
        const h2 = this.getSymKey(s), l = Cn({ symKey: h2, encoded: n2 });
        return safeJsonParse(l);
      } catch (h2) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h2);
      }
    }, this.getPayloadType = (s) => {
      const n2 = Z$1(s);
      return $$3(n2.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const n2 = Z$1(s);
      return n2.senderPublicKey ? toString(n2.senderPublicKey, p$3) : void 0;
    }, this.core = e, this.logger = cjs.generateChildLogger(t, this.name), this.keychain = i || new vt(this.core, this.logger);
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(ue);
    } catch {
      e = An(), await this.keychain.set(ue, e);
    }
    return ar(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ct extends a {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = et, this.version = tt, this.initialized = false, this.storagePrefix = O$2, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i = await this.getRelayerMessages();
          typeof i < "u" && (this.messages = i), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i, s) => {
      this.isInitialized();
      const n2 = $n(s);
      let a2 = this.messages.get(i);
      return typeof a2 > "u" && (a2 = {}), typeof a2[n2] < "u" || (a2[n2] = s, this.messages.set(i, a2), await this.persist()), n2;
    }, this.get = (i) => {
      this.isInitialized();
      let s = this.messages.get(i);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i, s) => {
      this.isInitialized();
      const n2 = this.get(i), a2 = $n(s);
      return typeof n2[a2] < "u";
    }, this.del = async (i) => {
      this.isInitialized(), this.messages.delete(i), await this.persist();
    }, this.logger = cjs.generateChildLogger(e, this.name), this.core = t;
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, Bn(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? Yn(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class lr extends u$1 {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new events.exports.EventEmitter(), this.name = st, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = cjs$2.toMiliseconds(cjs$2.TEN_SECONDS), this.queueTimeout = cjs$2.toMiliseconds(cjs$2.FIVE_SECONDS), this.needsTransportRestart = false, this.publish = async (i, s, n2) => {
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n2 } });
      try {
        const a2 = n2?.ttl || it, o = at$1(n2), h2 = n2?.prompt || false, l = n2?.tag || 0, d2 = n2?.id || getBigIntRpcId().toString(), b2 = { topic: i, message: s, opts: { ttl: a2, relay: o, prompt: h2, tag: l, id: d2 } }, y2 = setTimeout(() => this.queue.set(d2, b2), this.queueTimeout);
        try {
          await await et$1(this.rpcPublish(i, s, a2, o, h2, l, d2), this.publishTimeout), clearTimeout(y2), this.relayer.events.emit(g$1.publish, b2);
        } catch {
          this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = true;
          return;
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i, message: s, opts: n2 } });
      } catch (a2) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(a2), a2;
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.relayer = e, this.logger = cjs.generateChildLogger(t, this.name), this.registerEventListeners();
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  rpcPublish(e, t, i, s, n2, a2, o) {
    var h2, l, d2, b2;
    const y2 = { method: ut$1(s.protocol).publish, params: { topic: e, message: t, ttl: i, prompt: n2, tag: a2 }, id: o };
    return I((h2 = y2.params) == null ? void 0 : h2.prompt) && ((l = y2.params) == null || delete l.prompt), I((d2 = y2.params) == null ? void 0 : d2.tag) && ((b2 = y2.params) == null || delete b2.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y2 }), this.relayer.request(y2);
  }
  onPublish(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: s } = e;
      await this.publish(t, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(g$1.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(g$1.message_ack, (e) => {
      this.onPublish(e.id.toString());
    });
  }
}
class dr {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i = this.get(e);
      if (!this.exists(e, t))
        return;
      const s = i.filter((n2) => n2 !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var gr = Object.defineProperty, pr = Object.defineProperties, Dr = Object.getOwnPropertyDescriptors, _t = Object.getOwnPropertySymbols, yr = Object.prototype.hasOwnProperty, br = Object.prototype.propertyIsEnumerable, Rt = (r, e, t) => e in r ? gr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, K = (r, e) => {
  for (var t in e || (e = {}))
    yr.call(e, t) && Rt(r, t, e[t]);
  if (_t)
    for (var t of _t(e))
      br.call(e, t) && Rt(r, t, e[t]);
  return r;
}, pe$2 = (r, e) => pr(r, Dr(e));
class Tt extends d {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new dr(), this.events = new events.exports.EventEmitter(), this.name = gt, this.version = pt, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = O$2, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restart(), this.registerEventListeners(), this.onEnable(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } });
      try {
        const n2 = at$1(s), a2 = { topic: i, relay: n2 };
        this.pending.set(i, a2);
        const o = await this.rpcSubscribe(i, n2);
        return this.onSubscribe(o, a2), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i, opts: s } }), o;
      } catch (n2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n2), n2;
      }
    }, this.unsubscribe = async (i, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof s?.id < "u" ? await this.unsubscribeById(i, s.id, s) : await this.unsubscribeByTopic(i, s);
    }, this.isSubscribed = async (i) => this.topics.includes(i) ? true : await new Promise((s, n2) => {
      const a2 = new cjs$2.Watch();
      a2.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(i) && this.topics.includes(i) && (clearInterval(o), a2.stop(this.pendingSubscriptionWatchLabel), s(true)), a2.elapsed(this.pendingSubscriptionWatchLabel) >= Dt && (clearInterval(o), a2.stop(this.pendingSubscriptionWatchLabel), n2(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => false), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = cjs.generateChildLogger(t, this.name), this.clientId = "";
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = false;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {
    }
    return i;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    try {
      const s = at$1(i);
      await this.rpcUnsubscribe(e, t, s);
      const n2 = A$1("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t) {
    const i = { method: ut$1(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      await await et$1(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(g$1.connection_stalled);
    }
    return $n(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, i = { method: ut$1(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await et$1(this.relayer.request(i), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(g$1.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, i) {
    const s = { method: ut$1(i.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, pe$2(K({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, K({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, K({}, t)), this.topicMap.set(t.topic, e), this.events.emit(C.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i.topic, e), this.events.emit(C.deleted, pe$2(K({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(C.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i);
      }
    }
    this.events.emit(C.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    C$1(t) && this.onBatchSubscribe(t.map((i, s) => pe$2(K({}, e[s]), { id: i })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(g$1.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(g$1.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(C.created, async (e) => {
      const t = C.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(C.deleted, async (e) => {
      const t = C.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
}
var mr = Object.defineProperty, St = Object.getOwnPropertySymbols, Er = Object.prototype.hasOwnProperty, fr$1 = Object.prototype.propertyIsEnumerable, Pt = (r, e, t) => e in r ? mr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, wr = (r, e) => {
  for (var t in e || (e = {}))
    Er.call(e, t) && Pt(r, t, e[t]);
  if (St)
    for (var t of St(e))
      fr$1.call(e, t) && Pt(r, t, e[t]);
  return r;
};
class Ot extends g$2 {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new events.exports.EventEmitter(), this.name = at, this.transportExplicitlyClosed = false, this.initialized = false, this.reconnecting = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(t);
      } catch (i) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i), i;
      }
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? cjs.generateChildLogger(e.logger, this.name) : cjs.pino(cjs.getDefaultLoggerOptions({ level: e.logger || nt })), this.messages = new Ct(this.logger, e.core), this.subscriber = new Tt(this, this.logger), this.publisher = new lr(this, this.logger), this.relayUrl = e?.relayUrl || le$1, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${de}...`), await this.restartTransport(de);
    }
    this.registerEventListeners(), this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, ut);
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i) {
    this.isInitialized(), await this.publisher.publish(e, t, i), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var i;
    this.isInitialized();
    let s = ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "";
    return s || (await Promise.all([new Promise((n2) => {
      this.subscriber.once(C.created, (a2) => {
        a2.topic === e && n2();
      });
    }), new Promise(async (n2) => {
      s = await this.subscriber.subscribe(e, t), n2();
    })]), s);
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, this.connected && (await this.provider.disconnect(), this.events.emit(g$1.transport_closed));
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = false, !this.reconnecting) {
      this.relayUrl = e || this.relayUrl, this.reconnecting = true;
      try {
        await Promise.all([new Promise((t) => {
          this.initialized || t(), this.subscriber.once(C.resubscribed, () => {
            t();
          });
        }), await Promise.race([new Promise(async (t, i) => {
          await et$1(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((s) => i(s)).then(() => t()).finally(() => this.removeListener(g$1.transport_closed, this.rejectTransportOpen));
        }), new Promise((t) => this.once(g$1.transport_closed, this.rejectTransportOpen))])]);
      } catch (t) {
        this.logger.error(t);
        const i = t;
        if (!this.isConnectionStalled(i.message))
          throw t;
        this.events.emit(g$1.transport_closed);
      } finally {
        this.reconnecting = false;
      }
    }
  }
  async restartTransport(e) {
    this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = e || this.relayUrl, this.connected && await Promise.all([new Promise((t) => {
      this.provider.once(L$1.disconnect, () => {
        t();
      });
    }), this.transportClose()]), await this.createProvider(), await this.transportOpen());
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  rejectTransportOpen() {
    throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...");
  }
  async createProvider() {
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new JsonRpcProvider(new WsConnection(qn({ sdkVersion: ct, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), true;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const s = this.messages.has(t, i);
    return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(ot$1))
        return;
      const t = e.params, { topic: i, message: s, publishedAt: n2 } = t.data, a2 = { topic: i, message: s, publishedAt: n2 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(wr({ type: "event", event: t.id }, a2)), this.events.emit(t.id, a2), await this.acknowledgePayload(e), await this.onMessageEvent(a2);
    } else
      isJsonRpcResponse(e) && this.events.emit(g$1.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(g$1.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  registerProviderListeners() {
    this.provider.on(L$1.payload, (e) => this.onProviderPayload(e)), this.provider.on(L$1.connect, () => {
      this.events.emit(g$1.connect);
    }), this.provider.on(L$1.disconnect, () => {
      this.onProviderDisconnect();
    }), this.provider.on(L$1.error, (e) => {
      this.logger.error(e), this.events.emit(g$1.error, e);
    });
  }
  registerEventListeners() {
    this.events.on(g$1.connection_stalled, async () => {
      await this.restartTransport();
    });
  }
  onProviderDisconnect() {
    this.events.emit(g$1.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || setTimeout(async () => {
      await this.restartTransport();
    }, cjs$2.toMiliseconds(ht));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (!this.connected) {
      if (this.connecting)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var vr = Object.defineProperty, xt = Object.getOwnPropertySymbols, Ir = Object.prototype.hasOwnProperty, Cr = Object.prototype.propertyIsEnumerable, At = (r, e, t) => e in r ? vr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, zt = (r, e) => {
  for (var t in e || (e = {}))
    Ir.call(e, t) && At(r, t, e[t]);
  if (xt)
    for (var t of xt(e))
      Cr.call(e, t) && At(r, t, e[t]);
  return r;
};
class Nt extends p$2 {
  constructor(e, t, i, s = O$2, n2 = void 0) {
    super(e, t, i, s), this.core = e, this.logger = t, this.name = i, this.map = /* @__PURE__ */ new Map(), this.version = lt, this.cached = [], this.initialized = false, this.storagePrefix = O$2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a2) => {
        this.getKey && a2 !== null && !I(a2) ? this.map.set(this.getKey(a2), a2) : At$1(a2) ? this.map.set(a2.id, a2) : Ut$1(a2) && this.map.set(a2.topic, a2);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (a2, o) => {
      this.isInitialized(), this.map.has(a2) ? await this.update(a2, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a2, value: o }), this.map.set(a2, o), await this.persist());
    }, this.get = (a2) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a2 }), this.getData(a2)), this.getAll = (a2) => (this.isInitialized(), a2 ? this.values.filter((o) => Object.keys(a2).every((h2) => Li(o[h2], a2[h2]))) : this.values), this.update = async (a2, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a2, update: o });
      const h2 = zt(zt({}, this.getData(a2)), o);
      this.map.set(a2, h2), await this.persist();
    }, this.delete = async (a2, o) => {
      this.isInitialized(), this.map.has(a2) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a2, reason: o }), this.map.delete(a2), await this.persist());
    }, this.logger = cjs.generateChildLogger(t, this.name), this.storagePrefix = s, this.getKey = n2;
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: i } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ut {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = yt, this.version = bt, this.events = new events.exports(), this.initialized = false, this.storagePrefix = O$2, this.ignoredPayloadTypes = [U$2], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i])];
    }, this.create = async () => {
      this.isInitialized();
      const i = An(), s = await this.core.crypto.setSymKey(i), n2 = ot$2(cjs$2.FIVE_MINUTES), a2 = { protocol: rt }, o = { topic: s, expiry: n2, relay: a2, active: false }, h2 = yt$1({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: i, relay: a2 });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n2), { topic: s, uri: h2 };
    }, this.pair = async (i) => {
      this.isInitialized(), this.isValidPair(i);
      const { topic: s, symKey: n2, relay: a2 } = mt$1(i.uri);
      if (this.pairings.keys.includes(s))
        throw new Error(`Pairing already exists: ${s}`);
      if (this.core.crypto.hasKeys(s))
        throw new Error(`Keychain already exists: ${s}`);
      const o = ot$2(cjs$2.FIVE_MINUTES), h2 = { topic: s, relay: a2, expiry: o, active: false };
      return await this.pairings.set(s, h2), await this.core.crypto.setSymKey(n2, s), await this.core.relayer.subscribe(s, { relay: a2 }), this.core.expirer.set(s, o), i.activatePairing && await this.activate({ topic: s }), h2;
    }, this.activate = async ({ topic: i }) => {
      this.isInitialized();
      const s = ot$2(cjs$2.THIRTY_DAYS);
      await this.pairings.update(i, { active: true, expiry: s }), this.core.expirer.set(i, s);
    }, this.ping = async (i) => {
      this.isInitialized(), await this.isValidPing(i);
      const { topic: s } = i;
      if (this.pairings.keys.includes(s)) {
        const n2 = await this.sendRequest(s, "wc_pairingPing", {}), { done: a2, resolve: o, reject: h2 } = Xn();
        this.events.once(it$1("pairing_ping", n2), ({ error: l }) => {
          l ? h2(l) : o();
        }), await a2();
      }
    }, this.updateExpiry = async ({ topic: i, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i, { expiry: s });
    }, this.updateMetadata = async ({ topic: i, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i) => {
      this.isInitialized(), await this.isValidDisconnect(i);
      const { topic: s } = i;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", A$1("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i, s, n2) => {
      const a2 = formatJsonRpcRequest(s, n2), o = await this.core.crypto.encode(i, a2), h2 = $$2[s].req;
      return this.core.history.set(i, a2), this.core.relayer.publish(i, o, h2), a2.id;
    }, this.sendResult = async (i, s, n2) => {
      const a2 = formatJsonRpcResult(i, n2), o = await this.core.crypto.encode(s, a2), h2 = await this.core.history.get(s, i), l = $$2[h2.request.method].res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a2);
    }, this.sendError = async (i, s, n2) => {
      const a2 = formatJsonRpcError(i, n2), o = await this.core.crypto.encode(s, a2), h2 = await this.core.history.get(s, i), l = $$2[h2.request.method] ? $$2[h2.request.method].res : $$2.unregistered_method.res;
      await this.core.relayer.publish(s, o, l), await this.core.history.resolve(a2);
    }, this.deletePairing = async (i, s) => {
      await this.core.relayer.unsubscribe(i), await Promise.all([this.pairings.delete(i, A$1("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), s ? Promise.resolve() : this.core.expirer.del(i)]);
    }, this.cleanup = async () => {
      const i = this.pairings.getAll().filter((s) => st$1(s.expiry));
      await Promise.all(i.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i) => {
      const { topic: s, payload: n2 } = i;
      switch (n2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, n2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, n2);
        default:
          return this.onUnknownRpcMethodRequest(s, n2);
      }
    }, this.onRelayEventResponse = async (i) => {
      const { topic: s, payload: n2 } = i, a2 = (await this.core.history.get(s, n2.id)).request.method;
      switch (a2) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n2);
        default:
          return this.onUnknownRpcMethodResponse(a2);
      }
    }, this.onPairingPingRequest = async (i, s) => {
      const { id: n2 } = s;
      try {
        this.isValidPing({ topic: i }), await this.sendResult(n2, i, true), this.events.emit("pairing_ping", { id: n2, topic: i });
      } catch (a2) {
        await this.sendError(n2, i, a2), this.logger.error(a2);
      }
    }, this.onPairingPingResponse = (i, s) => {
      const { id: n2 } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(it$1("pairing_ping", n2), {}) : isJsonRpcError(s) && this.events.emit(it$1("pairing_ping", n2), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i, s) => {
      const { id: n2 } = s;
      try {
        this.isValidDisconnect({ topic: i }), await this.deletePairing(i), this.events.emit("pairing_delete", { id: n2, topic: i });
      } catch (a2) {
        await this.sendError(n2, i, a2), this.logger.error(a2);
      }
    }, this.onUnknownRpcMethodRequest = async (i, s) => {
      const { id: n2, method: a2 } = s;
      try {
        if (this.registeredMethods.includes(a2))
          return;
        const o = A$1("WC_METHOD_UNSUPPORTED", a2);
        await this.sendError(n2, i, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(n2, i, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (i) => {
      this.registeredMethods.includes(i) || this.logger.error(A$1("WC_METHOD_UNSUPPORTED", i));
    }, this.isValidPair = (i) => {
      if (!Dt$1(i)) {
        const { message: s } = N$1("MISSING_OR_INVALID", `pair() params: ${i}`);
        throw new Error(s);
      }
      if (!Rt$1(i.uri)) {
        const { message: s } = N$1("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (i) => {
      if (!Dt$1(i)) {
        const { message: n2 } = N$1("MISSING_OR_INVALID", `ping() params: ${i}`);
        throw new Error(n2);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i) => {
      if (!Dt$1(i)) {
        const { message: n2 } = N$1("MISSING_OR_INVALID", `disconnect() params: ${i}`);
        throw new Error(n2);
      }
      const { topic: s } = i;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i) => {
      if (!y$2(i, false)) {
        const { message: s } = N$1("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i)) {
        const { message: s } = N$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
        throw new Error(s);
      }
      if (st$1(this.pairings.get(i).expiry)) {
        await this.deletePairing(i);
        const { message: s } = N$1("EXPIRED", `pairing topic: ${i}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = cjs.generateChildLogger(t, this.name), this.pairings = new Nt(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(g$1.message, async (e) => {
      const { topic: t, message: i } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
        return;
      const s = await this.core.crypto.decode(t, i);
      try {
        isJsonRpcRequest(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s })) : isJsonRpcResponse(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: t, payload: s }), this.core.history.delete(t, s.id));
      } catch (n2) {
        this.logger.error(n2);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(w$1.expired, async (e) => {
      const { topic: t } = rt$1(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit("pairing_expire", { topic: t }));
    });
  }
}
class Lt extends h {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new events.exports.EventEmitter(), this.name = mt, this.version = Et, this.cached = [], this.initialized = false, this.storagePrefix = O$2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.records.set(i.id, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i, s, n2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i, request: s, chainId: n2 }), this.records.has(s.id))
        return;
      const a2 = { id: s.id, topic: i, request: { method: s.method, params: s.params || null }, chainId: n2, expiry: ot$2(cjs$2.THIRTY_DAYS) };
      this.records.set(a2.id, a2), this.events.emit(_$1.created, a2);
    }, this.resolve = async (i) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i }), !this.records.has(i.id))
        return;
      const s = await this.getRecord(i.id);
      typeof s.response > "u" && (s.response = isJsonRpcError(i) ? { error: i.error } : { result: i.result }, this.records.set(s.id, s), this.events.emit(_$1.updated, s));
    }, this.get = async (i, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i, id: s }), await this.getRecord(s)), this.delete = (i, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n2) => {
        if (n2.topic === i) {
          if (typeof s < "u" && n2.id !== s)
            return;
          this.records.delete(n2.id), this.events.emit(_$1.deleted, n2);
        }
      });
    }, this.exists = async (i, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i : false), this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = cjs.generateChildLogger(t, this.name);
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const i = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(_$1.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(_$1.created, (e) => {
      const t = _$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(_$1.updated, (e) => {
      const t = _$1.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(_$1.deleted, (e) => {
      const t = _$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        cjs$2.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class $t extends E$1 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new events.exports.EventEmitter(), this.name = ft, this.version = wt, this.cached = [], this.initialized = false, this.storagePrefix = O$2, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i) => this.expirations.set(i.target, i)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i) => {
      try {
        const s = this.formatTarget(i);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return false;
      }
    }, this.set = (i, s) => {
      this.isInitialized();
      const n2 = this.formatTarget(i), a2 = { target: n2, expiry: s };
      this.expirations.set(n2, a2), this.checkExpiry(n2, a2), this.events.emit(w$1.created, { target: n2, expiration: a2 });
    }, this.get = (i) => {
      this.isInitialized();
      const s = this.formatTarget(i);
      return this.getExpiration(s);
    }, this.del = (i) => {
      if (this.isInitialized(), this.has(i)) {
        const s = this.formatTarget(i), n2 = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(w$1.deleted, { target: s, expiration: n2 });
      }
    }, this.on = (i, s) => {
      this.events.on(i, s);
    }, this.once = (i, s) => {
      this.events.once(i, s);
    }, this.off = (i, s) => {
      this.events.off(i, s);
    }, this.removeListener = (i, s) => {
      this.events.removeListener(i, s);
    }, this.logger = cjs.generateChildLogger(t, this.name);
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return nt$1(e);
    if (typeof e == "number")
      return tt$1(e);
    const { message: t } = N$1("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(w$1.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = N$1("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = N$1("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i), new Error(i);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    cjs$2.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(w$1.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(cjs$1.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(w$1.created, (e) => {
      const t = w$1.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(w$1.expired, (e) => {
      const t = w$1.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(w$1.deleted, (e) => {
      const t = w$1.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class Ft extends y$1 {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = X$1, this.initialized = false, this.init = async (i) => {
      $e$1() || !je$1() || (this.verifyUrl = i?.verifyUrl || ge, await this.createIframe());
    }, this.register = async (i) => {
      var s;
      if (this.initialized || await this.init(), !!this.iframe)
        try {
          (s = this.iframe.contentWindow) == null || s.postMessage(i.attestationId, this.verifyUrl), this.logger.info(`postMessage sent: ${i.attestationId} ${this.verifyUrl}`);
        } catch {
        }
    }, this.resolve = async (i) => {
      var s;
      if (this.isDevEnv)
        return "";
      this.logger.info(`resolving attestation: ${i.attestationId}`);
      const n2 = this.startAbortTimer(cjs$2.FIVE_SECONDS), a2 = await fetch(`${this.verifyUrl}/attestation/${i.attestationId}`, { signal: this.abortController.signal });
      return clearTimeout(n2), a2.status === 200 ? (s = await a2.json()) == null ? void 0 : s.origin : "";
    }, this.createIframe = async () => {
      try {
        await Promise.race([new Promise((i, s) => {
          if (document.getElementById(X$1))
            return i();
          const n2 = document.createElement("iframe");
          n2.setAttribute("id", X$1), n2.setAttribute("src", `${this.verifyUrl}/${this.projectId}`), n2.style.display = "none", n2.addEventListener("load", () => {
            this.initialized = true, i();
          }), n2.addEventListener("error", (a2) => {
            s(a2);
          }), document.body.append(n2), this.iframe = n2;
        }), new Promise((i) => {
          setTimeout(() => i("iframe load timeout"), cjs$2.toMiliseconds(cjs$2.ONE_SECOND / 2));
        })]);
      } catch (i) {
        this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.error(i);
      }
    }, this.logger = cjs.generateChildLogger(t, this.name), this.verifyUrl = ge, this.abortController = new AbortController(), this.isDevEnv = ee() && { "NX_RIVET_KEY": "3acd48cc26e847f38560081935d2ffbd", "NX_GRAPH_API_KEY_MAINNET": "", "NX_ETHERSCAN_KEY": "MKNHEWBSRVKMI2BKACPZBH9DP72B6PURMS", "NX_ARBISCAN_KEY": "", "NX_GNOSISSCAN_KEY": "", "NX_POLYGONSCAN_KEY": "", "NX_OPTIMISMSCAN_KEY": "", "NX_WALLET_CONNECT_ID": "c686a28c71a25d43ac128813eae837de", "NX_OPTIMISM_ALCHEMY_KEY": "", "NX_ARBITRUM_ALCHEMY_KEY": "", "NX_POLYGONPOS_ALCHEMY_KEY": "" }.IS_VITEST;
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  startAbortTimer(e) {
    return setTimeout(() => this.abortController.abort(), cjs$2.toMiliseconds(e));
  }
}
var _r = Object.defineProperty, Mt = Object.getOwnPropertySymbols, Rr = Object.prototype.hasOwnProperty, Tr = Object.prototype.propertyIsEnumerable, Kt = (r, e, t) => e in r ? _r(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t, kt = (r, e) => {
  for (var t in e || (e = {}))
    Rr.call(e, t) && Kt(r, t, e[t]);
  if (Mt)
    for (var t of Mt(e))
      Tr.call(e, t) && Kt(r, t, e[t]);
  return r;
};
class Z extends n {
  constructor(e) {
    super(e), this.protocol = ce$1, this.version = Ge, this.name = W, this.events = new events.exports.EventEmitter(), this.initialized = false, this.on = (i, s) => this.events.on(i, s), this.once = (i, s) => this.events.once(i, s), this.off = (i, s) => this.events.off(i, s), this.removeListener = (i, s) => this.events.removeListener(i, s), this.projectId = e?.projectId, this.relayUrl = e?.relayUrl || le$1;
    const t = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : cjs.pino(cjs.getDefaultLoggerOptions({ level: e?.logger || Je.logger }));
    this.logger = cjs.generateChildLogger(t, this.name), this.heartbeat = new cjs$1.HeartBeat(), this.crypto = new It(this, this.logger, e?.keychain), this.history = new Lt(this, this.logger), this.expirer = new $t(this, this.logger), this.storage = e != null && e.storage ? e.storage : new _default(kt(kt({}, He), e?.storageOptions)), this.relayer = new Ot({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new Ut(this, this.logger), this.verify = new Ft(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new Z(e);
    await t.initialize();
    const i = await t.crypto.getClientId();
    return await t.storage.setItem(dt, i), t;
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
}
const Sr = Z;
const Y = "wc", J$1 = 2, X = "client", G$1 = `${Y}@${J$1}:${X}:`, $$1 = { name: X, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" }, H = "WALLETCONNECT_DEEPLINK_CHOICE", ie = "proposal", re = "Proposal expired", ne = "session", A = cjs$2.SEVEN_DAYS, oe = "engine", O$1 = { wc_sessionPropose: { req: { ttl: cjs$2.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: cjs$2.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: cjs$2.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: cjs$2.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: cjs$2.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: cjs$2.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: cjs$2.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: cjs$2.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: cjs$2.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: cjs$2.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: cjs$2.THIRTY_SECONDS, prompt: false, tag: 1115 } } }, M$1 = { min: cjs$2.FIVE_MINUTES, max: cjs$2.SEVEN_DAYS }, V = { idle: "idle", active: "active" }, ae = "request", ce = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var ts = Object.defineProperty, is = Object.defineProperties, rs = Object.getOwnPropertyDescriptors, le = Object.getOwnPropertySymbols, ns = Object.prototype.hasOwnProperty, os = Object.prototype.propertyIsEnumerable, pe$1 = (d2, r, e) => r in d2 ? ts(d2, r, { enumerable: true, configurable: true, writable: true, value: e }) : d2[r] = e, w = (d2, r) => {
  for (var e in r || (r = {}))
    ns.call(r, e) && pe$1(d2, e, r[e]);
  if (le)
    for (var e of le(r))
      os.call(r, e) && pe$1(d2, e, r[e]);
  return d2;
}, F = (d2, r) => is(d2, rs(r));
class as extends S$1 {
  constructor(r) {
    super(r), this.name = oe, this.events = new events.exports(), this.initialized = false, this.ignoredPayloadTypes = [U$2], this.requestQueue = { state: V.idle, requests: [] }, this.requestQueueDelay = cjs$2.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.client.core.pairing.register({ methods: Object.keys(O$1) }), this.initialized = true, setTimeout(() => {
        this.requestQueue.requests = this.getPendingSessionRequests(), this.processRequestQueue();
      }, cjs$2.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (e) => {
      this.isInitialized();
      const s = F(w({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: t, requiredNamespaces: i, optionalNamespaces: n2, sessionProperties: o, relays: a2 } = s;
      let l = t, h2, I2 = false;
      if (l && (I2 = this.client.core.pairing.pairings.get(l).active), !l || !I2) {
        const { topic: f2, uri: y2 } = await this.client.core.pairing.create();
        l = f2, h2 = y2;
      }
      const g2 = await this.client.core.crypto.generateKeyPair(), E2 = w({ requiredNamespaces: i, optionalNamespaces: n2, relays: a2 ?? [{ protocol: rt }], proposer: { publicKey: g2, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: u2, resolve: T, done: K2 } = Xn(cjs$2.FIVE_MINUTES, re);
      if (this.events.once(it$1("session_connect"), async ({ error: f2, session: y2 }) => {
        if (f2)
          u2(f2);
        else if (y2) {
          y2.self.publicKey = g2;
          const B = F(w({}, y2), { requiredNamespaces: y2.requiredNamespaces, optionalNamespaces: y2.optionalNamespaces });
          await this.client.session.set(y2.topic, B), await this.setExpiry(y2.topic, y2.expiry), l && await this.client.core.pairing.updateMetadata({ topic: l, metadata: y2.peer.metadata }), T(B);
        }
      }), !l) {
        const { message: f2 } = N$1("NO_MATCHING_KEY", `connect() pairing topic: ${l}`);
        throw new Error(f2);
      }
      const L2 = await this.sendRequest(l, "wc_sessionPropose", E2), he2 = ot$2(cjs$2.FIVE_MINUTES);
      return await this.setProposal(L2, w({ id: L2, expiry: he2 }, E2)), { uri: h2, approval: K2 };
    }, this.pair = async (e) => (this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async (e) => {
      this.isInitialized(), await this.isValidApprove(e);
      const { id: s, relayProtocol: t, namespaces: i, sessionProperties: n2 } = e, o = this.client.proposal.get(s);
      let { pairingTopic: a2, proposer: l, requiredNamespaces: h2, optionalNamespaces: I2 } = o;
      a2 = a2 || "", H$2(h2) || (h2 = St$1(i, "approve()"));
      const g2 = await this.client.core.crypto.generateKeyPair(), E2 = l.publicKey, u2 = await this.client.core.crypto.generateSharedKey(g2, E2);
      a2 && s && (await this.client.core.pairing.updateMetadata({ topic: a2, metadata: l.metadata }), await this.sendResult(s, a2, { relay: { protocol: t ?? "irn" }, responderPublicKey: g2 }), await this.client.proposal.delete(s, A$1("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: a2 }));
      const T = w({ relay: { protocol: t ?? "irn" }, namespaces: i, requiredNamespaces: h2, optionalNamespaces: I2, pairingTopic: a2, controller: { publicKey: g2, metadata: this.client.metadata }, expiry: ot$2(A) }, n2 && { sessionProperties: n2 });
      await this.client.core.relayer.subscribe(u2), await this.sendRequest(u2, "wc_sessionSettle", T);
      const K2 = F(w({}, T), { topic: u2, pairingTopic: a2, acknowledged: false, self: T.controller, peer: { publicKey: l.publicKey, metadata: l.metadata }, controller: g2 });
      return await this.client.session.set(u2, K2), await this.setExpiry(u2, ot$2(A)), { topic: u2, acknowledged: () => new Promise((L2) => setTimeout(() => L2(this.client.session.get(u2)), 500)) };
    }, this.reject = async (e) => {
      this.isInitialized(), await this.isValidReject(e);
      const { id: s, reason: t } = e, { pairingTopic: i } = this.client.proposal.get(s);
      i && (await this.sendError(s, i, t), await this.client.proposal.delete(s, A$1("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      this.isInitialized(), await this.isValidUpdate(e);
      const { topic: s, namespaces: t } = e, i = await this.sendRequest(s, "wc_sessionUpdate", { namespaces: t }), { done: n2, resolve: o, reject: a2 } = Xn();
      return this.events.once(it$1("session_update", i), ({ error: l }) => {
        l ? a2(l) : o();
      }), await this.client.session.update(s, { namespaces: t }), { acknowledged: n2 };
    }, this.extend = async (e) => {
      this.isInitialized(), await this.isValidExtend(e);
      const { topic: s } = e, t = await this.sendRequest(s, "wc_sessionExtend", {}), { done: i, resolve: n2, reject: o } = Xn();
      return this.events.once(it$1("session_extend", t), ({ error: a2 }) => {
        a2 ? o(a2) : n2();
      }), await this.setExpiry(s, ot$2(A)), { acknowledged: i };
    }, this.request = async (e) => {
      this.isInitialized(), await this.isValidRequest(e);
      const { chainId: s, request: t, topic: i, expiry: n2 } = e, o = await this.sendRequest(i, "wc_sessionRequest", { request: t, chainId: s }, n2), { done: a2, resolve: l, reject: h2 } = Xn(n2);
      this.events.once(it$1("session_request", o), ({ error: g2, result: E2 }) => {
        g2 ? h2(g2) : l(E2);
      }), this.client.events.emit("session_request_sent", { topic: i, request: t, chainId: s, id: o });
      const I2 = await this.client.core.storage.getItem(H);
      return ct$1({ id: o, topic: i, wcDeepLink: I2 }), await a2();
    }, this.respond = async (e) => {
      this.isInitialized(), await this.isValidRespond(e);
      const { topic: s, response: t } = e, { id: i } = t;
      isJsonRpcResult(t) ? await this.sendResult(i, s, t.result) : isJsonRpcError(t) && await this.sendError(i, s, t.error), this.cleanupAfterResponse(e);
    }, this.ping = async (e) => {
      this.isInitialized(), await this.isValidPing(e);
      const { topic: s } = e;
      if (this.client.session.keys.includes(s)) {
        const t = await this.sendRequest(s, "wc_sessionPing", {}), { done: i, resolve: n2, reject: o } = Xn();
        this.events.once(it$1("session_ping", t), ({ error: a2 }) => {
          a2 ? o(a2) : n2();
        }), await i();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (e) => {
      this.isInitialized(), await this.isValidEmit(e);
      const { topic: s, event: t, chainId: i } = e;
      await this.sendRequest(s, "wc_sessionEvent", { event: t, chainId: i });
    }, this.disconnect = async (e) => {
      this.isInitialized(), await this.isValidDisconnect(e);
      const { topic: s } = e;
      if (this.client.session.keys.includes(s)) {
        const t = getBigIntRpcId().toString();
        let i;
        const n2 = (o) => {
          o?.id.toString() === t && (this.client.core.relayer.events.removeListener(g$1.message_ack, n2), i());
        };
        await Promise.all([new Promise((o) => {
          i = o, this.client.core.relayer.on(g$1.message_ack, n2);
        }), this.sendRequest(s, "wc_sessionDelete", A$1("USER_DISCONNECTED"), void 0, t)]), await this.deleteSession(s);
      } else
        await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((s) => wt$1(s, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (e) => {
      if (e.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(e.pairingTopic), t = this.client.core.pairing.pairings.getAll().filter((i) => {
            var n2, o;
            return ((n2 = i.peerMetadata) == null ? void 0 : n2.url) && ((o = i.peerMetadata) == null ? void 0 : o.url) === e.peer.metadata.url && i.topic && i.topic !== s.topic;
          });
          if (t.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${t.length} duplicate pairing(s)`), await Promise.all(t.map((i) => this.client.core.pairing.disconnect({ topic: i.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (e, s) => {
      const { self: t } = this.client.session.get(e);
      await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, A$1("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(t.publicKey) && await this.client.core.crypto.deleteKeyPair(t.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), s || this.client.core.expirer.del(e), this.client.core.storage.removeItem(H).catch((i) => this.client.logger.warn(i));
    }, this.deleteProposal = async (e, s) => {
      await Promise.all([this.client.proposal.delete(e, A$1("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deletePendingSessionRequest = async (e, s, t = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, s), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.requestQueue.requests = this.requestQueue.requests.filter((i) => i.id !== e), t && (this.requestQueue.state = V.idle);
    }, this.setExpiry = async (e, s) => {
      this.client.session.keys.includes(e) && await this.client.session.update(e, { expiry: s }), this.client.core.expirer.set(e, s);
    }, this.setProposal = async (e, s) => {
      await this.client.proposal.set(e, s), this.client.core.expirer.set(e, s.expiry);
    }, this.setPendingSessionRequest = async (e) => {
      const s = O$1.wc_sessionRequest.req.ttl, { id: t, topic: i, params: n2 } = e;
      await this.client.pendingRequest.set(t, { id: t, topic: i, params: n2 }), s && this.client.core.expirer.set(t, ot$2(s));
    }, this.sendRequest = async (e, s, t, i, n2) => {
      const o = formatJsonRpcRequest(s, t);
      if (je$1() && ce.includes(s)) {
        const h2 = $n(JSON.stringify(o));
        await this.client.core.verify.register({ attestationId: h2 });
      }
      const a2 = await this.client.core.crypto.encode(e, o), l = O$1[s].req;
      return i && (l.ttl = i), n2 && (l.id = n2), this.client.core.history.set(e, o), this.client.core.relayer.publish(e, a2, l), o.id;
    }, this.sendResult = async (e, s, t) => {
      const i = formatJsonRpcResult(e, t), n2 = await this.client.core.crypto.encode(s, i), o = await this.client.core.history.get(s, e), a2 = O$1[o.request.method].res;
      this.client.core.relayer.publish(s, n2, a2), await this.client.core.history.resolve(i);
    }, this.sendError = async (e, s, t) => {
      const i = formatJsonRpcError(e, t), n2 = await this.client.core.crypto.encode(s, i), o = await this.client.core.history.get(s, e), a2 = O$1[o.request.method].res;
      this.client.core.relayer.publish(s, n2, a2), await this.client.core.history.resolve(i);
    }, this.cleanup = async () => {
      const e = [], s = [];
      this.client.session.getAll().forEach((t) => {
        st$1(t.expiry) && e.push(t.topic);
      }), this.client.proposal.getAll().forEach((t) => {
        st$1(t.expiry) && s.push(t.id);
      }), await Promise.all([...e.map((t) => this.deleteSession(t)), ...s.map((t) => this.deleteProposal(t))]);
    }, this.onRelayEventRequest = (e) => {
      const { topic: s, payload: t } = e, i = t.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, t);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, t);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, t);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, t);
        default:
          return this.client.logger.info(`Unsupported request method ${i}`);
      }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: s, payload: t } = e, i = (await this.client.core.history.get(s, t.id)).request.method;
      switch (i) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, t);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, t);
        default:
          return this.client.logger.info(`Unsupported response method ${i}`);
      }
    }, this.onRelayEventUnknownPayload = (e) => {
      const { topic: s } = e, { message: t } = N$1("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(t);
    }, this.onSessionProposeRequest = async (e, s) => {
      const { params: t, id: i } = s;
      try {
        this.isValidConnect(w({}, s.params));
        const n2 = ot$2(cjs$2.FIVE_MINUTES), o = w({ id: i, pairingTopic: e, expiry: n2 }, t);
        await this.setProposal(i, o);
        const a2 = $n(JSON.stringify(s)), l = await this.getVerifyContext(a2, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i, params: o, verifyContext: l });
      } catch (n2) {
        await this.sendError(i, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionProposeResponse = async (e, s) => {
      const { id: t } = s;
      if (isJsonRpcResult(s)) {
        const { result: i } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i });
        const n2 = this.client.proposal.get(t);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n2 });
        const o = n2.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const a2 = i.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a2 });
        const l = await this.client.core.crypto.generateSharedKey(o, a2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: l });
        const h2 = await this.client.core.relayer.subscribe(l);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h2 }), await this.client.core.pairing.activate({ topic: e });
      } else
        isJsonRpcError(s) && (await this.client.proposal.delete(t, A$1("USER_DISCONNECTED")), this.events.emit(it$1("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (e, s) => {
      const { id: t, params: i } = s;
      try {
        this.isValidSessionSettleRequest(i);
        const { relay: n2, controller: o, expiry: a2, namespaces: l, requiredNamespaces: h2, optionalNamespaces: I2, sessionProperties: g2, pairingTopic: E2 } = s.params, u2 = w({ topic: e, relay: n2, expiry: a2, namespaces: l, acknowledged: true, pairingTopic: E2, requiredNamespaces: h2, optionalNamespaces: I2, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, g2 && { sessionProperties: g2 });
        await this.sendResult(s.id, e, true), this.events.emit(it$1("session_connect"), { session: u2 }), this.cleanupDuplicatePairings(u2);
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionSettleResponse = async (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(it$1("session_approve", t), {})) : isJsonRpcError(s) && (await this.client.session.delete(e, A$1("USER_DISCONNECTED")), this.events.emit(it$1("session_approve", t), { error: s.error }));
    }, this.onSessionUpdateRequest = async (e, s) => {
      const { params: t, id: i } = s;
      try {
        this.isValidUpdate(w({ topic: e }, t)), await this.client.session.update(e, { namespaces: t.namespaces }), await this.sendResult(i, e, true), this.client.events.emit("session_update", { id: i, topic: e, params: t });
      } catch (n2) {
        await this.sendError(i, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionUpdateResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(it$1("session_update", t), {}) : isJsonRpcError(s) && this.events.emit(it$1("session_update", t), { error: s.error });
    }, this.onSessionExtendRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, ot$2(A)), await this.sendResult(t, e, true), this.client.events.emit("session_extend", { id: t, topic: e });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionExtendResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(it$1("session_extend", t), {}) : isJsonRpcError(s) && this.events.emit(it$1("session_extend", t), { error: s.error });
    }, this.onSessionPingRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidPing({ topic: e }), await this.sendResult(t, e, true), this.client.events.emit("session_ping", { id: t, topic: e });
      } catch (i) {
        await this.sendError(t, e, i), this.client.logger.error(i);
      }
    }, this.onSessionPingResponse = (e, s) => {
      const { id: t } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(it$1("session_ping", t), {}) : isJsonRpcError(s) && this.events.emit(it$1("session_ping", t), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidDisconnect({ topic: e, reason: s.params }), await Promise.all([new Promise((i) => {
          this.client.core.relayer.once(g$1.publish, async () => {
            i(await this.deleteSession(e));
          });
        }), this.sendResult(t, e, true)]), this.client.events.emit("session_delete", { id: t, topic: e });
      } catch (i) {
        this.client.logger.error(i);
      }
    }, this.onSessionRequest = async (e, s) => {
      const { id: t, params: i } = s;
      try {
        this.isValidRequest(w({ topic: e }, i)), await this.setPendingSessionRequest({ id: t, topic: e, params: i }), this.addRequestToQueue({ id: t, topic: e, params: i }), await this.processRequestQueue();
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionRequestResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(it$1("session_request", t), { result: s.result }) : isJsonRpcError(s) && this.events.emit(it$1("session_request", t), { error: s.error });
    }, this.onSessionEventRequest = async (e, s) => {
      const { id: t, params: i } = s;
      try {
        this.isValidEmit(w({ topic: e }, i)), this.client.events.emit("session_event", { id: t, topic: e, params: i });
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.addRequestToQueue = (e) => {
      this.requestQueue.requests.push(e);
    }, this.cleanupAfterResponse = (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.requestQueue.state = V.idle, this.processRequestQueue();
      }, cjs$2.toMiliseconds(this.requestQueueDelay));
    }, this.processRequestQueue = async () => {
      if (this.requestQueue.state === V.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.requestQueue.requests[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        const { id: s, topic: t, params: i } = e, n2 = $n(JSON.stringify({ id: s, params: i })), o = this.client.session.get(t), a2 = await this.getVerifyContext(n2, o.peer.metadata);
        this.requestQueue.state = V.active, this.client.events.emit("session_request", { id: s, topic: t, params: i, verifyContext: a2 });
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.isValidConnect = async (e) => {
      if (!Dt$1(e)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(a2);
      }
      const { pairingTopic: s, requiredNamespaces: t, optionalNamespaces: i, sessionProperties: n2, relays: o } = e;
      if (I(s) || await this.isValidPairingTopic(s), !jt(o, true)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(a2);
      }
      !I(t) && H$2(t) !== 0 && this.validateNamespaces(t, "requiredNamespaces"), !I(i) && H$2(i) !== 0 && this.validateNamespaces(i, "optionalNamespaces"), I(n2) || this.validateSessionProps(n2, "sessionProperties");
    }, this.validateNamespaces = (e, s) => {
      const t = $t$1(e, "connect()", s);
      if (t)
        throw new Error(t.message);
    }, this.isValidApprove = async (e) => {
      if (!Dt$1(e))
        throw new Error(N$1("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: s, namespaces: t, relayProtocol: i, sessionProperties: n2 } = e;
      await this.isValidProposalId(s);
      const o = this.client.proposal.get(s), a2 = sn(t, "approve()");
      if (a2)
        throw new Error(a2.message);
      const l = an(o.requiredNamespaces, t, "approve()");
      if (l)
        throw new Error(l.message);
      if (!y$2(i, true)) {
        const { message: h2 } = N$1("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
        throw new Error(h2);
      }
      I(n2) || this.validateSessionProps(n2, "sessionProperties");
    }, this.isValidReject = async (e) => {
      if (!Dt$1(e)) {
        const { message: i } = N$1("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i);
      }
      const { id: s, reason: t } = e;
      if (await this.isValidProposalId(s), !Vt(t)) {
        const { message: i } = N$1("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t)}`);
        throw new Error(i);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!Dt$1(e)) {
        const { message: l } = N$1("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(l);
      }
      const { relay: s, controller: t, namespaces: i, expiry: n2 } = e;
      if (!cn(s)) {
        const { message: l } = N$1("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l);
      }
      const o = _t$1(t, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const a2 = sn(i, "onSessionSettleRequest()");
      if (a2)
        throw new Error(a2.message);
      if (st$1(n2)) {
        const { message: l } = N$1("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l);
      }
    }, this.isValidUpdate = async (e) => {
      if (!Dt$1(e)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: s, namespaces: t } = e;
      await this.isValidSessionTopic(s);
      const i = this.client.session.get(s), n2 = sn(t, "update()");
      if (n2)
        throw new Error(n2.message);
      const o = an(i.requiredNamespaces, t, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (e) => {
      if (!Dt$1(e)) {
        const { message: t } = N$1("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (e) => {
      if (!Dt$1(e)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: s, request: t, chainId: i, expiry: n2 } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: o } = this.client.session.get(s);
      if (!Lt$1(o, i)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `request() chainId: ${i}`);
        throw new Error(a2);
      }
      if (!kt$1(t)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `request() ${JSON.stringify(t)}`);
        throw new Error(a2);
      }
      if (!xt$1(o, i, t.method)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `request() method: ${t.method}`);
        throw new Error(a2);
      }
      if (n2 && !Gt(n2, M$1)) {
        const { message: a2 } = N$1("MISSING_OR_INVALID", `request() expiry: ${n2}. Expiry must be a number (in seconds) between ${M$1.min} and ${M$1.max}`);
        throw new Error(a2);
      }
    }, this.isValidRespond = async (e) => {
      if (!Dt$1(e)) {
        const { message: i } = N$1("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(i);
      }
      const { topic: s, response: t } = e;
      if (await this.isValidSessionTopic(s), !Mt$1(t)) {
        const { message: i } = N$1("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(t)}`);
        throw new Error(i);
      }
    }, this.isValidPing = async (e) => {
      if (!Dt$1(e)) {
        const { message: t } = N$1("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (e) => {
      if (!Dt$1(e)) {
        const { message: o } = N$1("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o);
      }
      const { topic: s, event: t, chainId: i } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: n2 } = this.client.session.get(s);
      if (!Lt$1(n2, i)) {
        const { message: o } = N$1("MISSING_OR_INVALID", `emit() chainId: ${i}`);
        throw new Error(o);
      }
      if (!Kt$1(t)) {
        const { message: o } = N$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
      if (!Ft$1(n2, i, t.name)) {
        const { message: o } = N$1("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!Dt$1(e)) {
        const { message: t } = N$1("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (e, s) => {
      const t = { verified: { verifyUrl: s.verifyUrl || "", validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const i = await this.client.core.verify.resolve({ attestationId: e, verifyUrl: s.verifyUrl });
        i && (t.verified.origin = i, t.verified.validation = i === s.url ? "VALID" : "INVALID");
      } catch (i) {
        this.client.logger.error(i);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(t)}`), t;
    }, this.validateSessionProps = (e, s) => {
      Object.values(e).forEach((t) => {
        if (!y$2(t, false)) {
          const { message: i } = N$1("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
          throw new Error(i);
        }
      });
    };
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: r } = N$1("NOT_INITIALIZED", this.name);
      throw new Error(r);
    }
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(g$1.message, async (r) => {
      const { topic: e, message: s } = r;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const t = await this.client.core.crypto.decode(e, s);
      try {
        isJsonRpcRequest(t) ? (this.client.core.history.set(e, t), this.onRelayEventRequest({ topic: e, payload: t })) : isJsonRpcResponse(t) ? (await this.client.core.history.resolve(t), await this.onRelayEventResponse({ topic: e, payload: t }), this.client.core.history.delete(e, t.id)) : this.onRelayEventUnknownPayload({ topic: e, payload: t });
      } catch (i) {
        this.client.logger.error(i);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(w$1.expired, async (r) => {
      const { topic: e, id: s } = rt$1(r.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, N$1("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, true), this.client.events.emit("session_expire", { topic: e })) : s && (await this.deleteProposal(s, true), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  isValidPairingTopic(r) {
    if (!y$2(r, false)) {
      const { message: e } = N$1("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(r)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (st$1(this.client.core.pairing.pairings.get(r).expiry)) {
      const { message: e } = N$1("EXPIRED", `pairing topic: ${r}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(r) {
    if (!y$2(r, false)) {
      const { message: e } = N$1("MISSING_OR_INVALID", `session topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.session.keys.includes(r)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `session topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (st$1(this.client.session.get(r).expiry)) {
      await this.deleteSession(r);
      const { message: e } = N$1("EXPIRED", `session topic: ${r}`);
      throw new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(r) {
    if (this.client.session.keys.includes(r))
      await this.isValidSessionTopic(r);
    else if (this.client.core.pairing.pairings.keys.includes(r))
      this.isValidPairingTopic(r);
    else if (y$2(r, false)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    } else {
      const { message: e } = N$1("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(r) {
    if (!Ct$1(r)) {
      const { message: e } = N$1("MISSING_OR_INVALID", `proposal id should be a number: ${r}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(r)) {
      const { message: e } = N$1("NO_MATCHING_KEY", `proposal id doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (st$1(this.client.proposal.get(r).expiry)) {
      await this.deleteProposal(r);
      const { message: e } = N$1("EXPIRED", `proposal id: ${r}`);
      throw new Error(e);
    }
  }
}
class cs extends Nt {
  constructor(r, e) {
    super(r, e, ie, G$1), this.core = r, this.logger = e;
  }
}
class ls extends Nt {
  constructor(r, e) {
    super(r, e, ne, G$1), this.core = r, this.logger = e;
  }
}
class ps extends Nt {
  constructor(r, e) {
    super(r, e, ae, G$1, (s) => s.id), this.core = r, this.logger = e;
  }
}
class U$1 extends b {
  constructor(r) {
    super(r), this.protocol = Y, this.version = J$1, this.name = $$1.name, this.events = new events.exports.EventEmitter(), this.on = (s, t) => this.events.on(s, t), this.once = (s, t) => this.events.once(s, t), this.off = (s, t) => this.events.off(s, t), this.removeListener = (s, t) => this.events.removeListener(s, t), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = r?.name || $$1.name, this.metadata = r?.metadata || Fn();
    const e = typeof r?.logger < "u" && typeof r?.logger != "string" ? r.logger : cjs.pino(cjs.getDefaultLoggerOptions({ level: r?.logger || $$1.logger }));
    this.core = r?.core || new Sr(r), this.logger = cjs.generateChildLogger(e, this.name), this.session = new ls(this.core, this.logger), this.proposal = new cs(this.core, this.logger), this.pendingRequest = new ps(this.core, this.logger), this.engine = new as(this);
  }
  static async init(r) {
    const e = new U$1(r);
    return await e.initialize(), e;
  }
  get context() {
    return cjs.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (r) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(r.message), r;
    }
  }
}
var browserPonyfillExports = requireBrowserPonyfill();
const DEFAULT_HTTP_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
const DEFAULT_HTTP_METHOD = "POST";
const DEFAULT_FETCH_OPTS = {
  headers: DEFAULT_HTTP_HEADERS,
  method: DEFAULT_HTTP_METHOD
};
const EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
class HttpConnection {
  constructor(url, disableProviderPing = false) {
    this.url = url;
    this.disableProviderPing = disableProviderPing;
    this.events = new events.exports.EventEmitter();
    this.isAvailable = false;
    this.registering = false;
    if (!isHttpUrl(url)) {
      throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
    }
    this.url = url;
    this.disableProviderPing = disableProviderPing;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(url = this.url) {
    await this.register(url);
  }
  async close() {
    if (!this.isAvailable) {
      throw new Error("Connection already closed");
    }
    this.onClose();
  }
  async send(payload, context) {
    if (!this.isAvailable) {
      await this.register();
    }
    try {
      const body = safeJsonStringify(payload);
      const res = await browserPonyfillExports(this.url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
      const data = await res.json();
      this.onPayload({ data });
    } catch (e) {
      this.onError(payload.id, e);
    }
  }
  async register(url = this.url) {
    if (!isHttpUrl(url)) {
      throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
    }
    if (this.registering) {
      const currentMaxListeners = this.events.getMaxListeners();
      if (this.events.listenerCount("register_error") >= currentMaxListeners || this.events.listenerCount("open") >= currentMaxListeners) {
        this.events.setMaxListeners(currentMaxListeners + 1);
      }
      return new Promise((resolve, reject) => {
        this.events.once("register_error", (error) => {
          this.resetMaxListeners();
          reject(error);
        });
        this.events.once("open", () => {
          this.resetMaxListeners();
          if (typeof this.isAvailable === "undefined") {
            return reject(new Error("HTTP connection is missing or invalid"));
          }
          resolve();
        });
      });
    }
    this.url = url;
    this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const body = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await browserPonyfillExports(url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
      }
      this.onOpen();
    } catch (e) {
      const error = this.parseError(e);
      this.events.emit("register_error", error);
      this.onClose();
      throw error;
    }
  }
  onOpen() {
    this.isAvailable = true;
    this.registering = false;
    this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false;
    this.registering = false;
    this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data === "undefined")
      return;
    const payload = typeof e.data === "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", payload);
  }
  onError(id, e) {
    const error = this.parseError(e);
    const message = error.message || error.toString();
    const payload = formatJsonRpcError(id, message);
    this.events.emit("payload", payload);
  }
  parseError(e, url = this.url) {
    return parseConnectionError(e, url, "HTTP");
  }
  resetMaxListeners() {
    if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT) {
      this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
    }
  }
}
const Ca = "error", Hg = "wss://relay.walletconnect.com", $g = "wc", Ug = "universal_provider", Ia = `${$g}@2:${Ug}:`, Wg = "https://rpc.walletconnect.com/v1", ot = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $i = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(C2, u2) {
  (function() {
    var i, p2 = "4.17.21", I2 = 200, D2 = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", F2 = "Expected a function", Fn2 = "Invalid `variable` option passed into `_.template`", Gt2 = "__lodash_hash_undefined__", lr2 = 500, At2 = "__lodash_placeholder__", Ln = 1, Mn = 2, Ct2 = 4, It2 = 1, de2 = 2, vn = 1, ft2 = 2, Mi2 = 4, Dn2 = 8, xt2 = 16, Nn = 32, Et2 = 64, qn2 = 128, zt2 = 256, pr2 = 512, Ta = 30, La = "...", Da = 800, Na = 16, qi2 = 1, Ha = 2, $a = 3, ct2 = 1 / 0, kn = 9007199254740991, Ua = 17976931348623157e292, ge2 = 0 / 0, Hn = 4294967295, Wa = Hn - 1, Fa = Hn >>> 1, Ma = [["ary", qn2], ["bind", vn], ["bindKey", ft2], ["curry", Dn2], ["curryRight", xt2], ["flip", pr2], ["partial", Nn], ["partialRight", Et2], ["rearg", zt2]], yt2 = "[object Arguments]", ve = "[object Array]", qa = "[object AsyncFunction]", Kt2 = "[object Boolean]", Yt = "[object Date]", Ba = "[object DOMException]", _e = "[object Error]", me = "[object Function]", Bi2 = "[object GeneratorFunction]", yn = "[object Map]", Zt = "[object Number]", Ga = "[object Null]", Bn2 = "[object Object]", Gi2 = "[object Promise]", za = "[object Proxy]", Jt = "[object RegExp]", Sn = "[object Set]", Xt = "[object String]", we = "[object Symbol]", Ka = "[object Undefined]", Qt = "[object WeakMap]", Ya = "[object WeakSet]", Vt2 = "[object ArrayBuffer]", St2 = "[object DataView]", dr2 = "[object Float32Array]", gr2 = "[object Float64Array]", vr2 = "[object Int8Array]", _r2 = "[object Int16Array]", mr2 = "[object Int32Array]", wr2 = "[object Uint8Array]", Pr = "[object Uint8ClampedArray]", Ar = "[object Uint16Array]", Cr2 = "[object Uint32Array]", Za = /\b__p \+= '';/g, Ja = /\b(__p \+=) '' \+/g, Xa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, zi = /&(?:amp|lt|gt|quot|#39);/g, Ki2 = /[&<>"']/g, Qa = RegExp(zi.source), Va = RegExp(Ki2.source), ka = /<%-([\s\S]+?)%>/g, ja = /<%([\s\S]+?)%>/g, Yi2 = /<%=([\s\S]+?)%>/g, no = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, to = /^\w*$/, eo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ir2 = /[\\^$.*+?()[\]{}|]/g, ro = RegExp(Ir2.source), xr = /^\s+/, io = /\s/, so = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, uo = /\{\n\/\* \[wrapped with (.+)\] \*/, ao = /,? & /, oo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, fo = /[()=,{}\[\]\/\s]/, co = /\\(\\)?/g, ho = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Zi2 = /\w*$/, lo = /^[-+]0x[0-9a-f]+$/i, po = /^0b[01]+$/i, go = /^\[object .+?Constructor\]$/, vo = /^0o[0-7]+$/i, _o = /^(?:0|[1-9]\d*)$/, mo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Pe2 = /($^)/, wo = /['\n\r\u2028\u2029\\]/g, Ae2 = "\\ud800-\\udfff", Po = "\\u0300-\\u036f", Ao = "\\ufe20-\\ufe2f", Co = "\\u20d0-\\u20ff", Ji2 = Po + Ao + Co, Xi2 = "\\u2700-\\u27bf", Qi2 = "a-z\\xdf-\\xf6\\xf8-\\xff", Io = "\\xac\\xb1\\xd7\\xf7", xo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Eo = "\\u2000-\\u206f", yo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Vi2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", ki2 = "\\ufe0e\\ufe0f", ji2 = Io + xo + Eo + yo, Er2 = "['\u2019]", So = "[" + Ae2 + "]", ns2 = "[" + ji2 + "]", Ce = "[" + Ji2 + "]", ts2 = "\\d+", Oo = "[" + Xi2 + "]", es2 = "[" + Qi2 + "]", rs2 = "[^" + Ae2 + ji2 + ts2 + Xi2 + Qi2 + Vi2 + "]", yr2 = "\\ud83c[\\udffb-\\udfff]", Ro = "(?:" + Ce + "|" + yr2 + ")", is2 = "[^" + Ae2 + "]", Sr2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", Or = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ot2 = "[" + Vi2 + "]", ss2 = "\\u200d", us2 = "(?:" + es2 + "|" + rs2 + ")", bo = "(?:" + Ot2 + "|" + rs2 + ")", as2 = "(?:" + Er2 + "(?:d|ll|m|re|s|t|ve))?", os2 = "(?:" + Er2 + "(?:D|LL|M|RE|S|T|VE))?", fs2 = Ro + "?", cs2 = "[" + ki2 + "]?", To = "(?:" + ss2 + "(?:" + [is2, Sr2, Or].join("|") + ")" + cs2 + fs2 + ")*", Lo = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Do = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", hs2 = cs2 + fs2 + To, No = "(?:" + [Oo, Sr2, Or].join("|") + ")" + hs2, Ho = "(?:" + [is2 + Ce + "?", Ce, Sr2, Or, So].join("|") + ")", $o = RegExp(Er2, "g"), Uo = RegExp(Ce, "g"), Rr2 = RegExp(yr2 + "(?=" + yr2 + ")|" + Ho + hs2, "g"), Wo = RegExp([Ot2 + "?" + es2 + "+" + as2 + "(?=" + [ns2, Ot2, "$"].join("|") + ")", bo + "+" + os2 + "(?=" + [ns2, Ot2 + us2, "$"].join("|") + ")", Ot2 + "?" + us2 + "+" + as2, Ot2 + "+" + os2, Do, Lo, ts2, No].join("|"), "g"), Fo = RegExp("[" + ss2 + Ae2 + Ji2 + ki2 + "]"), Mo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, qo = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Bo = -1, B = {};
    B[dr2] = B[gr2] = B[vr2] = B[_r2] = B[mr2] = B[wr2] = B[Pr] = B[Ar] = B[Cr2] = true, B[yt2] = B[ve] = B[Vt2] = B[Kt2] = B[St2] = B[Yt] = B[_e] = B[me] = B[yn] = B[Zt] = B[Bn2] = B[Jt] = B[Sn] = B[Xt] = B[Qt] = false;
    var q2 = {};
    q2[yt2] = q2[ve] = q2[Vt2] = q2[St2] = q2[Kt2] = q2[Yt] = q2[dr2] = q2[gr2] = q2[vr2] = q2[_r2] = q2[mr2] = q2[yn] = q2[Zt] = q2[Bn2] = q2[Jt] = q2[Sn] = q2[Xt] = q2[we] = q2[wr2] = q2[Pr] = q2[Ar] = q2[Cr2] = true, q2[_e] = q2[me] = q2[Qt] = false;
    var Go = { \u00C0: "A", \u00C1: "A", \u00C2: "A", \u00C3: "A", \u00C4: "A", \u00C5: "A", \u00E0: "a", \u00E1: "a", \u00E2: "a", \u00E3: "a", \u00E4: "a", \u00E5: "a", \u00C7: "C", \u00E7: "c", \u00D0: "D", \u00F0: "d", \u00C8: "E", \u00C9: "E", \u00CA: "E", \u00CB: "E", \u00E8: "e", \u00E9: "e", \u00EA: "e", \u00EB: "e", \u00CC: "I", \u00CD: "I", \u00CE: "I", \u00CF: "I", \u00EC: "i", \u00ED: "i", \u00EE: "i", \u00EF: "i", \u00D1: "N", \u00F1: "n", \u00D2: "O", \u00D3: "O", \u00D4: "O", \u00D5: "O", \u00D6: "O", \u00D8: "O", \u00F2: "o", \u00F3: "o", \u00F4: "o", \u00F5: "o", \u00F6: "o", \u00F8: "o", \u00D9: "U", \u00DA: "U", \u00DB: "U", \u00DC: "U", \u00F9: "u", \u00FA: "u", \u00FB: "u", \u00FC: "u", \u00DD: "Y", \u00FD: "y", \u00FF: "y", \u00C6: "Ae", \u00E6: "ae", \u00DE: "Th", \u00FE: "th", \u00DF: "ss", \u0100: "A", \u0102: "A", \u0104: "A", \u0101: "a", \u0103: "a", \u0105: "a", \u0106: "C", \u0108: "C", \u010A: "C", \u010C: "C", \u0107: "c", \u0109: "c", \u010B: "c", \u010D: "c", \u010E: "D", \u0110: "D", \u010F: "d", \u0111: "d", \u0112: "E", \u0114: "E", \u0116: "E", \u0118: "E", \u011A: "E", \u0113: "e", \u0115: "e", \u0117: "e", \u0119: "e", \u011B: "e", \u011C: "G", \u011E: "G", \u0120: "G", \u0122: "G", \u011D: "g", \u011F: "g", \u0121: "g", \u0123: "g", \u0124: "H", \u0126: "H", \u0125: "h", \u0127: "h", \u0128: "I", \u012A: "I", \u012C: "I", \u012E: "I", \u0130: "I", \u0129: "i", \u012B: "i", \u012D: "i", \u012F: "i", \u0131: "i", \u0134: "J", \u0135: "j", \u0136: "K", \u0137: "k", \u0138: "k", \u0139: "L", \u013B: "L", \u013D: "L", \u013F: "L", \u0141: "L", \u013A: "l", \u013C: "l", \u013E: "l", \u0140: "l", \u0142: "l", \u0143: "N", \u0145: "N", \u0147: "N", \u014A: "N", \u0144: "n", \u0146: "n", \u0148: "n", \u014B: "n", \u014C: "O", \u014E: "O", \u0150: "O", \u014D: "o", \u014F: "o", \u0151: "o", \u0154: "R", \u0156: "R", \u0158: "R", \u0155: "r", \u0157: "r", \u0159: "r", \u015A: "S", \u015C: "S", \u015E: "S", \u0160: "S", \u015B: "s", \u015D: "s", \u015F: "s", \u0161: "s", \u0162: "T", \u0164: "T", \u0166: "T", \u0163: "t", \u0165: "t", \u0167: "t", \u0168: "U", \u016A: "U", \u016C: "U", \u016E: "U", \u0170: "U", \u0172: "U", \u0169: "u", \u016B: "u", \u016D: "u", \u016F: "u", \u0171: "u", \u0173: "u", \u0174: "W", \u0175: "w", \u0176: "Y", \u0177: "y", \u0178: "Y", \u0179: "Z", \u017B: "Z", \u017D: "Z", \u017A: "z", \u017C: "z", \u017E: "z", \u0132: "IJ", \u0133: "ij", \u0152: "Oe", \u0153: "oe", \u0149: "'n", \u017F: "s" }, zo = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Ko = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Yo = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Zo = parseFloat, Jo = parseInt, ls2 = typeof pe == "object" && pe && pe.Object === Object && pe, Xo = typeof self == "object" && self && self.Object === Object && self, k = ls2 || Xo || Function("return this")(), br2 = u2 && !u2.nodeType && u2, ht2 = br2 && true && C2 && !C2.nodeType && C2, ps2 = ht2 && ht2.exports === br2, Tr2 = ps2 && ls2.process, _n2 = function() {
      try {
        var h2 = ht2 && ht2.require && ht2.require("util").types;
        return h2 || Tr2 && Tr2.binding && Tr2.binding("util");
      } catch {
      }
    }(), ds2 = _n2 && _n2.isArrayBuffer, gs2 = _n2 && _n2.isDate, vs2 = _n2 && _n2.isMap, _s2 = _n2 && _n2.isRegExp, ms2 = _n2 && _n2.isSet, ws2 = _n2 && _n2.isTypedArray;
    function cn2(h2, g2, d2) {
      switch (d2.length) {
        case 0:
          return h2.call(g2);
        case 1:
          return h2.call(g2, d2[0]);
        case 2:
          return h2.call(g2, d2[0], d2[1]);
        case 3:
          return h2.call(g2, d2[0], d2[1], d2[2]);
      }
      return h2.apply(g2, d2);
    }
    function Qo(h2, g2, d2, P2) {
      for (var S2 = -1, $2 = h2 == null ? 0 : h2.length; ++S2 < $2; ) {
        var X2 = h2[S2];
        g2(P2, X2, d2(X2), h2);
      }
      return P2;
    }
    function mn(h2, g2) {
      for (var d2 = -1, P2 = h2 == null ? 0 : h2.length; ++d2 < P2 && g2(h2[d2], d2, h2) !== false; )
        ;
      return h2;
    }
    function Vo(h2, g2) {
      for (var d2 = h2 == null ? 0 : h2.length; d2-- && g2(h2[d2], d2, h2) !== false; )
        ;
      return h2;
    }
    function Ps2(h2, g2) {
      for (var d2 = -1, P2 = h2 == null ? 0 : h2.length; ++d2 < P2; )
        if (!g2(h2[d2], d2, h2))
          return false;
      return true;
    }
    function jn2(h2, g2) {
      for (var d2 = -1, P2 = h2 == null ? 0 : h2.length, S2 = 0, $2 = []; ++d2 < P2; ) {
        var X2 = h2[d2];
        g2(X2, d2, h2) && ($2[S2++] = X2);
      }
      return $2;
    }
    function Ie(h2, g2) {
      var d2 = h2 == null ? 0 : h2.length;
      return !!d2 && Rt2(h2, g2, 0) > -1;
    }
    function Lr(h2, g2, d2) {
      for (var P2 = -1, S2 = h2 == null ? 0 : h2.length; ++P2 < S2; )
        if (d2(g2, h2[P2]))
          return true;
      return false;
    }
    function G2(h2, g2) {
      for (var d2 = -1, P2 = h2 == null ? 0 : h2.length, S2 = Array(P2); ++d2 < P2; )
        S2[d2] = g2(h2[d2], d2, h2);
      return S2;
    }
    function nt2(h2, g2) {
      for (var d2 = -1, P2 = g2.length, S2 = h2.length; ++d2 < P2; )
        h2[S2 + d2] = g2[d2];
      return h2;
    }
    function Dr2(h2, g2, d2, P2) {
      var S2 = -1, $2 = h2 == null ? 0 : h2.length;
      for (P2 && $2 && (d2 = h2[++S2]); ++S2 < $2; )
        d2 = g2(d2, h2[S2], S2, h2);
      return d2;
    }
    function ko(h2, g2, d2, P2) {
      var S2 = h2 == null ? 0 : h2.length;
      for (P2 && S2 && (d2 = h2[--S2]); S2--; )
        d2 = g2(d2, h2[S2], S2, h2);
      return d2;
    }
    function Nr(h2, g2) {
      for (var d2 = -1, P2 = h2 == null ? 0 : h2.length; ++d2 < P2; )
        if (g2(h2[d2], d2, h2))
          return true;
      return false;
    }
    var jo = Hr("length");
    function nf(h2) {
      return h2.split("");
    }
    function tf(h2) {
      return h2.match(oo) || [];
    }
    function As2(h2, g2, d2) {
      var P2;
      return d2(h2, function(S2, $2, X2) {
        if (g2(S2, $2, X2))
          return P2 = $2, false;
      }), P2;
    }
    function xe2(h2, g2, d2, P2) {
      for (var S2 = h2.length, $2 = d2 + (P2 ? 1 : -1); P2 ? $2-- : ++$2 < S2; )
        if (g2(h2[$2], $2, h2))
          return $2;
      return -1;
    }
    function Rt2(h2, g2, d2) {
      return g2 === g2 ? df(h2, g2, d2) : xe2(h2, Cs2, d2);
    }
    function ef(h2, g2, d2, P2) {
      for (var S2 = d2 - 1, $2 = h2.length; ++S2 < $2; )
        if (P2(h2[S2], g2))
          return S2;
      return -1;
    }
    function Cs2(h2) {
      return h2 !== h2;
    }
    function Is2(h2, g2) {
      var d2 = h2 == null ? 0 : h2.length;
      return d2 ? Ur(h2, g2) / d2 : ge2;
    }
    function Hr(h2) {
      return function(g2) {
        return g2 == null ? i : g2[h2];
      };
    }
    function $r(h2) {
      return function(g2) {
        return h2 == null ? i : h2[g2];
      };
    }
    function xs2(h2, g2, d2, P2, S2) {
      return S2(h2, function($2, X2, M2) {
        d2 = P2 ? (P2 = false, $2) : g2(d2, $2, X2, M2);
      }), d2;
    }
    function rf(h2, g2) {
      var d2 = h2.length;
      for (h2.sort(g2); d2--; )
        h2[d2] = h2[d2].value;
      return h2;
    }
    function Ur(h2, g2) {
      for (var d2, P2 = -1, S2 = h2.length; ++P2 < S2; ) {
        var $2 = g2(h2[P2]);
        $2 !== i && (d2 = d2 === i ? $2 : d2 + $2);
      }
      return d2;
    }
    function Wr(h2, g2) {
      for (var d2 = -1, P2 = Array(h2); ++d2 < h2; )
        P2[d2] = g2(d2);
      return P2;
    }
    function sf(h2, g2) {
      return G2(g2, function(d2) {
        return [d2, h2[d2]];
      });
    }
    function Es2(h2) {
      return h2 && h2.slice(0, Rs2(h2) + 1).replace(xr, "");
    }
    function hn(h2) {
      return function(g2) {
        return h2(g2);
      };
    }
    function Fr(h2, g2) {
      return G2(g2, function(d2) {
        return h2[d2];
      });
    }
    function kt2(h2, g2) {
      return h2.has(g2);
    }
    function ys2(h2, g2) {
      for (var d2 = -1, P2 = h2.length; ++d2 < P2 && Rt2(g2, h2[d2], 0) > -1; )
        ;
      return d2;
    }
    function Ss2(h2, g2) {
      for (var d2 = h2.length; d2-- && Rt2(g2, h2[d2], 0) > -1; )
        ;
      return d2;
    }
    function uf(h2, g2) {
      for (var d2 = h2.length, P2 = 0; d2--; )
        h2[d2] === g2 && ++P2;
      return P2;
    }
    var af = $r(Go), of = $r(zo);
    function ff(h2) {
      return "\\" + Yo[h2];
    }
    function cf(h2, g2) {
      return h2 == null ? i : h2[g2];
    }
    function bt2(h2) {
      return Fo.test(h2);
    }
    function hf(h2) {
      return Mo.test(h2);
    }
    function lf(h2) {
      for (var g2, d2 = []; !(g2 = h2.next()).done; )
        d2.push(g2.value);
      return d2;
    }
    function Mr(h2) {
      var g2 = -1, d2 = Array(h2.size);
      return h2.forEach(function(P2, S2) {
        d2[++g2] = [S2, P2];
      }), d2;
    }
    function Os2(h2, g2) {
      return function(d2) {
        return h2(g2(d2));
      };
    }
    function tt2(h2, g2) {
      for (var d2 = -1, P2 = h2.length, S2 = 0, $2 = []; ++d2 < P2; ) {
        var X2 = h2[d2];
        (X2 === g2 || X2 === At2) && (h2[d2] = At2, $2[S2++] = d2);
      }
      return $2;
    }
    function Ee(h2) {
      var g2 = -1, d2 = Array(h2.size);
      return h2.forEach(function(P2) {
        d2[++g2] = P2;
      }), d2;
    }
    function pf(h2) {
      var g2 = -1, d2 = Array(h2.size);
      return h2.forEach(function(P2) {
        d2[++g2] = [P2, P2];
      }), d2;
    }
    function df(h2, g2, d2) {
      for (var P2 = d2 - 1, S2 = h2.length; ++P2 < S2; )
        if (h2[P2] === g2)
          return P2;
      return -1;
    }
    function gf(h2, g2, d2) {
      for (var P2 = d2 + 1; P2--; )
        if (h2[P2] === g2)
          return P2;
      return P2;
    }
    function Tt2(h2) {
      return bt2(h2) ? _f(h2) : jo(h2);
    }
    function On2(h2) {
      return bt2(h2) ? mf(h2) : nf(h2);
    }
    function Rs2(h2) {
      for (var g2 = h2.length; g2-- && io.test(h2.charAt(g2)); )
        ;
      return g2;
    }
    var vf = $r(Ko);
    function _f(h2) {
      for (var g2 = Rr2.lastIndex = 0; Rr2.test(h2); )
        ++g2;
      return g2;
    }
    function mf(h2) {
      return h2.match(Rr2) || [];
    }
    function wf(h2) {
      return h2.match(Wo) || [];
    }
    var Pf = function h2(g2) {
      g2 = g2 == null ? k : Lt2.defaults(k.Object(), g2, Lt2.pick(k, qo));
      var d2 = g2.Array, P2 = g2.Date, S2 = g2.Error, $2 = g2.Function, X2 = g2.Math, M2 = g2.Object, qr = g2.RegExp, Af = g2.String, wn = g2.TypeError, ye = d2.prototype, Cf = $2.prototype, Dt2 = M2.prototype, Se = g2["__core-js_shared__"], Oe2 = Cf.toString, W2 = Dt2.hasOwnProperty, If = 0, bs2 = function() {
        var n2 = /[^.]+$/.exec(Se && Se.keys && Se.keys.IE_PROTO || "");
        return n2 ? "Symbol(src)_1." + n2 : "";
      }(), Re = Dt2.toString, xf = Oe2.call(M2), Ef = k._, yf = qr("^" + Oe2.call(W2).replace(Ir2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), be = ps2 ? g2.Buffer : i, et2 = g2.Symbol, Te = g2.Uint8Array, Ts2 = be ? be.allocUnsafe : i, Le2 = Os2(M2.getPrototypeOf, M2), Ls2 = M2.create, Ds2 = Dt2.propertyIsEnumerable, De = ye.splice, Ns2 = et2 ? et2.isConcatSpreadable : i, jt2 = et2 ? et2.iterator : i, lt2 = et2 ? et2.toStringTag : i, Ne2 = function() {
        try {
          var n2 = _t2(M2, "defineProperty");
          return n2({}, "", {}), n2;
        } catch {
        }
      }(), Sf = g2.clearTimeout !== k.clearTimeout && g2.clearTimeout, Of = P2 && P2.now !== k.Date.now && P2.now, Rf = g2.setTimeout !== k.setTimeout && g2.setTimeout, He2 = X2.ceil, $e2 = X2.floor, Br = M2.getOwnPropertySymbols, bf = be ? be.isBuffer : i, Hs2 = g2.isFinite, Tf = ye.join, Lf = Os2(M2.keys, M2), Q2 = X2.max, nn = X2.min, Df = P2.now, Nf = g2.parseInt, $s2 = X2.random, Hf = ye.reverse, Gr = _t2(g2, "DataView"), ne2 = _t2(g2, "Map"), zr = _t2(g2, "Promise"), Nt2 = _t2(g2, "Set"), te2 = _t2(g2, "WeakMap"), ee2 = _t2(M2, "create"), Ue2 = te2 && new te2(), Ht = {}, $f = mt2(Gr), Uf = mt2(ne2), Wf = mt2(zr), Ff = mt2(Nt2), Mf = mt2(te2), We2 = et2 ? et2.prototype : i, re2 = We2 ? We2.valueOf : i, Us2 = We2 ? We2.toString : i;
      function a2(n2) {
        if (K2(n2) && !O2(n2) && !(n2 instanceof N2)) {
          if (n2 instanceof Pn)
            return n2;
          if (W2.call(n2, "__wrapped__"))
            return Wu(n2);
        }
        return new Pn(n2);
      }
      var $t2 = function() {
        function n2() {
        }
        return function(t) {
          if (!z(t))
            return {};
          if (Ls2)
            return Ls2(t);
          n2.prototype = t;
          var e = new n2();
          return n2.prototype = i, e;
        };
      }();
      function Fe2() {
      }
      function Pn(n2, t) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i;
      }
      a2.templateSettings = { escape: ka, evaluate: ja, interpolate: Yi2, variable: "", imports: { _: a2 } }, a2.prototype = Fe2.prototype, a2.prototype.constructor = a2, Pn.prototype = $t2(Fe2.prototype), Pn.prototype.constructor = Pn;
      function N2(n2) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Hn, this.__views__ = [];
      }
      function qf() {
        var n2 = new N2(this.__wrapped__);
        return n2.__actions__ = un(this.__actions__), n2.__dir__ = this.__dir__, n2.__filtered__ = this.__filtered__, n2.__iteratees__ = un(this.__iteratees__), n2.__takeCount__ = this.__takeCount__, n2.__views__ = un(this.__views__), n2;
      }
      function Bf() {
        if (this.__filtered__) {
          var n2 = new N2(this);
          n2.__dir__ = -1, n2.__filtered__ = true;
        } else
          n2 = this.clone(), n2.__dir__ *= -1;
        return n2;
      }
      function Gf() {
        var n2 = this.__wrapped__.value(), t = this.__dir__, e = O2(n2), r = t < 0, s = e ? n2.length : 0, o = th(0, s, this.__views__), f2 = o.start, c = o.end, l = c - f2, v2 = r ? c : f2 - 1, _2 = this.__iteratees__, m2 = _2.length, w2 = 0, A2 = nn(l, this.__takeCount__);
        if (!e || !r && s == l && A2 == l)
          return au(n2, this.__actions__);
        var E2 = [];
        n:
          for (; l-- && w2 < A2; ) {
            v2 += t;
            for (var b2 = -1, y2 = n2[v2]; ++b2 < m2; ) {
              var L2 = _2[b2], H2 = L2.iteratee, dn = L2.type, sn2 = H2(y2);
              if (dn == Ha)
                y2 = sn2;
              else if (!sn2) {
                if (dn == qi2)
                  continue n;
                break n;
              }
            }
            E2[w2++] = y2;
          }
        return E2;
      }
      N2.prototype = $t2(Fe2.prototype), N2.prototype.constructor = N2;
      function pt2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function zf() {
        this.__data__ = ee2 ? ee2(null) : {}, this.size = 0;
      }
      function Kf(n2) {
        var t = this.has(n2) && delete this.__data__[n2];
        return this.size -= t ? 1 : 0, t;
      }
      function Yf(n2) {
        var t = this.__data__;
        if (ee2) {
          var e = t[n2];
          return e === Gt2 ? i : e;
        }
        return W2.call(t, n2) ? t[n2] : i;
      }
      function Zf(n2) {
        var t = this.__data__;
        return ee2 ? t[n2] !== i : W2.call(t, n2);
      }
      function Jf(n2, t) {
        var e = this.__data__;
        return this.size += this.has(n2) ? 0 : 1, e[n2] = ee2 && t === i ? Gt2 : t, this;
      }
      pt2.prototype.clear = zf, pt2.prototype.delete = Kf, pt2.prototype.get = Yf, pt2.prototype.has = Zf, pt2.prototype.set = Jf;
      function Gn(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function Xf() {
        this.__data__ = [], this.size = 0;
      }
      function Qf(n2) {
        var t = this.__data__, e = Me2(t, n2);
        if (e < 0)
          return false;
        var r = t.length - 1;
        return e == r ? t.pop() : De.call(t, e, 1), --this.size, true;
      }
      function Vf(n2) {
        var t = this.__data__, e = Me2(t, n2);
        return e < 0 ? i : t[e][1];
      }
      function kf(n2) {
        return Me2(this.__data__, n2) > -1;
      }
      function jf(n2, t) {
        var e = this.__data__, r = Me2(e, n2);
        return r < 0 ? (++this.size, e.push([n2, t])) : e[r][1] = t, this;
      }
      Gn.prototype.clear = Xf, Gn.prototype.delete = Qf, Gn.prototype.get = Vf, Gn.prototype.has = kf, Gn.prototype.set = jf;
      function zn(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function nc() {
        this.size = 0, this.__data__ = { hash: new pt2(), map: new (ne2 || Gn)(), string: new pt2() };
      }
      function tc(n2) {
        var t = ke2(this, n2).delete(n2);
        return this.size -= t ? 1 : 0, t;
      }
      function ec(n2) {
        return ke2(this, n2).get(n2);
      }
      function rc(n2) {
        return ke2(this, n2).has(n2);
      }
      function ic(n2, t) {
        var e = ke2(this, n2), r = e.size;
        return e.set(n2, t), this.size += e.size == r ? 0 : 1, this;
      }
      zn.prototype.clear = nc, zn.prototype.delete = tc, zn.prototype.get = ec, zn.prototype.has = rc, zn.prototype.set = ic;
      function dt2(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.__data__ = new zn(); ++t < e; )
          this.add(n2[t]);
      }
      function sc(n2) {
        return this.__data__.set(n2, Gt2), this;
      }
      function uc(n2) {
        return this.__data__.has(n2);
      }
      dt2.prototype.add = dt2.prototype.push = sc, dt2.prototype.has = uc;
      function Rn2(n2) {
        var t = this.__data__ = new Gn(n2);
        this.size = t.size;
      }
      function ac() {
        this.__data__ = new Gn(), this.size = 0;
      }
      function oc(n2) {
        var t = this.__data__, e = t.delete(n2);
        return this.size = t.size, e;
      }
      function fc(n2) {
        return this.__data__.get(n2);
      }
      function cc(n2) {
        return this.__data__.has(n2);
      }
      function hc(n2, t) {
        var e = this.__data__;
        if (e instanceof Gn) {
          var r = e.__data__;
          if (!ne2 || r.length < I2 - 1)
            return r.push([n2, t]), this.size = ++e.size, this;
          e = this.__data__ = new zn(r);
        }
        return e.set(n2, t), this.size = e.size, this;
      }
      Rn2.prototype.clear = ac, Rn2.prototype.delete = oc, Rn2.prototype.get = fc, Rn2.prototype.has = cc, Rn2.prototype.set = hc;
      function Ws2(n2, t) {
        var e = O2(n2), r = !e && wt2(n2), s = !e && !r && at2(n2), o = !e && !r && !s && Mt2(n2), f2 = e || r || s || o, c = f2 ? Wr(n2.length, Af) : [], l = c.length;
        for (var v2 in n2)
          (t || W2.call(n2, v2)) && !(f2 && (v2 == "length" || s && (v2 == "offset" || v2 == "parent") || o && (v2 == "buffer" || v2 == "byteLength" || v2 == "byteOffset") || Jn(v2, l))) && c.push(v2);
        return c;
      }
      function Fs2(n2) {
        var t = n2.length;
        return t ? n2[ti(0, t - 1)] : i;
      }
      function lc(n2, t) {
        return je2(un(n2), gt2(t, 0, n2.length));
      }
      function pc(n2) {
        return je2(un(n2));
      }
      function Kr(n2, t, e) {
        (e !== i && !bn(n2[t], e) || e === i && !(t in n2)) && Kn(n2, t, e);
      }
      function ie2(n2, t, e) {
        var r = n2[t];
        (!(W2.call(n2, t) && bn(r, e)) || e === i && !(t in n2)) && Kn(n2, t, e);
      }
      function Me2(n2, t) {
        for (var e = n2.length; e--; )
          if (bn(n2[e][0], t))
            return e;
        return -1;
      }
      function dc(n2, t, e, r) {
        return rt2(n2, function(s, o, f2) {
          t(r, s, e(s), f2);
        }), r;
      }
      function Ms2(n2, t) {
        return n2 && Un2(t, V2(t), n2);
      }
      function gc(n2, t) {
        return n2 && Un2(t, on(t), n2);
      }
      function Kn(n2, t, e) {
        t == "__proto__" && Ne2 ? Ne2(n2, t, { configurable: true, enumerable: true, value: e, writable: true }) : n2[t] = e;
      }
      function Yr(n2, t) {
        for (var e = -1, r = t.length, s = d2(r), o = n2 == null; ++e < r; )
          s[e] = o ? i : yi(n2, t[e]);
        return s;
      }
      function gt2(n2, t, e) {
        return n2 === n2 && (e !== i && (n2 = n2 <= e ? n2 : e), t !== i && (n2 = n2 >= t ? n2 : t)), n2;
      }
      function An2(n2, t, e, r, s, o) {
        var f2, c = t & Ln, l = t & Mn, v2 = t & Ct2;
        if (e && (f2 = s ? e(n2, r, s, o) : e(n2)), f2 !== i)
          return f2;
        if (!z(n2))
          return n2;
        var _2 = O2(n2);
        if (_2) {
          if (f2 = rh(n2), !c)
            return un(n2, f2);
        } else {
          var m2 = tn(n2), w2 = m2 == me || m2 == Bi2;
          if (at2(n2))
            return cu(n2, c);
          if (m2 == Bn2 || m2 == yt2 || w2 && !s) {
            if (f2 = l || w2 ? {} : Ru(n2), !c)
              return l ? Yc(n2, gc(f2, n2)) : Kc(n2, Ms2(f2, n2));
          } else {
            if (!q2[m2])
              return s ? n2 : {};
            f2 = ih(n2, m2, c);
          }
        }
        o || (o = new Rn2());
        var A2 = o.get(n2);
        if (A2)
          return A2;
        o.set(n2, f2), ia(n2) ? n2.forEach(function(y2) {
          f2.add(An2(y2, t, e, y2, n2, o));
        }) : ea(n2) && n2.forEach(function(y2, L2) {
          f2.set(L2, An2(y2, t, e, L2, n2, o));
        });
        var E2 = v2 ? l ? li : hi : l ? on : V2, b2 = _2 ? i : E2(n2);
        return mn(b2 || n2, function(y2, L2) {
          b2 && (L2 = y2, y2 = n2[L2]), ie2(f2, L2, An2(y2, t, e, L2, n2, o));
        }), f2;
      }
      function vc(n2) {
        var t = V2(n2);
        return function(e) {
          return qs2(e, n2, t);
        };
      }
      function qs2(n2, t, e) {
        var r = e.length;
        if (n2 == null)
          return !r;
        for (n2 = M2(n2); r--; ) {
          var s = e[r], o = t[s], f2 = n2[s];
          if (f2 === i && !(s in n2) || !o(f2))
            return false;
        }
        return true;
      }
      function Bs2(n2, t, e) {
        if (typeof n2 != "function")
          throw new wn(F2);
        return he2(function() {
          n2.apply(i, e);
        }, t);
      }
      function se(n2, t, e, r) {
        var s = -1, o = Ie, f2 = true, c = n2.length, l = [], v2 = t.length;
        if (!c)
          return l;
        e && (t = G2(t, hn(e))), r ? (o = Lr, f2 = false) : t.length >= I2 && (o = kt2, f2 = false, t = new dt2(t));
        n:
          for (; ++s < c; ) {
            var _2 = n2[s], m2 = e == null ? _2 : e(_2);
            if (_2 = r || _2 !== 0 ? _2 : 0, f2 && m2 === m2) {
              for (var w2 = v2; w2--; )
                if (t[w2] === m2)
                  continue n;
              l.push(_2);
            } else
              o(t, m2, r) || l.push(_2);
          }
        return l;
      }
      var rt2 = gu($n2), Gs2 = gu(Jr, true);
      function _c(n2, t) {
        var e = true;
        return rt2(n2, function(r, s, o) {
          return e = !!t(r, s, o), e;
        }), e;
      }
      function qe2(n2, t, e) {
        for (var r = -1, s = n2.length; ++r < s; ) {
          var o = n2[r], f2 = t(o);
          if (f2 != null && (c === i ? f2 === f2 && !pn(f2) : e(f2, c)))
            var c = f2, l = o;
        }
        return l;
      }
      function mc(n2, t, e, r) {
        var s = n2.length;
        for (e = R(e), e < 0 && (e = -e > s ? 0 : s + e), r = r === i || r > s ? s : R(r), r < 0 && (r += s), r = e > r ? 0 : ua(r); e < r; )
          n2[e++] = t;
        return n2;
      }
      function zs2(n2, t) {
        var e = [];
        return rt2(n2, function(r, s, o) {
          t(r, s, o) && e.push(r);
        }), e;
      }
      function j2(n2, t, e, r, s) {
        var o = -1, f2 = n2.length;
        for (e || (e = uh), s || (s = []); ++o < f2; ) {
          var c = n2[o];
          t > 0 && e(c) ? t > 1 ? j2(c, t - 1, e, r, s) : nt2(s, c) : r || (s[s.length] = c);
        }
        return s;
      }
      var Zr = vu(), Ks2 = vu(true);
      function $n2(n2, t) {
        return n2 && Zr(n2, t, V2);
      }
      function Jr(n2, t) {
        return n2 && Ks2(n2, t, V2);
      }
      function Be2(n2, t) {
        return jn2(t, function(e) {
          return Xn2(n2[e]);
        });
      }
      function vt2(n2, t) {
        t = st2(t, n2);
        for (var e = 0, r = t.length; n2 != null && e < r; )
          n2 = n2[Wn(t[e++])];
        return e && e == r ? n2 : i;
      }
      function Ys2(n2, t, e) {
        var r = t(n2);
        return O2(n2) ? r : nt2(r, e(n2));
      }
      function en(n2) {
        return n2 == null ? n2 === i ? Ka : Ga : lt2 && lt2 in M2(n2) ? nh(n2) : ph(n2);
      }
      function Xr(n2, t) {
        return n2 > t;
      }
      function wc(n2, t) {
        return n2 != null && W2.call(n2, t);
      }
      function Pc(n2, t) {
        return n2 != null && t in M2(n2);
      }
      function Ac(n2, t, e) {
        return n2 >= nn(t, e) && n2 < Q2(t, e);
      }
      function Qr(n2, t, e) {
        for (var r = e ? Lr : Ie, s = n2[0].length, o = n2.length, f2 = o, c = d2(o), l = 1 / 0, v2 = []; f2--; ) {
          var _2 = n2[f2];
          f2 && t && (_2 = G2(_2, hn(t))), l = nn(_2.length, l), c[f2] = !e && (t || s >= 120 && _2.length >= 120) ? new dt2(f2 && _2) : i;
        }
        _2 = n2[0];
        var m2 = -1, w2 = c[0];
        n:
          for (; ++m2 < s && v2.length < l; ) {
            var A2 = _2[m2], E2 = t ? t(A2) : A2;
            if (A2 = e || A2 !== 0 ? A2 : 0, !(w2 ? kt2(w2, E2) : r(v2, E2, e))) {
              for (f2 = o; --f2; ) {
                var b2 = c[f2];
                if (!(b2 ? kt2(b2, E2) : r(n2[f2], E2, e)))
                  continue n;
              }
              w2 && w2.push(E2), v2.push(A2);
            }
          }
        return v2;
      }
      function Cc(n2, t, e, r) {
        return $n2(n2, function(s, o, f2) {
          t(r, e(s), o, f2);
        }), r;
      }
      function ue2(n2, t, e) {
        t = st2(t, n2), n2 = Du(n2, t);
        var r = n2 == null ? n2 : n2[Wn(In(t))];
        return r == null ? i : cn2(r, n2, e);
      }
      function Zs2(n2) {
        return K2(n2) && en(n2) == yt2;
      }
      function Ic(n2) {
        return K2(n2) && en(n2) == Vt2;
      }
      function xc(n2) {
        return K2(n2) && en(n2) == Yt;
      }
      function ae2(n2, t, e, r, s) {
        return n2 === t ? true : n2 == null || t == null || !K2(n2) && !K2(t) ? n2 !== n2 && t !== t : Ec(n2, t, e, r, ae2, s);
      }
      function Ec(n2, t, e, r, s, o) {
        var f2 = O2(n2), c = O2(t), l = f2 ? ve : tn(n2), v2 = c ? ve : tn(t);
        l = l == yt2 ? Bn2 : l, v2 = v2 == yt2 ? Bn2 : v2;
        var _2 = l == Bn2, m2 = v2 == Bn2, w2 = l == v2;
        if (w2 && at2(n2)) {
          if (!at2(t))
            return false;
          f2 = true, _2 = false;
        }
        if (w2 && !_2)
          return o || (o = new Rn2()), f2 || Mt2(n2) ? yu(n2, t, e, r, s, o) : kc(n2, t, l, e, r, s, o);
        if (!(e & It2)) {
          var A2 = _2 && W2.call(n2, "__wrapped__"), E2 = m2 && W2.call(t, "__wrapped__");
          if (A2 || E2) {
            var b2 = A2 ? n2.value() : n2, y2 = E2 ? t.value() : t;
            return o || (o = new Rn2()), s(b2, y2, e, r, o);
          }
        }
        return w2 ? (o || (o = new Rn2()), jc(n2, t, e, r, s, o)) : false;
      }
      function yc(n2) {
        return K2(n2) && tn(n2) == yn;
      }
      function Vr(n2, t, e, r) {
        var s = e.length, o = s, f2 = !r;
        if (n2 == null)
          return !o;
        for (n2 = M2(n2); s--; ) {
          var c = e[s];
          if (f2 && c[2] ? c[1] !== n2[c[0]] : !(c[0] in n2))
            return false;
        }
        for (; ++s < o; ) {
          c = e[s];
          var l = c[0], v2 = n2[l], _2 = c[1];
          if (f2 && c[2]) {
            if (v2 === i && !(l in n2))
              return false;
          } else {
            var m2 = new Rn2();
            if (r)
              var w2 = r(v2, _2, l, n2, t, m2);
            if (!(w2 === i ? ae2(_2, v2, It2 | de2, r, m2) : w2))
              return false;
          }
        }
        return true;
      }
      function Js2(n2) {
        if (!z(n2) || oh(n2))
          return false;
        var t = Xn2(n2) ? yf : go;
        return t.test(mt2(n2));
      }
      function Sc(n2) {
        return K2(n2) && en(n2) == Jt;
      }
      function Oc(n2) {
        return K2(n2) && tn(n2) == Sn;
      }
      function Rc(n2) {
        return K2(n2) && sr2(n2.length) && !!B[en(n2)];
      }
      function Xs2(n2) {
        return typeof n2 == "function" ? n2 : n2 == null ? fn : typeof n2 == "object" ? O2(n2) ? ks2(n2[0], n2[1]) : Vs2(n2) : _a(n2);
      }
      function kr(n2) {
        if (!ce2(n2))
          return Lf(n2);
        var t = [];
        for (var e in M2(n2))
          W2.call(n2, e) && e != "constructor" && t.push(e);
        return t;
      }
      function bc(n2) {
        if (!z(n2))
          return lh(n2);
        var t = ce2(n2), e = [];
        for (var r in n2)
          r == "constructor" && (t || !W2.call(n2, r)) || e.push(r);
        return e;
      }
      function jr(n2, t) {
        return n2 < t;
      }
      function Qs2(n2, t) {
        var e = -1, r = an2(n2) ? d2(n2.length) : [];
        return rt2(n2, function(s, o, f2) {
          r[++e] = t(s, o, f2);
        }), r;
      }
      function Vs2(n2) {
        var t = di(n2);
        return t.length == 1 && t[0][2] ? Tu(t[0][0], t[0][1]) : function(e) {
          return e === n2 || Vr(e, n2, t);
        };
      }
      function ks2(n2, t) {
        return vi(n2) && bu(t) ? Tu(Wn(n2), t) : function(e) {
          var r = yi(e, n2);
          return r === i && r === t ? Si(e, n2) : ae2(t, r, It2 | de2);
        };
      }
      function Ge2(n2, t, e, r, s) {
        n2 !== t && Zr(t, function(o, f2) {
          if (s || (s = new Rn2()), z(o))
            Tc(n2, t, f2, e, Ge2, r, s);
          else {
            var c = r ? r(mi(n2, f2), o, f2 + "", n2, t, s) : i;
            c === i && (c = o), Kr(n2, f2, c);
          }
        }, on);
      }
      function Tc(n2, t, e, r, s, o, f2) {
        var c = mi(n2, e), l = mi(t, e), v2 = f2.get(l);
        if (v2) {
          Kr(n2, e, v2);
          return;
        }
        var _2 = o ? o(c, l, e + "", n2, t, f2) : i, m2 = _2 === i;
        if (m2) {
          var w2 = O2(l), A2 = !w2 && at2(l), E2 = !w2 && !A2 && Mt2(l);
          _2 = l, w2 || A2 || E2 ? O2(c) ? _2 = c : Y2(c) ? _2 = un(c) : A2 ? (m2 = false, _2 = cu(l, true)) : E2 ? (m2 = false, _2 = hu(l, true)) : _2 = [] : le2(l) || wt2(l) ? (_2 = c, wt2(c) ? _2 = aa(c) : (!z(c) || Xn2(c)) && (_2 = Ru(l))) : m2 = false;
        }
        m2 && (f2.set(l, _2), s(_2, l, r, o, f2), f2.delete(l)), Kr(n2, e, _2);
      }
      function js2(n2, t) {
        var e = n2.length;
        if (e)
          return t += t < 0 ? e : 0, Jn(t, e) ? n2[t] : i;
      }
      function nu(n2, t, e) {
        t.length ? t = G2(t, function(o) {
          return O2(o) ? function(f2) {
            return vt2(f2, o.length === 1 ? o[0] : o);
          } : o;
        }) : t = [fn];
        var r = -1;
        t = G2(t, hn(x()));
        var s = Qs2(n2, function(o, f2, c) {
          var l = G2(t, function(v2) {
            return v2(o);
          });
          return { criteria: l, index: ++r, value: o };
        });
        return rf(s, function(o, f2) {
          return zc(o, f2, e);
        });
      }
      function Lc(n2, t) {
        return tu(n2, t, function(e, r) {
          return Si(n2, r);
        });
      }
      function tu(n2, t, e) {
        for (var r = -1, s = t.length, o = {}; ++r < s; ) {
          var f2 = t[r], c = vt2(n2, f2);
          e(c, f2) && oe2(o, st2(f2, n2), c);
        }
        return o;
      }
      function Dc(n2) {
        return function(t) {
          return vt2(t, n2);
        };
      }
      function ni(n2, t, e, r) {
        var s = r ? ef : Rt2, o = -1, f2 = t.length, c = n2;
        for (n2 === t && (t = un(t)), e && (c = G2(n2, hn(e))); ++o < f2; )
          for (var l = 0, v2 = t[o], _2 = e ? e(v2) : v2; (l = s(c, _2, l, r)) > -1; )
            c !== n2 && De.call(c, l, 1), De.call(n2, l, 1);
        return n2;
      }
      function eu(n2, t) {
        for (var e = n2 ? t.length : 0, r = e - 1; e--; ) {
          var s = t[e];
          if (e == r || s !== o) {
            var o = s;
            Jn(s) ? De.call(n2, s, 1) : ii(n2, s);
          }
        }
        return n2;
      }
      function ti(n2, t) {
        return n2 + $e2($s2() * (t - n2 + 1));
      }
      function Nc(n2, t, e, r) {
        for (var s = -1, o = Q2(He2((t - n2) / (e || 1)), 0), f2 = d2(o); o--; )
          f2[r ? o : ++s] = n2, n2 += e;
        return f2;
      }
      function ei(n2, t) {
        var e = "";
        if (!n2 || t < 1 || t > kn)
          return e;
        do
          t % 2 && (e += n2), t = $e2(t / 2), t && (n2 += n2);
        while (t);
        return e;
      }
      function T(n2, t) {
        return wi(Lu(n2, t, fn), n2 + "");
      }
      function Hc(n2) {
        return Fs2(qt(n2));
      }
      function $c(n2, t) {
        var e = qt(n2);
        return je2(e, gt2(t, 0, e.length));
      }
      function oe2(n2, t, e, r) {
        if (!z(n2))
          return n2;
        t = st2(t, n2);
        for (var s = -1, o = t.length, f2 = o - 1, c = n2; c != null && ++s < o; ) {
          var l = Wn(t[s]), v2 = e;
          if (l === "__proto__" || l === "constructor" || l === "prototype")
            return n2;
          if (s != f2) {
            var _2 = c[l];
            v2 = r ? r(_2, l, c) : i, v2 === i && (v2 = z(_2) ? _2 : Jn(t[s + 1]) ? [] : {});
          }
          ie2(c, l, v2), c = c[l];
        }
        return n2;
      }
      var ru = Ue2 ? function(n2, t) {
        return Ue2.set(n2, t), n2;
      } : fn, Uc = Ne2 ? function(n2, t) {
        return Ne2(n2, "toString", { configurable: true, enumerable: false, value: Ri(t), writable: true });
      } : fn;
      function Wc(n2) {
        return je2(qt(n2));
      }
      function Cn2(n2, t, e) {
        var r = -1, s = n2.length;
        t < 0 && (t = -t > s ? 0 : s + t), e = e > s ? s : e, e < 0 && (e += s), s = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o = d2(s); ++r < s; )
          o[r] = n2[r + t];
        return o;
      }
      function Fc(n2, t) {
        var e;
        return rt2(n2, function(r, s, o) {
          return e = t(r, s, o), !e;
        }), !!e;
      }
      function ze2(n2, t, e) {
        var r = 0, s = n2 == null ? r : n2.length;
        if (typeof t == "number" && t === t && s <= Fa) {
          for (; r < s; ) {
            var o = r + s >>> 1, f2 = n2[o];
            f2 !== null && !pn(f2) && (e ? f2 <= t : f2 < t) ? r = o + 1 : s = o;
          }
          return s;
        }
        return ri(n2, t, fn, e);
      }
      function ri(n2, t, e, r) {
        var s = 0, o = n2 == null ? 0 : n2.length;
        if (o === 0)
          return 0;
        t = e(t);
        for (var f2 = t !== t, c = t === null, l = pn(t), v2 = t === i; s < o; ) {
          var _2 = $e2((s + o) / 2), m2 = e(n2[_2]), w2 = m2 !== i, A2 = m2 === null, E2 = m2 === m2, b2 = pn(m2);
          if (f2)
            var y2 = r || E2;
          else
            v2 ? y2 = E2 && (r || w2) : c ? y2 = E2 && w2 && (r || !A2) : l ? y2 = E2 && w2 && !A2 && (r || !b2) : A2 || b2 ? y2 = false : y2 = r ? m2 <= t : m2 < t;
          y2 ? s = _2 + 1 : o = _2;
        }
        return nn(o, Wa);
      }
      function iu(n2, t) {
        for (var e = -1, r = n2.length, s = 0, o = []; ++e < r; ) {
          var f2 = n2[e], c = t ? t(f2) : f2;
          if (!e || !bn(c, l)) {
            var l = c;
            o[s++] = f2 === 0 ? 0 : f2;
          }
        }
        return o;
      }
      function su(n2) {
        return typeof n2 == "number" ? n2 : pn(n2) ? ge2 : +n2;
      }
      function ln(n2) {
        if (typeof n2 == "string")
          return n2;
        if (O2(n2))
          return G2(n2, ln) + "";
        if (pn(n2))
          return Us2 ? Us2.call(n2) : "";
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ct2 ? "-0" : t;
      }
      function it2(n2, t, e) {
        var r = -1, s = Ie, o = n2.length, f2 = true, c = [], l = c;
        if (e)
          f2 = false, s = Lr;
        else if (o >= I2) {
          var v2 = t ? null : Qc(n2);
          if (v2)
            return Ee(v2);
          f2 = false, s = kt2, l = new dt2();
        } else
          l = t ? [] : c;
        n:
          for (; ++r < o; ) {
            var _2 = n2[r], m2 = t ? t(_2) : _2;
            if (_2 = e || _2 !== 0 ? _2 : 0, f2 && m2 === m2) {
              for (var w2 = l.length; w2--; )
                if (l[w2] === m2)
                  continue n;
              t && l.push(m2), c.push(_2);
            } else
              s(l, m2, e) || (l !== c && l.push(m2), c.push(_2));
          }
        return c;
      }
      function ii(n2, t) {
        return t = st2(t, n2), n2 = Du(n2, t), n2 == null || delete n2[Wn(In(t))];
      }
      function uu(n2, t, e, r) {
        return oe2(n2, t, e(vt2(n2, t)), r);
      }
      function Ke2(n2, t, e, r) {
        for (var s = n2.length, o = r ? s : -1; (r ? o-- : ++o < s) && t(n2[o], o, n2); )
          ;
        return e ? Cn2(n2, r ? 0 : o, r ? o + 1 : s) : Cn2(n2, r ? o + 1 : 0, r ? s : o);
      }
      function au(n2, t) {
        var e = n2;
        return e instanceof N2 && (e = e.value()), Dr2(t, function(r, s) {
          return s.func.apply(s.thisArg, nt2([r], s.args));
        }, e);
      }
      function si(n2, t, e) {
        var r = n2.length;
        if (r < 2)
          return r ? it2(n2[0]) : [];
        for (var s = -1, o = d2(r); ++s < r; )
          for (var f2 = n2[s], c = -1; ++c < r; )
            c != s && (o[s] = se(o[s] || f2, n2[c], t, e));
        return it2(j2(o, 1), t, e);
      }
      function ou(n2, t, e) {
        for (var r = -1, s = n2.length, o = t.length, f2 = {}; ++r < s; ) {
          var c = r < o ? t[r] : i;
          e(f2, n2[r], c);
        }
        return f2;
      }
      function ui(n2) {
        return Y2(n2) ? n2 : [];
      }
      function ai(n2) {
        return typeof n2 == "function" ? n2 : fn;
      }
      function st2(n2, t) {
        return O2(n2) ? n2 : vi(n2, t) ? [n2] : Uu(U2(n2));
      }
      var Mc = T;
      function ut2(n2, t, e) {
        var r = n2.length;
        return e = e === i ? r : e, !t && e >= r ? n2 : Cn2(n2, t, e);
      }
      var fu = Sf || function(n2) {
        return k.clearTimeout(n2);
      };
      function cu(n2, t) {
        if (t)
          return n2.slice();
        var e = n2.length, r = Ts2 ? Ts2(e) : new n2.constructor(e);
        return n2.copy(r), r;
      }
      function oi(n2) {
        var t = new n2.constructor(n2.byteLength);
        return new Te(t).set(new Te(n2)), t;
      }
      function qc(n2, t) {
        var e = t ? oi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.byteLength);
      }
      function Bc(n2) {
        var t = new n2.constructor(n2.source, Zi2.exec(n2));
        return t.lastIndex = n2.lastIndex, t;
      }
      function Gc(n2) {
        return re2 ? M2(re2.call(n2)) : {};
      }
      function hu(n2, t) {
        var e = t ? oi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.length);
      }
      function lu(n2, t) {
        if (n2 !== t) {
          var e = n2 !== i, r = n2 === null, s = n2 === n2, o = pn(n2), f2 = t !== i, c = t === null, l = t === t, v2 = pn(t);
          if (!c && !v2 && !o && n2 > t || o && f2 && l && !c && !v2 || r && f2 && l || !e && l || !s)
            return 1;
          if (!r && !o && !v2 && n2 < t || v2 && e && s && !r && !o || c && e && s || !f2 && s || !l)
            return -1;
        }
        return 0;
      }
      function zc(n2, t, e) {
        for (var r = -1, s = n2.criteria, o = t.criteria, f2 = s.length, c = e.length; ++r < f2; ) {
          var l = lu(s[r], o[r]);
          if (l) {
            if (r >= c)
              return l;
            var v2 = e[r];
            return l * (v2 == "desc" ? -1 : 1);
          }
        }
        return n2.index - t.index;
      }
      function pu(n2, t, e, r) {
        for (var s = -1, o = n2.length, f2 = e.length, c = -1, l = t.length, v2 = Q2(o - f2, 0), _2 = d2(l + v2), m2 = !r; ++c < l; )
          _2[c] = t[c];
        for (; ++s < f2; )
          (m2 || s < o) && (_2[e[s]] = n2[s]);
        for (; v2--; )
          _2[c++] = n2[s++];
        return _2;
      }
      function du(n2, t, e, r) {
        for (var s = -1, o = n2.length, f2 = -1, c = e.length, l = -1, v2 = t.length, _2 = Q2(o - c, 0), m2 = d2(_2 + v2), w2 = !r; ++s < _2; )
          m2[s] = n2[s];
        for (var A2 = s; ++l < v2; )
          m2[A2 + l] = t[l];
        for (; ++f2 < c; )
          (w2 || s < o) && (m2[A2 + e[f2]] = n2[s++]);
        return m2;
      }
      function un(n2, t) {
        var e = -1, r = n2.length;
        for (t || (t = d2(r)); ++e < r; )
          t[e] = n2[e];
        return t;
      }
      function Un2(n2, t, e, r) {
        var s = !e;
        e || (e = {});
        for (var o = -1, f2 = t.length; ++o < f2; ) {
          var c = t[o], l = r ? r(e[c], n2[c], c, e, n2) : i;
          l === i && (l = n2[c]), s ? Kn(e, c, l) : ie2(e, c, l);
        }
        return e;
      }
      function Kc(n2, t) {
        return Un2(n2, gi(n2), t);
      }
      function Yc(n2, t) {
        return Un2(n2, Su(n2), t);
      }
      function Ye2(n2, t) {
        return function(e, r) {
          var s = O2(e) ? Qo : dc, o = t ? t() : {};
          return s(e, n2, x(r, 2), o);
        };
      }
      function Ut2(n2) {
        return T(function(t, e) {
          var r = -1, s = e.length, o = s > 1 ? e[s - 1] : i, f2 = s > 2 ? e[2] : i;
          for (o = n2.length > 3 && typeof o == "function" ? (s--, o) : i, f2 && rn(e[0], e[1], f2) && (o = s < 3 ? i : o, s = 1), t = M2(t); ++r < s; ) {
            var c = e[r];
            c && n2(t, c, r, o);
          }
          return t;
        });
      }
      function gu(n2, t) {
        return function(e, r) {
          if (e == null)
            return e;
          if (!an2(e))
            return n2(e, r);
          for (var s = e.length, o = t ? s : -1, f2 = M2(e); (t ? o-- : ++o < s) && r(f2[o], o, f2) !== false; )
            ;
          return e;
        };
      }
      function vu(n2) {
        return function(t, e, r) {
          for (var s = -1, o = M2(t), f2 = r(t), c = f2.length; c--; ) {
            var l = f2[n2 ? c : ++s];
            if (e(o[l], l, o) === false)
              break;
          }
          return t;
        };
      }
      function Zc(n2, t, e) {
        var r = t & vn, s = fe(n2);
        function o() {
          var f2 = this && this !== k && this instanceof o ? s : n2;
          return f2.apply(r ? e : this, arguments);
        }
        return o;
      }
      function _u(n2) {
        return function(t) {
          t = U2(t);
          var e = bt2(t) ? On2(t) : i, r = e ? e[0] : t.charAt(0), s = e ? ut2(e, 1).join("") : t.slice(1);
          return r[n2]() + s;
        };
      }
      function Wt(n2) {
        return function(t) {
          return Dr2(ga(da(t).replace($o, "")), n2, "");
        };
      }
      function fe(n2) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n2();
            case 1:
              return new n2(t[0]);
            case 2:
              return new n2(t[0], t[1]);
            case 3:
              return new n2(t[0], t[1], t[2]);
            case 4:
              return new n2(t[0], t[1], t[2], t[3]);
            case 5:
              return new n2(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = $t2(n2.prototype), r = n2.apply(e, t);
          return z(r) ? r : e;
        };
      }
      function Jc(n2, t, e) {
        var r = fe(n2);
        function s() {
          for (var o = arguments.length, f2 = d2(o), c = o, l = Ft2(s); c--; )
            f2[c] = arguments[c];
          var v2 = o < 3 && f2[0] !== l && f2[o - 1] !== l ? [] : tt2(f2, l);
          if (o -= v2.length, o < e)
            return Cu(n2, t, Ze2, s.placeholder, i, f2, v2, i, i, e - o);
          var _2 = this && this !== k && this instanceof s ? r : n2;
          return cn2(_2, this, f2);
        }
        return s;
      }
      function mu(n2) {
        return function(t, e, r) {
          var s = M2(t);
          if (!an2(t)) {
            var o = x(e, 3);
            t = V2(t), e = function(c) {
              return o(s[c], c, s);
            };
          }
          var f2 = n2(t, e, r);
          return f2 > -1 ? s[o ? t[f2] : f2] : i;
        };
      }
      function wu(n2) {
        return Zn(function(t) {
          var e = t.length, r = e, s = Pn.prototype.thru;
          for (n2 && t.reverse(); r--; ) {
            var o = t[r];
            if (typeof o != "function")
              throw new wn(F2);
            if (s && !f2 && Ve2(o) == "wrapper")
              var f2 = new Pn([], true);
          }
          for (r = f2 ? r : e; ++r < e; ) {
            o = t[r];
            var c = Ve2(o), l = c == "wrapper" ? pi(o) : i;
            l && _i(l[0]) && l[1] == (qn2 | Dn2 | Nn | zt2) && !l[4].length && l[9] == 1 ? f2 = f2[Ve2(l[0])].apply(f2, l[3]) : f2 = o.length == 1 && _i(o) ? f2[c]() : f2.thru(o);
          }
          return function() {
            var v2 = arguments, _2 = v2[0];
            if (f2 && v2.length == 1 && O2(_2))
              return f2.plant(_2).value();
            for (var m2 = 0, w2 = e ? t[m2].apply(this, v2) : _2; ++m2 < e; )
              w2 = t[m2].call(this, w2);
            return w2;
          };
        });
      }
      function Ze2(n2, t, e, r, s, o, f2, c, l, v2) {
        var _2 = t & qn2, m2 = t & vn, w2 = t & ft2, A2 = t & (Dn2 | xt2), E2 = t & pr2, b2 = w2 ? i : fe(n2);
        function y2() {
          for (var L2 = arguments.length, H2 = d2(L2), dn = L2; dn--; )
            H2[dn] = arguments[dn];
          if (A2)
            var sn2 = Ft2(y2), gn = uf(H2, sn2);
          if (r && (H2 = pu(H2, r, s, A2)), o && (H2 = du(H2, o, f2, A2)), L2 -= gn, A2 && L2 < v2) {
            var Z2 = tt2(H2, sn2);
            return Cu(n2, t, Ze2, y2.placeholder, e, H2, Z2, c, l, v2 - L2);
          }
          var Tn = m2 ? e : this, Vn2 = w2 ? Tn[n2] : n2;
          return L2 = H2.length, c ? H2 = dh(H2, c) : E2 && L2 > 1 && H2.reverse(), _2 && l < L2 && (H2.length = l), this && this !== k && this instanceof y2 && (Vn2 = b2 || fe(Vn2)), Vn2.apply(Tn, H2);
        }
        return y2;
      }
      function Pu(n2, t) {
        return function(e, r) {
          return Cc(e, n2, t(r), {});
        };
      }
      function Je2(n2, t) {
        return function(e, r) {
          var s;
          if (e === i && r === i)
            return t;
          if (e !== i && (s = e), r !== i) {
            if (s === i)
              return r;
            typeof e == "string" || typeof r == "string" ? (e = ln(e), r = ln(r)) : (e = su(e), r = su(r)), s = n2(e, r);
          }
          return s;
        };
      }
      function fi(n2) {
        return Zn(function(t) {
          return t = G2(t, hn(x())), T(function(e) {
            var r = this;
            return n2(t, function(s) {
              return cn2(s, r, e);
            });
          });
        });
      }
      function Xe2(n2, t) {
        t = t === i ? " " : ln(t);
        var e = t.length;
        if (e < 2)
          return e ? ei(t, n2) : t;
        var r = ei(t, He2(n2 / Tt2(t)));
        return bt2(t) ? ut2(On2(r), 0, n2).join("") : r.slice(0, n2);
      }
      function Xc(n2, t, e, r) {
        var s = t & vn, o = fe(n2);
        function f2() {
          for (var c = -1, l = arguments.length, v2 = -1, _2 = r.length, m2 = d2(_2 + l), w2 = this && this !== k && this instanceof f2 ? o : n2; ++v2 < _2; )
            m2[v2] = r[v2];
          for (; l--; )
            m2[v2++] = arguments[++c];
          return cn2(w2, s ? e : this, m2);
        }
        return f2;
      }
      function Au(n2) {
        return function(t, e, r) {
          return r && typeof r != "number" && rn(t, e, r) && (e = r = i), t = Qn(t), e === i ? (e = t, t = 0) : e = Qn(e), r = r === i ? t < e ? 1 : -1 : Qn(r), Nc(t, e, r, n2);
        };
      }
      function Qe2(n2) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = xn(t), e = xn(e)), n2(t, e);
        };
      }
      function Cu(n2, t, e, r, s, o, f2, c, l, v2) {
        var _2 = t & Dn2, m2 = _2 ? f2 : i, w2 = _2 ? i : f2, A2 = _2 ? o : i, E2 = _2 ? i : o;
        t |= _2 ? Nn : Et2, t &= ~(_2 ? Et2 : Nn), t & Mi2 || (t &= ~(vn | ft2));
        var b2 = [n2, t, s, A2, m2, E2, w2, c, l, v2], y2 = e.apply(i, b2);
        return _i(n2) && Nu(y2, b2), y2.placeholder = r, Hu(y2, n2, t);
      }
      function ci(n2) {
        var t = X2[n2];
        return function(e, r) {
          if (e = xn(e), r = r == null ? 0 : nn(R(r), 292), r && Hs2(e)) {
            var s = (U2(e) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + r));
            return s = (U2(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - r));
          }
          return t(e);
        };
      }
      var Qc = Nt2 && 1 / Ee(new Nt2([, -0]))[1] == ct2 ? function(n2) {
        return new Nt2(n2);
      } : Li2;
      function Iu(n2) {
        return function(t) {
          var e = tn(t);
          return e == yn ? Mr(t) : e == Sn ? pf(t) : sf(t, n2(t));
        };
      }
      function Yn2(n2, t, e, r, s, o, f2, c) {
        var l = t & ft2;
        if (!l && typeof n2 != "function")
          throw new wn(F2);
        var v2 = r ? r.length : 0;
        if (v2 || (t &= ~(Nn | Et2), r = s = i), f2 = f2 === i ? f2 : Q2(R(f2), 0), c = c === i ? c : R(c), v2 -= s ? s.length : 0, t & Et2) {
          var _2 = r, m2 = s;
          r = s = i;
        }
        var w2 = l ? i : pi(n2), A2 = [n2, t, e, r, s, _2, m2, o, f2, c];
        if (w2 && hh(A2, w2), n2 = A2[0], t = A2[1], e = A2[2], r = A2[3], s = A2[4], c = A2[9] = A2[9] === i ? l ? 0 : n2.length : Q2(A2[9] - v2, 0), !c && t & (Dn2 | xt2) && (t &= ~(Dn2 | xt2)), !t || t == vn)
          var E2 = Zc(n2, t, e);
        else
          t == Dn2 || t == xt2 ? E2 = Jc(n2, t, c) : (t == Nn || t == (vn | Nn)) && !s.length ? E2 = Xc(n2, t, e, r) : E2 = Ze2.apply(i, A2);
        var b2 = w2 ? ru : Nu;
        return Hu(b2(E2, A2), n2, t);
      }
      function xu(n2, t, e, r) {
        return n2 === i || bn(n2, Dt2[e]) && !W2.call(r, e) ? t : n2;
      }
      function Eu(n2, t, e, r, s, o) {
        return z(n2) && z(t) && (o.set(t, n2), Ge2(n2, t, i, Eu, o), o.delete(t)), n2;
      }
      function Vc(n2) {
        return le2(n2) ? i : n2;
      }
      function yu(n2, t, e, r, s, o) {
        var f2 = e & It2, c = n2.length, l = t.length;
        if (c != l && !(f2 && l > c))
          return false;
        var v2 = o.get(n2), _2 = o.get(t);
        if (v2 && _2)
          return v2 == t && _2 == n2;
        var m2 = -1, w2 = true, A2 = e & de2 ? new dt2() : i;
        for (o.set(n2, t), o.set(t, n2); ++m2 < c; ) {
          var E2 = n2[m2], b2 = t[m2];
          if (r)
            var y2 = f2 ? r(b2, E2, m2, t, n2, o) : r(E2, b2, m2, n2, t, o);
          if (y2 !== i) {
            if (y2)
              continue;
            w2 = false;
            break;
          }
          if (A2) {
            if (!Nr(t, function(L2, H2) {
              if (!kt2(A2, H2) && (E2 === L2 || s(E2, L2, e, r, o)))
                return A2.push(H2);
            })) {
              w2 = false;
              break;
            }
          } else if (!(E2 === b2 || s(E2, b2, e, r, o))) {
            w2 = false;
            break;
          }
        }
        return o.delete(n2), o.delete(t), w2;
      }
      function kc(n2, t, e, r, s, o, f2) {
        switch (e) {
          case St2:
            if (n2.byteLength != t.byteLength || n2.byteOffset != t.byteOffset)
              return false;
            n2 = n2.buffer, t = t.buffer;
          case Vt2:
            return !(n2.byteLength != t.byteLength || !o(new Te(n2), new Te(t)));
          case Kt2:
          case Yt:
          case Zt:
            return bn(+n2, +t);
          case _e:
            return n2.name == t.name && n2.message == t.message;
          case Jt:
          case Xt:
            return n2 == t + "";
          case yn:
            var c = Mr;
          case Sn:
            var l = r & It2;
            if (c || (c = Ee), n2.size != t.size && !l)
              return false;
            var v2 = f2.get(n2);
            if (v2)
              return v2 == t;
            r |= de2, f2.set(n2, t);
            var _2 = yu(c(n2), c(t), r, s, o, f2);
            return f2.delete(n2), _2;
          case we:
            if (re2)
              return re2.call(n2) == re2.call(t);
        }
        return false;
      }
      function jc(n2, t, e, r, s, o) {
        var f2 = e & It2, c = hi(n2), l = c.length, v2 = hi(t), _2 = v2.length;
        if (l != _2 && !f2)
          return false;
        for (var m2 = l; m2--; ) {
          var w2 = c[m2];
          if (!(f2 ? w2 in t : W2.call(t, w2)))
            return false;
        }
        var A2 = o.get(n2), E2 = o.get(t);
        if (A2 && E2)
          return A2 == t && E2 == n2;
        var b2 = true;
        o.set(n2, t), o.set(t, n2);
        for (var y2 = f2; ++m2 < l; ) {
          w2 = c[m2];
          var L2 = n2[w2], H2 = t[w2];
          if (r)
            var dn = f2 ? r(H2, L2, w2, t, n2, o) : r(L2, H2, w2, n2, t, o);
          if (!(dn === i ? L2 === H2 || s(L2, H2, e, r, o) : dn)) {
            b2 = false;
            break;
          }
          y2 || (y2 = w2 == "constructor");
        }
        if (b2 && !y2) {
          var sn2 = n2.constructor, gn = t.constructor;
          sn2 != gn && "constructor" in n2 && "constructor" in t && !(typeof sn2 == "function" && sn2 instanceof sn2 && typeof gn == "function" && gn instanceof gn) && (b2 = false);
        }
        return o.delete(n2), o.delete(t), b2;
      }
      function Zn(n2) {
        return wi(Lu(n2, i, qu), n2 + "");
      }
      function hi(n2) {
        return Ys2(n2, V2, gi);
      }
      function li(n2) {
        return Ys2(n2, on, Su);
      }
      var pi = Ue2 ? function(n2) {
        return Ue2.get(n2);
      } : Li2;
      function Ve2(n2) {
        for (var t = n2.name + "", e = Ht[t], r = W2.call(Ht, t) ? e.length : 0; r--; ) {
          var s = e[r], o = s.func;
          if (o == null || o == n2)
            return s.name;
        }
        return t;
      }
      function Ft2(n2) {
        var t = W2.call(a2, "placeholder") ? a2 : n2;
        return t.placeholder;
      }
      function x() {
        var n2 = a2.iteratee || bi;
        return n2 = n2 === bi ? Xs2 : n2, arguments.length ? n2(arguments[0], arguments[1]) : n2;
      }
      function ke2(n2, t) {
        var e = n2.__data__;
        return ah(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function di(n2) {
        for (var t = V2(n2), e = t.length; e--; ) {
          var r = t[e], s = n2[r];
          t[e] = [r, s, bu(s)];
        }
        return t;
      }
      function _t2(n2, t) {
        var e = cf(n2, t);
        return Js2(e) ? e : i;
      }
      function nh(n2) {
        var t = W2.call(n2, lt2), e = n2[lt2];
        try {
          n2[lt2] = i;
          var r = true;
        } catch {
        }
        var s = Re.call(n2);
        return r && (t ? n2[lt2] = e : delete n2[lt2]), s;
      }
      var gi = Br ? function(n2) {
        return n2 == null ? [] : (n2 = M2(n2), jn2(Br(n2), function(t) {
          return Ds2.call(n2, t);
        }));
      } : Di, Su = Br ? function(n2) {
        for (var t = []; n2; )
          nt2(t, gi(n2)), n2 = Le2(n2);
        return t;
      } : Di, tn = en;
      (Gr && tn(new Gr(new ArrayBuffer(1))) != St2 || ne2 && tn(new ne2()) != yn || zr && tn(zr.resolve()) != Gi2 || Nt2 && tn(new Nt2()) != Sn || te2 && tn(new te2()) != Qt) && (tn = function(n2) {
        var t = en(n2), e = t == Bn2 ? n2.constructor : i, r = e ? mt2(e) : "";
        if (r)
          switch (r) {
            case $f:
              return St2;
            case Uf:
              return yn;
            case Wf:
              return Gi2;
            case Ff:
              return Sn;
            case Mf:
              return Qt;
          }
        return t;
      });
      function th(n2, t, e) {
        for (var r = -1, s = e.length; ++r < s; ) {
          var o = e[r], f2 = o.size;
          switch (o.type) {
            case "drop":
              n2 += f2;
              break;
            case "dropRight":
              t -= f2;
              break;
            case "take":
              t = nn(t, n2 + f2);
              break;
            case "takeRight":
              n2 = Q2(n2, t - f2);
              break;
          }
        }
        return { start: n2, end: t };
      }
      function eh(n2) {
        var t = n2.match(uo);
        return t ? t[1].split(ao) : [];
      }
      function Ou(n2, t, e) {
        t = st2(t, n2);
        for (var r = -1, s = t.length, o = false; ++r < s; ) {
          var f2 = Wn(t[r]);
          if (!(o = n2 != null && e(n2, f2)))
            break;
          n2 = n2[f2];
        }
        return o || ++r != s ? o : (s = n2 == null ? 0 : n2.length, !!s && sr2(s) && Jn(f2, s) && (O2(n2) || wt2(n2)));
      }
      function rh(n2) {
        var t = n2.length, e = new n2.constructor(t);
        return t && typeof n2[0] == "string" && W2.call(n2, "index") && (e.index = n2.index, e.input = n2.input), e;
      }
      function Ru(n2) {
        return typeof n2.constructor == "function" && !ce2(n2) ? $t2(Le2(n2)) : {};
      }
      function ih(n2, t, e) {
        var r = n2.constructor;
        switch (t) {
          case Vt2:
            return oi(n2);
          case Kt2:
          case Yt:
            return new r(+n2);
          case St2:
            return qc(n2, e);
          case dr2:
          case gr2:
          case vr2:
          case _r2:
          case mr2:
          case wr2:
          case Pr:
          case Ar:
          case Cr2:
            return hu(n2, e);
          case yn:
            return new r();
          case Zt:
          case Xt:
            return new r(n2);
          case Jt:
            return Bc(n2);
          case Sn:
            return new r();
          case we:
            return Gc(n2);
        }
      }
      function sh(n2, t) {
        var e = t.length;
        if (!e)
          return n2;
        var r = e - 1;
        return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n2.replace(so, `{
/* [wrapped with ` + t + `] */
`);
      }
      function uh(n2) {
        return O2(n2) || wt2(n2) || !!(Ns2 && n2 && n2[Ns2]);
      }
      function Jn(n2, t) {
        var e = typeof n2;
        return t = t ?? kn, !!t && (e == "number" || e != "symbol" && _o.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < t;
      }
      function rn(n2, t, e) {
        if (!z(e))
          return false;
        var r = typeof t;
        return (r == "number" ? an2(e) && Jn(t, e.length) : r == "string" && t in e) ? bn(e[t], n2) : false;
      }
      function vi(n2, t) {
        if (O2(n2))
          return false;
        var e = typeof n2;
        return e == "number" || e == "symbol" || e == "boolean" || n2 == null || pn(n2) ? true : to.test(n2) || !no.test(n2) || t != null && n2 in M2(t);
      }
      function ah(n2) {
        var t = typeof n2;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n2 !== "__proto__" : n2 === null;
      }
      function _i(n2) {
        var t = Ve2(n2), e = a2[t];
        if (typeof e != "function" || !(t in N2.prototype))
          return false;
        if (n2 === e)
          return true;
        var r = pi(e);
        return !!r && n2 === r[0];
      }
      function oh(n2) {
        return !!bs2 && bs2 in n2;
      }
      var fh = Se ? Xn2 : Ni;
      function ce2(n2) {
        var t = n2 && n2.constructor, e = typeof t == "function" && t.prototype || Dt2;
        return n2 === e;
      }
      function bu(n2) {
        return n2 === n2 && !z(n2);
      }
      function Tu(n2, t) {
        return function(e) {
          return e == null ? false : e[n2] === t && (t !== i || n2 in M2(e));
        };
      }
      function ch(n2) {
        var t = rr2(n2, function(r) {
          return e.size === lr2 && e.clear(), r;
        }), e = t.cache;
        return t;
      }
      function hh(n2, t) {
        var e = n2[1], r = t[1], s = e | r, o = s < (vn | ft2 | qn2), f2 = r == qn2 && e == Dn2 || r == qn2 && e == zt2 && n2[7].length <= t[8] || r == (qn2 | zt2) && t[7].length <= t[8] && e == Dn2;
        if (!(o || f2))
          return n2;
        r & vn && (n2[2] = t[2], s |= e & vn ? 0 : Mi2);
        var c = t[3];
        if (c) {
          var l = n2[3];
          n2[3] = l ? pu(l, c, t[4]) : c, n2[4] = l ? tt2(n2[3], At2) : t[4];
        }
        return c = t[5], c && (l = n2[5], n2[5] = l ? du(l, c, t[6]) : c, n2[6] = l ? tt2(n2[5], At2) : t[6]), c = t[7], c && (n2[7] = c), r & qn2 && (n2[8] = n2[8] == null ? t[8] : nn(n2[8], t[8])), n2[9] == null && (n2[9] = t[9]), n2[0] = t[0], n2[1] = s, n2;
      }
      function lh(n2) {
        var t = [];
        if (n2 != null)
          for (var e in M2(n2))
            t.push(e);
        return t;
      }
      function ph(n2) {
        return Re.call(n2);
      }
      function Lu(n2, t, e) {
        return t = Q2(t === i ? n2.length - 1 : t, 0), function() {
          for (var r = arguments, s = -1, o = Q2(r.length - t, 0), f2 = d2(o); ++s < o; )
            f2[s] = r[t + s];
          s = -1;
          for (var c = d2(t + 1); ++s < t; )
            c[s] = r[s];
          return c[t] = e(f2), cn2(n2, this, c);
        };
      }
      function Du(n2, t) {
        return t.length < 2 ? n2 : vt2(n2, Cn2(t, 0, -1));
      }
      function dh(n2, t) {
        for (var e = n2.length, r = nn(t.length, e), s = un(n2); r--; ) {
          var o = t[r];
          n2[r] = Jn(o, e) ? s[o] : i;
        }
        return n2;
      }
      function mi(n2, t) {
        if (!(t === "constructor" && typeof n2[t] == "function") && t != "__proto__")
          return n2[t];
      }
      var Nu = $u(ru), he2 = Rf || function(n2, t) {
        return k.setTimeout(n2, t);
      }, wi = $u(Uc);
      function Hu(n2, t, e) {
        var r = t + "";
        return wi(n2, sh(r, gh(eh(r), e)));
      }
      function $u(n2) {
        var t = 0, e = 0;
        return function() {
          var r = Df(), s = Na - (r - e);
          if (e = r, s > 0) {
            if (++t >= Da)
              return arguments[0];
          } else
            t = 0;
          return n2.apply(i, arguments);
        };
      }
      function je2(n2, t) {
        var e = -1, r = n2.length, s = r - 1;
        for (t = t === i ? r : t; ++e < t; ) {
          var o = ti(e, s), f2 = n2[o];
          n2[o] = n2[e], n2[e] = f2;
        }
        return n2.length = t, n2;
      }
      var Uu = ch(function(n2) {
        var t = [];
        return n2.charCodeAt(0) === 46 && t.push(""), n2.replace(eo, function(e, r, s, o) {
          t.push(s ? o.replace(co, "$1") : r || e);
        }), t;
      });
      function Wn(n2) {
        if (typeof n2 == "string" || pn(n2))
          return n2;
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ct2 ? "-0" : t;
      }
      function mt2(n2) {
        if (n2 != null) {
          try {
            return Oe2.call(n2);
          } catch {
          }
          try {
            return n2 + "";
          } catch {
          }
        }
        return "";
      }
      function gh(n2, t) {
        return mn(Ma, function(e) {
          var r = "_." + e[0];
          t & e[1] && !Ie(n2, r) && n2.push(r);
        }), n2.sort();
      }
      function Wu(n2) {
        if (n2 instanceof N2)
          return n2.clone();
        var t = new Pn(n2.__wrapped__, n2.__chain__);
        return t.__actions__ = un(n2.__actions__), t.__index__ = n2.__index__, t.__values__ = n2.__values__, t;
      }
      function vh(n2, t, e) {
        (e ? rn(n2, t, e) : t === i) ? t = 1 : t = Q2(R(t), 0);
        var r = n2 == null ? 0 : n2.length;
        if (!r || t < 1)
          return [];
        for (var s = 0, o = 0, f2 = d2(He2(r / t)); s < r; )
          f2[o++] = Cn2(n2, s, s += t);
        return f2;
      }
      function _h(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r = 0, s = []; ++t < e; ) {
          var o = n2[t];
          o && (s[r++] = o);
        }
        return s;
      }
      function mh() {
        var n2 = arguments.length;
        if (!n2)
          return [];
        for (var t = d2(n2 - 1), e = arguments[0], r = n2; r--; )
          t[r - 1] = arguments[r];
        return nt2(O2(e) ? un(e) : [e], j2(t, 1));
      }
      var wh = T(function(n2, t) {
        return Y2(n2) ? se(n2, j2(t, 1, Y2, true)) : [];
      }), Ph = T(function(n2, t) {
        var e = In(t);
        return Y2(e) && (e = i), Y2(n2) ? se(n2, j2(t, 1, Y2, true), x(e, 2)) : [];
      }), Ah = T(function(n2, t) {
        var e = In(t);
        return Y2(e) && (e = i), Y2(n2) ? se(n2, j2(t, 1, Y2, true), i, e) : [];
      });
      function Ch(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i ? 1 : R(t), Cn2(n2, t < 0 ? 0 : t, r)) : [];
      }
      function Ih(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i ? 1 : R(t), t = r - t, Cn2(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function xh(n2, t) {
        return n2 && n2.length ? Ke2(n2, x(t, 3), true, true) : [];
      }
      function Eh(n2, t) {
        return n2 && n2.length ? Ke2(n2, x(t, 3), true) : [];
      }
      function yh(n2, t, e, r) {
        var s = n2 == null ? 0 : n2.length;
        return s ? (e && typeof e != "number" && rn(n2, t, e) && (e = 0, r = s), mc(n2, t, e, r)) : [];
      }
      function Fu(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = e == null ? 0 : R(e);
        return s < 0 && (s = Q2(r + s, 0)), xe2(n2, x(t, 3), s);
      }
      function Mu(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = r - 1;
        return e !== i && (s = R(e), s = e < 0 ? Q2(r + s, 0) : nn(s, r - 1)), xe2(n2, x(t, 3), s, true);
      }
      function qu(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, 1) : [];
      }
      function Sh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j2(n2, ct2) : [];
      }
      function Oh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        return e ? (t = t === i ? 1 : R(t), j2(n2, t)) : [];
      }
      function Rh(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r = {}; ++t < e; ) {
          var s = n2[t];
          r[s[0]] = s[1];
        }
        return r;
      }
      function Bu(n2) {
        return n2 && n2.length ? n2[0] : i;
      }
      function bh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = e == null ? 0 : R(e);
        return s < 0 && (s = Q2(r + s, 0)), Rt2(n2, t, s);
      }
      function Th(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn2(n2, 0, -1) : [];
      }
      var Lh = T(function(n2) {
        var t = G2(n2, ui);
        return t.length && t[0] === n2[0] ? Qr(t) : [];
      }), Dh = T(function(n2) {
        var t = In(n2), e = G2(n2, ui);
        return t === In(e) ? t = i : e.pop(), e.length && e[0] === n2[0] ? Qr(e, x(t, 2)) : [];
      }), Nh = T(function(n2) {
        var t = In(n2), e = G2(n2, ui);
        return t = typeof t == "function" ? t : i, t && e.pop(), e.length && e[0] === n2[0] ? Qr(e, i, t) : [];
      });
      function Hh(n2, t) {
        return n2 == null ? "" : Tf.call(n2, t);
      }
      function In(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? n2[t - 1] : i;
      }
      function $h(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = r;
        return e !== i && (s = R(e), s = s < 0 ? Q2(r + s, 0) : nn(s, r - 1)), t === t ? gf(n2, t, s) : xe2(n2, Cs2, s, true);
      }
      function Uh(n2, t) {
        return n2 && n2.length ? js2(n2, R(t)) : i;
      }
      var Wh = T(Gu);
      function Gu(n2, t) {
        return n2 && n2.length && t && t.length ? ni(n2, t) : n2;
      }
      function Fh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ni(n2, t, x(e, 2)) : n2;
      }
      function Mh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ni(n2, t, i, e) : n2;
      }
      var qh = Zn(function(n2, t) {
        var e = n2 == null ? 0 : n2.length, r = Yr(n2, t);
        return eu(n2, G2(t, function(s) {
          return Jn(s, e) ? +s : s;
        }).sort(lu)), r;
      });
      function Bh(n2, t) {
        var e = [];
        if (!(n2 && n2.length))
          return e;
        var r = -1, s = [], o = n2.length;
        for (t = x(t, 3); ++r < o; ) {
          var f2 = n2[r];
          t(f2, r, n2) && (e.push(f2), s.push(r));
        }
        return eu(n2, s), e;
      }
      function Pi(n2) {
        return n2 == null ? n2 : Hf.call(n2);
      }
      function Gh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (e && typeof e != "number" && rn(n2, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : R(t), e = e === i ? r : R(e)), Cn2(n2, t, e)) : [];
      }
      function zh(n2, t) {
        return ze2(n2, t);
      }
      function Kh(n2, t, e) {
        return ri(n2, t, x(e, 2));
      }
      function Yh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r = ze2(n2, t);
          if (r < e && bn(n2[r], t))
            return r;
        }
        return -1;
      }
      function Zh(n2, t) {
        return ze2(n2, t, true);
      }
      function Jh(n2, t, e) {
        return ri(n2, t, x(e, 2), true);
      }
      function Xh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r = ze2(n2, t, true) - 1;
          if (bn(n2[r], t))
            return r;
        }
        return -1;
      }
      function Qh(n2) {
        return n2 && n2.length ? iu(n2) : [];
      }
      function Vh(n2, t) {
        return n2 && n2.length ? iu(n2, x(t, 2)) : [];
      }
      function kh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn2(n2, 1, t) : [];
      }
      function jh(n2, t, e) {
        return n2 && n2.length ? (t = e || t === i ? 1 : R(t), Cn2(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function nl(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i ? 1 : R(t), t = r - t, Cn2(n2, t < 0 ? 0 : t, r)) : [];
      }
      function tl(n2, t) {
        return n2 && n2.length ? Ke2(n2, x(t, 3), false, true) : [];
      }
      function el(n2, t) {
        return n2 && n2.length ? Ke2(n2, x(t, 3)) : [];
      }
      var rl = T(function(n2) {
        return it2(j2(n2, 1, Y2, true));
      }), il = T(function(n2) {
        var t = In(n2);
        return Y2(t) && (t = i), it2(j2(n2, 1, Y2, true), x(t, 2));
      }), sl = T(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i, it2(j2(n2, 1, Y2, true), i, t);
      });
      function ul(n2) {
        return n2 && n2.length ? it2(n2) : [];
      }
      function al(n2, t) {
        return n2 && n2.length ? it2(n2, x(t, 2)) : [];
      }
      function ol(n2, t) {
        return t = typeof t == "function" ? t : i, n2 && n2.length ? it2(n2, i, t) : [];
      }
      function Ai(n2) {
        if (!(n2 && n2.length))
          return [];
        var t = 0;
        return n2 = jn2(n2, function(e) {
          if (Y2(e))
            return t = Q2(e.length, t), true;
        }), Wr(t, function(e) {
          return G2(n2, Hr(e));
        });
      }
      function zu(n2, t) {
        if (!(n2 && n2.length))
          return [];
        var e = Ai(n2);
        return t == null ? e : G2(e, function(r) {
          return cn2(t, i, r);
        });
      }
      var fl = T(function(n2, t) {
        return Y2(n2) ? se(n2, t) : [];
      }), cl = T(function(n2) {
        return si(jn2(n2, Y2));
      }), hl = T(function(n2) {
        var t = In(n2);
        return Y2(t) && (t = i), si(jn2(n2, Y2), x(t, 2));
      }), ll = T(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i, si(jn2(n2, Y2), i, t);
      }), pl = T(Ai);
      function dl(n2, t) {
        return ou(n2 || [], t || [], ie2);
      }
      function gl(n2, t) {
        return ou(n2 || [], t || [], oe2);
      }
      var vl = T(function(n2) {
        var t = n2.length, e = t > 1 ? n2[t - 1] : i;
        return e = typeof e == "function" ? (n2.pop(), e) : i, zu(n2, e);
      });
      function Ku(n2) {
        var t = a2(n2);
        return t.__chain__ = true, t;
      }
      function _l(n2, t) {
        return t(n2), n2;
      }
      function nr2(n2, t) {
        return t(n2);
      }
      var ml = Zn(function(n2) {
        var t = n2.length, e = t ? n2[0] : 0, r = this.__wrapped__, s = function(o) {
          return Yr(o, n2);
        };
        return t > 1 || this.__actions__.length || !(r instanceof N2) || !Jn(e) ? this.thru(s) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({ func: nr2, args: [s], thisArg: i }), new Pn(r, this.__chain__).thru(function(o) {
          return t && !o.length && o.push(i), o;
        }));
      });
      function wl() {
        return Ku(this);
      }
      function Pl() {
        return new Pn(this.value(), this.__chain__);
      }
      function Al() {
        this.__values__ === i && (this.__values__ = sa(this.value()));
        var n2 = this.__index__ >= this.__values__.length, t = n2 ? i : this.__values__[this.__index__++];
        return { done: n2, value: t };
      }
      function Cl() {
        return this;
      }
      function Il(n2) {
        for (var t, e = this; e instanceof Fe2; ) {
          var r = Wu(e);
          r.__index__ = 0, r.__values__ = i, t ? s.__wrapped__ = r : t = r;
          var s = r;
          e = e.__wrapped__;
        }
        return s.__wrapped__ = n2, t;
      }
      function xl() {
        var n2 = this.__wrapped__;
        if (n2 instanceof N2) {
          var t = n2;
          return this.__actions__.length && (t = new N2(this)), t = t.reverse(), t.__actions__.push({ func: nr2, args: [Pi], thisArg: i }), new Pn(t, this.__chain__);
        }
        return this.thru(Pi);
      }
      function El() {
        return au(this.__wrapped__, this.__actions__);
      }
      var yl = Ye2(function(n2, t, e) {
        W2.call(n2, e) ? ++n2[e] : Kn(n2, e, 1);
      });
      function Sl(n2, t, e) {
        var r = O2(n2) ? Ps2 : _c;
        return e && rn(n2, t, e) && (t = i), r(n2, x(t, 3));
      }
      function Ol(n2, t) {
        var e = O2(n2) ? jn2 : zs2;
        return e(n2, x(t, 3));
      }
      var Rl = mu(Fu), bl = mu(Mu);
      function Tl(n2, t) {
        return j2(tr2(n2, t), 1);
      }
      function Ll(n2, t) {
        return j2(tr2(n2, t), ct2);
      }
      function Dl(n2, t, e) {
        return e = e === i ? 1 : R(e), j2(tr2(n2, t), e);
      }
      function Yu(n2, t) {
        var e = O2(n2) ? mn : rt2;
        return e(n2, x(t, 3));
      }
      function Zu(n2, t) {
        var e = O2(n2) ? Vo : Gs2;
        return e(n2, x(t, 3));
      }
      var Nl = Ye2(function(n2, t, e) {
        W2.call(n2, e) ? n2[e].push(t) : Kn(n2, e, [t]);
      });
      function Hl(n2, t, e, r) {
        n2 = an2(n2) ? n2 : qt(n2), e = e && !r ? R(e) : 0;
        var s = n2.length;
        return e < 0 && (e = Q2(s + e, 0)), ur(n2) ? e <= s && n2.indexOf(t, e) > -1 : !!s && Rt2(n2, t, e) > -1;
      }
      var $l = T(function(n2, t, e) {
        var r = -1, s = typeof t == "function", o = an2(n2) ? d2(n2.length) : [];
        return rt2(n2, function(f2) {
          o[++r] = s ? cn2(t, f2, e) : ue2(f2, t, e);
        }), o;
      }), Ul = Ye2(function(n2, t, e) {
        Kn(n2, e, t);
      });
      function tr2(n2, t) {
        var e = O2(n2) ? G2 : Qs2;
        return e(n2, x(t, 3));
      }
      function Wl(n2, t, e, r) {
        return n2 == null ? [] : (O2(t) || (t = t == null ? [] : [t]), e = r ? i : e, O2(e) || (e = e == null ? [] : [e]), nu(n2, t, e));
      }
      var Fl = Ye2(function(n2, t, e) {
        n2[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Ml(n2, t, e) {
        var r = O2(n2) ? Dr2 : xs2, s = arguments.length < 3;
        return r(n2, x(t, 4), e, s, rt2);
      }
      function ql(n2, t, e) {
        var r = O2(n2) ? ko : xs2, s = arguments.length < 3;
        return r(n2, x(t, 4), e, s, Gs2);
      }
      function Bl(n2, t) {
        var e = O2(n2) ? jn2 : zs2;
        return e(n2, ir2(x(t, 3)));
      }
      function Gl(n2) {
        var t = O2(n2) ? Fs2 : Hc;
        return t(n2);
      }
      function zl(n2, t, e) {
        (e ? rn(n2, t, e) : t === i) ? t = 1 : t = R(t);
        var r = O2(n2) ? lc : $c;
        return r(n2, t);
      }
      function Kl(n2) {
        var t = O2(n2) ? pc : Wc;
        return t(n2);
      }
      function Yl(n2) {
        if (n2 == null)
          return 0;
        if (an2(n2))
          return ur(n2) ? Tt2(n2) : n2.length;
        var t = tn(n2);
        return t == yn || t == Sn ? n2.size : kr(n2).length;
      }
      function Zl(n2, t, e) {
        var r = O2(n2) ? Nr : Fc;
        return e && rn(n2, t, e) && (t = i), r(n2, x(t, 3));
      }
      var Jl = T(function(n2, t) {
        if (n2 == null)
          return [];
        var e = t.length;
        return e > 1 && rn(n2, t[0], t[1]) ? t = [] : e > 2 && rn(t[0], t[1], t[2]) && (t = [t[0]]), nu(n2, j2(t, 1), []);
      }), er2 = Of || function() {
        return k.Date.now();
      };
      function Xl(n2, t) {
        if (typeof t != "function")
          throw new wn(F2);
        return n2 = R(n2), function() {
          if (--n2 < 1)
            return t.apply(this, arguments);
        };
      }
      function Ju(n2, t, e) {
        return t = e ? i : t, t = n2 && t == null ? n2.length : t, Yn2(n2, qn2, i, i, i, i, t);
      }
      function Xu(n2, t) {
        var e;
        if (typeof t != "function")
          throw new wn(F2);
        return n2 = R(n2), function() {
          return --n2 > 0 && (e = t.apply(this, arguments)), n2 <= 1 && (t = i), e;
        };
      }
      var Ci = T(function(n2, t, e) {
        var r = vn;
        if (e.length) {
          var s = tt2(e, Ft2(Ci));
          r |= Nn;
        }
        return Yn2(n2, r, t, e, s);
      }), Qu = T(function(n2, t, e) {
        var r = vn | ft2;
        if (e.length) {
          var s = tt2(e, Ft2(Qu));
          r |= Nn;
        }
        return Yn2(t, r, n2, e, s);
      });
      function Vu(n2, t, e) {
        t = e ? i : t;
        var r = Yn2(n2, Dn2, i, i, i, i, i, t);
        return r.placeholder = Vu.placeholder, r;
      }
      function ku(n2, t, e) {
        t = e ? i : t;
        var r = Yn2(n2, xt2, i, i, i, i, i, t);
        return r.placeholder = ku.placeholder, r;
      }
      function ju(n2, t, e) {
        var r, s, o, f2, c, l, v2 = 0, _2 = false, m2 = false, w2 = true;
        if (typeof n2 != "function")
          throw new wn(F2);
        t = xn(t) || 0, z(e) && (_2 = !!e.leading, m2 = "maxWait" in e, o = m2 ? Q2(xn(e.maxWait) || 0, t) : o, w2 = "trailing" in e ? !!e.trailing : w2);
        function A2(Z2) {
          var Tn = r, Vn2 = s;
          return r = s = i, v2 = Z2, f2 = n2.apply(Vn2, Tn), f2;
        }
        function E2(Z2) {
          return v2 = Z2, c = he2(L2, t), _2 ? A2(Z2) : f2;
        }
        function b2(Z2) {
          var Tn = Z2 - l, Vn2 = Z2 - v2, ma = t - Tn;
          return m2 ? nn(ma, o - Vn2) : ma;
        }
        function y2(Z2) {
          var Tn = Z2 - l, Vn2 = Z2 - v2;
          return l === i || Tn >= t || Tn < 0 || m2 && Vn2 >= o;
        }
        function L2() {
          var Z2 = er2();
          if (y2(Z2))
            return H2(Z2);
          c = he2(L2, b2(Z2));
        }
        function H2(Z2) {
          return c = i, w2 && r ? A2(Z2) : (r = s = i, f2);
        }
        function dn() {
          c !== i && fu(c), v2 = 0, r = l = s = c = i;
        }
        function sn2() {
          return c === i ? f2 : H2(er2());
        }
        function gn() {
          var Z2 = er2(), Tn = y2(Z2);
          if (r = arguments, s = this, l = Z2, Tn) {
            if (c === i)
              return E2(l);
            if (m2)
              return fu(c), c = he2(L2, t), A2(l);
          }
          return c === i && (c = he2(L2, t)), f2;
        }
        return gn.cancel = dn, gn.flush = sn2, gn;
      }
      var Ql = T(function(n2, t) {
        return Bs2(n2, 1, t);
      }), Vl = T(function(n2, t, e) {
        return Bs2(n2, xn(t) || 0, e);
      });
      function kl(n2) {
        return Yn2(n2, pr2);
      }
      function rr2(n2, t) {
        if (typeof n2 != "function" || t != null && typeof t != "function")
          throw new wn(F2);
        var e = function() {
          var r = arguments, s = t ? t.apply(this, r) : r[0], o = e.cache;
          if (o.has(s))
            return o.get(s);
          var f2 = n2.apply(this, r);
          return e.cache = o.set(s, f2) || o, f2;
        };
        return e.cache = new (rr2.Cache || zn)(), e;
      }
      rr2.Cache = zn;
      function ir2(n2) {
        if (typeof n2 != "function")
          throw new wn(F2);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n2.call(this);
            case 1:
              return !n2.call(this, t[0]);
            case 2:
              return !n2.call(this, t[0], t[1]);
            case 3:
              return !n2.call(this, t[0], t[1], t[2]);
          }
          return !n2.apply(this, t);
        };
      }
      function jl(n2) {
        return Xu(2, n2);
      }
      var np = Mc(function(n2, t) {
        t = t.length == 1 && O2(t[0]) ? G2(t[0], hn(x())) : G2(j2(t, 1), hn(x()));
        var e = t.length;
        return T(function(r) {
          for (var s = -1, o = nn(r.length, e); ++s < o; )
            r[s] = t[s].call(this, r[s]);
          return cn2(n2, this, r);
        });
      }), Ii = T(function(n2, t) {
        var e = tt2(t, Ft2(Ii));
        return Yn2(n2, Nn, i, t, e);
      }), na = T(function(n2, t) {
        var e = tt2(t, Ft2(na));
        return Yn2(n2, Et2, i, t, e);
      }), tp = Zn(function(n2, t) {
        return Yn2(n2, zt2, i, i, i, t);
      });
      function ep(n2, t) {
        if (typeof n2 != "function")
          throw new wn(F2);
        return t = t === i ? t : R(t), T(n2, t);
      }
      function rp(n2, t) {
        if (typeof n2 != "function")
          throw new wn(F2);
        return t = t == null ? 0 : Q2(R(t), 0), T(function(e) {
          var r = e[t], s = ut2(e, 0, t);
          return r && nt2(s, r), cn2(n2, this, s);
        });
      }
      function ip(n2, t, e) {
        var r = true, s = true;
        if (typeof n2 != "function")
          throw new wn(F2);
        return z(e) && (r = "leading" in e ? !!e.leading : r, s = "trailing" in e ? !!e.trailing : s), ju(n2, t, { leading: r, maxWait: t, trailing: s });
      }
      function sp(n2) {
        return Ju(n2, 1);
      }
      function up(n2, t) {
        return Ii(ai(t), n2);
      }
      function ap() {
        if (!arguments.length)
          return [];
        var n2 = arguments[0];
        return O2(n2) ? n2 : [n2];
      }
      function op(n2) {
        return An2(n2, Ct2);
      }
      function fp(n2, t) {
        return t = typeof t == "function" ? t : i, An2(n2, Ct2, t);
      }
      function cp(n2) {
        return An2(n2, Ln | Ct2);
      }
      function hp(n2, t) {
        return t = typeof t == "function" ? t : i, An2(n2, Ln | Ct2, t);
      }
      function lp(n2, t) {
        return t == null || qs2(n2, t, V2(t));
      }
      function bn(n2, t) {
        return n2 === t || n2 !== n2 && t !== t;
      }
      var pp = Qe2(Xr), dp = Qe2(function(n2, t) {
        return n2 >= t;
      }), wt2 = Zs2(function() {
        return arguments;
      }()) ? Zs2 : function(n2) {
        return K2(n2) && W2.call(n2, "callee") && !Ds2.call(n2, "callee");
      }, O2 = d2.isArray, gp = ds2 ? hn(ds2) : Ic;
      function an2(n2) {
        return n2 != null && sr2(n2.length) && !Xn2(n2);
      }
      function Y2(n2) {
        return K2(n2) && an2(n2);
      }
      function vp(n2) {
        return n2 === true || n2 === false || K2(n2) && en(n2) == Kt2;
      }
      var at2 = bf || Ni, _p = gs2 ? hn(gs2) : xc;
      function mp(n2) {
        return K2(n2) && n2.nodeType === 1 && !le2(n2);
      }
      function wp(n2) {
        if (n2 == null)
          return true;
        if (an2(n2) && (O2(n2) || typeof n2 == "string" || typeof n2.splice == "function" || at2(n2) || Mt2(n2) || wt2(n2)))
          return !n2.length;
        var t = tn(n2);
        if (t == yn || t == Sn)
          return !n2.size;
        if (ce2(n2))
          return !kr(n2).length;
        for (var e in n2)
          if (W2.call(n2, e))
            return false;
        return true;
      }
      function Pp(n2, t) {
        return ae2(n2, t);
      }
      function Ap(n2, t, e) {
        e = typeof e == "function" ? e : i;
        var r = e ? e(n2, t) : i;
        return r === i ? ae2(n2, t, i, e) : !!r;
      }
      function xi(n2) {
        if (!K2(n2))
          return false;
        var t = en(n2);
        return t == _e || t == Ba || typeof n2.message == "string" && typeof n2.name == "string" && !le2(n2);
      }
      function Cp(n2) {
        return typeof n2 == "number" && Hs2(n2);
      }
      function Xn2(n2) {
        if (!z(n2))
          return false;
        var t = en(n2);
        return t == me || t == Bi2 || t == qa || t == za;
      }
      function ta(n2) {
        return typeof n2 == "number" && n2 == R(n2);
      }
      function sr2(n2) {
        return typeof n2 == "number" && n2 > -1 && n2 % 1 == 0 && n2 <= kn;
      }
      function z(n2) {
        var t = typeof n2;
        return n2 != null && (t == "object" || t == "function");
      }
      function K2(n2) {
        return n2 != null && typeof n2 == "object";
      }
      var ea = vs2 ? hn(vs2) : yc;
      function Ip(n2, t) {
        return n2 === t || Vr(n2, t, di(t));
      }
      function xp(n2, t, e) {
        return e = typeof e == "function" ? e : i, Vr(n2, t, di(t), e);
      }
      function Ep(n2) {
        return ra(n2) && n2 != +n2;
      }
      function yp(n2) {
        if (fh(n2))
          throw new S2(D2);
        return Js2(n2);
      }
      function Sp(n2) {
        return n2 === null;
      }
      function Op(n2) {
        return n2 == null;
      }
      function ra(n2) {
        return typeof n2 == "number" || K2(n2) && en(n2) == Zt;
      }
      function le2(n2) {
        if (!K2(n2) || en(n2) != Bn2)
          return false;
        var t = Le2(n2);
        if (t === null)
          return true;
        var e = W2.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && Oe2.call(e) == xf;
      }
      var Ei = _s2 ? hn(_s2) : Sc;
      function Rp(n2) {
        return ta(n2) && n2 >= -kn && n2 <= kn;
      }
      var ia = ms2 ? hn(ms2) : Oc;
      function ur(n2) {
        return typeof n2 == "string" || !O2(n2) && K2(n2) && en(n2) == Xt;
      }
      function pn(n2) {
        return typeof n2 == "symbol" || K2(n2) && en(n2) == we;
      }
      var Mt2 = ws2 ? hn(ws2) : Rc;
      function bp(n2) {
        return n2 === i;
      }
      function Tp(n2) {
        return K2(n2) && tn(n2) == Qt;
      }
      function Lp(n2) {
        return K2(n2) && en(n2) == Ya;
      }
      var Dp = Qe2(jr), Np = Qe2(function(n2, t) {
        return n2 <= t;
      });
      function sa(n2) {
        if (!n2)
          return [];
        if (an2(n2))
          return ur(n2) ? On2(n2) : un(n2);
        if (jt2 && n2[jt2])
          return lf(n2[jt2]());
        var t = tn(n2), e = t == yn ? Mr : t == Sn ? Ee : qt;
        return e(n2);
      }
      function Qn(n2) {
        if (!n2)
          return n2 === 0 ? n2 : 0;
        if (n2 = xn(n2), n2 === ct2 || n2 === -ct2) {
          var t = n2 < 0 ? -1 : 1;
          return t * Ua;
        }
        return n2 === n2 ? n2 : 0;
      }
      function R(n2) {
        var t = Qn(n2), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function ua(n2) {
        return n2 ? gt2(R(n2), 0, Hn) : 0;
      }
      function xn(n2) {
        if (typeof n2 == "number")
          return n2;
        if (pn(n2))
          return ge2;
        if (z(n2)) {
          var t = typeof n2.valueOf == "function" ? n2.valueOf() : n2;
          n2 = z(t) ? t + "" : t;
        }
        if (typeof n2 != "string")
          return n2 === 0 ? n2 : +n2;
        n2 = Es2(n2);
        var e = po.test(n2);
        return e || vo.test(n2) ? Jo(n2.slice(2), e ? 2 : 8) : lo.test(n2) ? ge2 : +n2;
      }
      function aa(n2) {
        return Un2(n2, on(n2));
      }
      function Hp(n2) {
        return n2 ? gt2(R(n2), -kn, kn) : n2 === 0 ? n2 : 0;
      }
      function U2(n2) {
        return n2 == null ? "" : ln(n2);
      }
      var $p = Ut2(function(n2, t) {
        if (ce2(t) || an2(t)) {
          Un2(t, V2(t), n2);
          return;
        }
        for (var e in t)
          W2.call(t, e) && ie2(n2, e, t[e]);
      }), oa = Ut2(function(n2, t) {
        Un2(t, on(t), n2);
      }), ar2 = Ut2(function(n2, t, e, r) {
        Un2(t, on(t), n2, r);
      }), Up = Ut2(function(n2, t, e, r) {
        Un2(t, V2(t), n2, r);
      }), Wp = Zn(Yr);
      function Fp(n2, t) {
        var e = $t2(n2);
        return t == null ? e : Ms2(e, t);
      }
      var Mp = T(function(n2, t) {
        n2 = M2(n2);
        var e = -1, r = t.length, s = r > 2 ? t[2] : i;
        for (s && rn(t[0], t[1], s) && (r = 1); ++e < r; )
          for (var o = t[e], f2 = on(o), c = -1, l = f2.length; ++c < l; ) {
            var v2 = f2[c], _2 = n2[v2];
            (_2 === i || bn(_2, Dt2[v2]) && !W2.call(n2, v2)) && (n2[v2] = o[v2]);
          }
        return n2;
      }), qp = T(function(n2) {
        return n2.push(i, Eu), cn2(fa, i, n2);
      });
      function Bp(n2, t) {
        return As2(n2, x(t, 3), $n2);
      }
      function Gp(n2, t) {
        return As2(n2, x(t, 3), Jr);
      }
      function zp(n2, t) {
        return n2 == null ? n2 : Zr(n2, x(t, 3), on);
      }
      function Kp(n2, t) {
        return n2 == null ? n2 : Ks2(n2, x(t, 3), on);
      }
      function Yp(n2, t) {
        return n2 && $n2(n2, x(t, 3));
      }
      function Zp(n2, t) {
        return n2 && Jr(n2, x(t, 3));
      }
      function Jp(n2) {
        return n2 == null ? [] : Be2(n2, V2(n2));
      }
      function Xp(n2) {
        return n2 == null ? [] : Be2(n2, on(n2));
      }
      function yi(n2, t, e) {
        var r = n2 == null ? i : vt2(n2, t);
        return r === i ? e : r;
      }
      function Qp(n2, t) {
        return n2 != null && Ou(n2, t, wc);
      }
      function Si(n2, t) {
        return n2 != null && Ou(n2, t, Pc);
      }
      var Vp = Pu(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Re.call(t)), n2[t] = e;
      }, Ri(fn)), kp = Pu(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Re.call(t)), W2.call(n2, t) ? n2[t].push(e) : n2[t] = [e];
      }, x), jp = T(ue2);
      function V2(n2) {
        return an2(n2) ? Ws2(n2) : kr(n2);
      }
      function on(n2) {
        return an2(n2) ? Ws2(n2, true) : bc(n2);
      }
      function nd(n2, t) {
        var e = {};
        return t = x(t, 3), $n2(n2, function(r, s, o) {
          Kn(e, t(r, s, o), r);
        }), e;
      }
      function td(n2, t) {
        var e = {};
        return t = x(t, 3), $n2(n2, function(r, s, o) {
          Kn(e, s, t(r, s, o));
        }), e;
      }
      var ed = Ut2(function(n2, t, e) {
        Ge2(n2, t, e);
      }), fa = Ut2(function(n2, t, e, r) {
        Ge2(n2, t, e, r);
      }), rd = Zn(function(n2, t) {
        var e = {};
        if (n2 == null)
          return e;
        var r = false;
        t = G2(t, function(o) {
          return o = st2(o, n2), r || (r = o.length > 1), o;
        }), Un2(n2, li(n2), e), r && (e = An2(e, Ln | Mn | Ct2, Vc));
        for (var s = t.length; s--; )
          ii(e, t[s]);
        return e;
      });
      function id(n2, t) {
        return ca(n2, ir2(x(t)));
      }
      var sd = Zn(function(n2, t) {
        return n2 == null ? {} : Lc(n2, t);
      });
      function ca(n2, t) {
        if (n2 == null)
          return {};
        var e = G2(li(n2), function(r) {
          return [r];
        });
        return t = x(t), tu(n2, e, function(r, s) {
          return t(r, s[0]);
        });
      }
      function ud(n2, t, e) {
        t = st2(t, n2);
        var r = -1, s = t.length;
        for (s || (s = 1, n2 = i); ++r < s; ) {
          var o = n2 == null ? i : n2[Wn(t[r])];
          o === i && (r = s, o = e), n2 = Xn2(o) ? o.call(n2) : o;
        }
        return n2;
      }
      function ad(n2, t, e) {
        return n2 == null ? n2 : oe2(n2, t, e);
      }
      function od(n2, t, e, r) {
        return r = typeof r == "function" ? r : i, n2 == null ? n2 : oe2(n2, t, e, r);
      }
      var ha = Iu(V2), la = Iu(on);
      function fd(n2, t, e) {
        var r = O2(n2), s = r || at2(n2) || Mt2(n2);
        if (t = x(t, 4), e == null) {
          var o = n2 && n2.constructor;
          s ? e = r ? new o() : [] : z(n2) ? e = Xn2(o) ? $t2(Le2(n2)) : {} : e = {};
        }
        return (s ? mn : $n2)(n2, function(f2, c, l) {
          return t(e, f2, c, l);
        }), e;
      }
      function cd(n2, t) {
        return n2 == null ? true : ii(n2, t);
      }
      function hd(n2, t, e) {
        return n2 == null ? n2 : uu(n2, t, ai(e));
      }
      function ld(n2, t, e, r) {
        return r = typeof r == "function" ? r : i, n2 == null ? n2 : uu(n2, t, ai(e), r);
      }
      function qt(n2) {
        return n2 == null ? [] : Fr(n2, V2(n2));
      }
      function pd(n2) {
        return n2 == null ? [] : Fr(n2, on(n2));
      }
      function dd(n2, t, e) {
        return e === i && (e = t, t = i), e !== i && (e = xn(e), e = e === e ? e : 0), t !== i && (t = xn(t), t = t === t ? t : 0), gt2(xn(n2), t, e);
      }
      function gd(n2, t, e) {
        return t = Qn(t), e === i ? (e = t, t = 0) : e = Qn(e), n2 = xn(n2), Ac(n2, t, e);
      }
      function vd(n2, t, e) {
        if (e && typeof e != "boolean" && rn(n2, t, e) && (t = e = i), e === i && (typeof t == "boolean" ? (e = t, t = i) : typeof n2 == "boolean" && (e = n2, n2 = i)), n2 === i && t === i ? (n2 = 0, t = 1) : (n2 = Qn(n2), t === i ? (t = n2, n2 = 0) : t = Qn(t)), n2 > t) {
          var r = n2;
          n2 = t, t = r;
        }
        if (e || n2 % 1 || t % 1) {
          var s = $s2();
          return nn(n2 + s * (t - n2 + Zo("1e-" + ((s + "").length - 1))), t);
        }
        return ti(n2, t);
      }
      var _d = Wt(function(n2, t, e) {
        return t = t.toLowerCase(), n2 + (e ? pa(t) : t);
      });
      function pa(n2) {
        return Oi(U2(n2).toLowerCase());
      }
      function da(n2) {
        return n2 = U2(n2), n2 && n2.replace(mo, af).replace(Uo, "");
      }
      function md(n2, t, e) {
        n2 = U2(n2), t = ln(t);
        var r = n2.length;
        e = e === i ? r : gt2(R(e), 0, r);
        var s = e;
        return e -= t.length, e >= 0 && n2.slice(e, s) == t;
      }
      function wd(n2) {
        return n2 = U2(n2), n2 && Va.test(n2) ? n2.replace(Ki2, of) : n2;
      }
      function Pd(n2) {
        return n2 = U2(n2), n2 && ro.test(n2) ? n2.replace(Ir2, "\\$&") : n2;
      }
      var Ad = Wt(function(n2, t, e) {
        return n2 + (e ? "-" : "") + t.toLowerCase();
      }), Cd = Wt(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toLowerCase();
      }), Id = _u("toLowerCase");
      function xd(n2, t, e) {
        n2 = U2(n2), t = R(t);
        var r = t ? Tt2(n2) : 0;
        if (!t || r >= t)
          return n2;
        var s = (t - r) / 2;
        return Xe2($e2(s), e) + n2 + Xe2(He2(s), e);
      }
      function Ed(n2, t, e) {
        n2 = U2(n2), t = R(t);
        var r = t ? Tt2(n2) : 0;
        return t && r < t ? n2 + Xe2(t - r, e) : n2;
      }
      function yd(n2, t, e) {
        n2 = U2(n2), t = R(t);
        var r = t ? Tt2(n2) : 0;
        return t && r < t ? Xe2(t - r, e) + n2 : n2;
      }
      function Sd(n2, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), Nf(U2(n2).replace(xr, ""), t || 0);
      }
      function Od(n2, t, e) {
        return (e ? rn(n2, t, e) : t === i) ? t = 1 : t = R(t), ei(U2(n2), t);
      }
      function Rd() {
        var n2 = arguments, t = U2(n2[0]);
        return n2.length < 3 ? t : t.replace(n2[1], n2[2]);
      }
      var bd = Wt(function(n2, t, e) {
        return n2 + (e ? "_" : "") + t.toLowerCase();
      });
      function Td(n2, t, e) {
        return e && typeof e != "number" && rn(n2, t, e) && (t = e = i), e = e === i ? Hn : e >>> 0, e ? (n2 = U2(n2), n2 && (typeof t == "string" || t != null && !Ei(t)) && (t = ln(t), !t && bt2(n2)) ? ut2(On2(n2), 0, e) : n2.split(t, e)) : [];
      }
      var Ld = Wt(function(n2, t, e) {
        return n2 + (e ? " " : "") + Oi(t);
      });
      function Dd(n2, t, e) {
        return n2 = U2(n2), e = e == null ? 0 : gt2(R(e), 0, n2.length), t = ln(t), n2.slice(e, e + t.length) == t;
      }
      function Nd(n2, t, e) {
        var r = a2.templateSettings;
        e && rn(n2, t, e) && (t = i), n2 = U2(n2), t = ar2({}, t, r, xu);
        var s = ar2({}, t.imports, r.imports, xu), o = V2(s), f2 = Fr(s, o), c, l, v2 = 0, _2 = t.interpolate || Pe2, m2 = "__p += '", w2 = qr((t.escape || Pe2).source + "|" + _2.source + "|" + (_2 === Yi2 ? ho : Pe2).source + "|" + (t.evaluate || Pe2).source + "|$", "g"), A2 = "//# sourceURL=" + (W2.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Bo + "]") + `
`;
        n2.replace(w2, function(y2, L2, H2, dn, sn2, gn) {
          return H2 || (H2 = dn), m2 += n2.slice(v2, gn).replace(wo, ff), L2 && (c = true, m2 += `' +
__e(` + L2 + `) +
'`), sn2 && (l = true, m2 += `';
` + sn2 + `;
__p += '`), H2 && (m2 += `' +
((__t = (` + H2 + `)) == null ? '' : __t) +
'`), v2 = gn + y2.length, y2;
        }), m2 += `';
`;
        var E2 = W2.call(t, "variable") && t.variable;
        if (!E2)
          m2 = `with (obj) {
` + m2 + `
}
`;
        else if (fo.test(E2))
          throw new S2(Fn2);
        m2 = (l ? m2.replace(Za, "") : m2).replace(Ja, "$1").replace(Xa, "$1;"), m2 = "function(" + (E2 || "obj") + `) {
` + (E2 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m2 + `return __p
}`;
        var b2 = va(function() {
          return $2(o, A2 + "return " + m2).apply(i, f2);
        });
        if (b2.source = m2, xi(b2))
          throw b2;
        return b2;
      }
      function Hd(n2) {
        return U2(n2).toLowerCase();
      }
      function $d(n2) {
        return U2(n2).toUpperCase();
      }
      function Ud(n2, t, e) {
        if (n2 = U2(n2), n2 && (e || t === i))
          return Es2(n2);
        if (!n2 || !(t = ln(t)))
          return n2;
        var r = On2(n2), s = On2(t), o = ys2(r, s), f2 = Ss2(r, s) + 1;
        return ut2(r, o, f2).join("");
      }
      function Wd(n2, t, e) {
        if (n2 = U2(n2), n2 && (e || t === i))
          return n2.slice(0, Rs2(n2) + 1);
        if (!n2 || !(t = ln(t)))
          return n2;
        var r = On2(n2), s = Ss2(r, On2(t)) + 1;
        return ut2(r, 0, s).join("");
      }
      function Fd(n2, t, e) {
        if (n2 = U2(n2), n2 && (e || t === i))
          return n2.replace(xr, "");
        if (!n2 || !(t = ln(t)))
          return n2;
        var r = On2(n2), s = ys2(r, On2(t));
        return ut2(r, s).join("");
      }
      function Md(n2, t) {
        var e = Ta, r = La;
        if (z(t)) {
          var s = "separator" in t ? t.separator : s;
          e = "length" in t ? R(t.length) : e, r = "omission" in t ? ln(t.omission) : r;
        }
        n2 = U2(n2);
        var o = n2.length;
        if (bt2(n2)) {
          var f2 = On2(n2);
          o = f2.length;
        }
        if (e >= o)
          return n2;
        var c = e - Tt2(r);
        if (c < 1)
          return r;
        var l = f2 ? ut2(f2, 0, c).join("") : n2.slice(0, c);
        if (s === i)
          return l + r;
        if (f2 && (c += l.length - c), Ei(s)) {
          if (n2.slice(c).search(s)) {
            var v2, _2 = l;
            for (s.global || (s = qr(s.source, U2(Zi2.exec(s)) + "g")), s.lastIndex = 0; v2 = s.exec(_2); )
              var m2 = v2.index;
            l = l.slice(0, m2 === i ? c : m2);
          }
        } else if (n2.indexOf(ln(s), c) != c) {
          var w2 = l.lastIndexOf(s);
          w2 > -1 && (l = l.slice(0, w2));
        }
        return l + r;
      }
      function qd(n2) {
        return n2 = U2(n2), n2 && Qa.test(n2) ? n2.replace(zi, vf) : n2;
      }
      var Bd = Wt(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toUpperCase();
      }), Oi = _u("toUpperCase");
      function ga(n2, t, e) {
        return n2 = U2(n2), t = e ? i : t, t === i ? hf(n2) ? wf(n2) : tf(n2) : n2.match(t) || [];
      }
      var va = T(function(n2, t) {
        try {
          return cn2(n2, i, t);
        } catch (e) {
          return xi(e) ? e : new S2(e);
        }
      }), Gd = Zn(function(n2, t) {
        return mn(t, function(e) {
          e = Wn(e), Kn(n2, e, Ci(n2[e], n2));
        }), n2;
      });
      function zd(n2) {
        var t = n2 == null ? 0 : n2.length, e = x();
        return n2 = t ? G2(n2, function(r) {
          if (typeof r[1] != "function")
            throw new wn(F2);
          return [e(r[0]), r[1]];
        }) : [], T(function(r) {
          for (var s = -1; ++s < t; ) {
            var o = n2[s];
            if (cn2(o[0], this, r))
              return cn2(o[1], this, r);
          }
        });
      }
      function Kd(n2) {
        return vc(An2(n2, Ln));
      }
      function Ri(n2) {
        return function() {
          return n2;
        };
      }
      function Yd(n2, t) {
        return n2 == null || n2 !== n2 ? t : n2;
      }
      var Zd = wu(), Jd = wu(true);
      function fn(n2) {
        return n2;
      }
      function bi(n2) {
        return Xs2(typeof n2 == "function" ? n2 : An2(n2, Ln));
      }
      function Xd(n2) {
        return Vs2(An2(n2, Ln));
      }
      function Qd(n2, t) {
        return ks2(n2, An2(t, Ln));
      }
      var Vd = T(function(n2, t) {
        return function(e) {
          return ue2(e, n2, t);
        };
      }), kd = T(function(n2, t) {
        return function(e) {
          return ue2(n2, e, t);
        };
      });
      function Ti(n2, t, e) {
        var r = V2(t), s = Be2(t, r);
        e == null && !(z(t) && (s.length || !r.length)) && (e = t, t = n2, n2 = this, s = Be2(t, V2(t)));
        var o = !(z(e) && "chain" in e) || !!e.chain, f2 = Xn2(n2);
        return mn(s, function(c) {
          var l = t[c];
          n2[c] = l, f2 && (n2.prototype[c] = function() {
            var v2 = this.__chain__;
            if (o || v2) {
              var _2 = n2(this.__wrapped__), m2 = _2.__actions__ = un(this.__actions__);
              return m2.push({ func: l, args: arguments, thisArg: n2 }), _2.__chain__ = v2, _2;
            }
            return l.apply(n2, nt2([this.value()], arguments));
          });
        }), n2;
      }
      function jd() {
        return k._ === this && (k._ = Ef), this;
      }
      function Li2() {
      }
      function ng(n2) {
        return n2 = R(n2), T(function(t) {
          return js2(t, n2);
        });
      }
      var tg = fi(G2), eg = fi(Ps2), rg = fi(Nr);
      function _a(n2) {
        return vi(n2) ? Hr(Wn(n2)) : Dc(n2);
      }
      function ig(n2) {
        return function(t) {
          return n2 == null ? i : vt2(n2, t);
        };
      }
      var sg = Au(), ug = Au(true);
      function Di() {
        return [];
      }
      function Ni() {
        return false;
      }
      function ag() {
        return {};
      }
      function og() {
        return "";
      }
      function fg() {
        return true;
      }
      function cg(n2, t) {
        if (n2 = R(n2), n2 < 1 || n2 > kn)
          return [];
        var e = Hn, r = nn(n2, Hn);
        t = x(t), n2 -= Hn;
        for (var s = Wr(r, t); ++e < n2; )
          t(e);
        return s;
      }
      function hg(n2) {
        return O2(n2) ? G2(n2, Wn) : pn(n2) ? [n2] : un(Uu(U2(n2)));
      }
      function lg(n2) {
        var t = ++If;
        return U2(n2) + t;
      }
      var pg = Je2(function(n2, t) {
        return n2 + t;
      }, 0), dg = ci("ceil"), gg = Je2(function(n2, t) {
        return n2 / t;
      }, 1), vg = ci("floor");
      function _g(n2) {
        return n2 && n2.length ? qe2(n2, fn, Xr) : i;
      }
      function mg(n2, t) {
        return n2 && n2.length ? qe2(n2, x(t, 2), Xr) : i;
      }
      function wg(n2) {
        return Is2(n2, fn);
      }
      function Pg(n2, t) {
        return Is2(n2, x(t, 2));
      }
      function Ag(n2) {
        return n2 && n2.length ? qe2(n2, fn, jr) : i;
      }
      function Cg(n2, t) {
        return n2 && n2.length ? qe2(n2, x(t, 2), jr) : i;
      }
      var Ig = Je2(function(n2, t) {
        return n2 * t;
      }, 1), xg = ci("round"), Eg = Je2(function(n2, t) {
        return n2 - t;
      }, 0);
      function yg(n2) {
        return n2 && n2.length ? Ur(n2, fn) : 0;
      }
      function Sg(n2, t) {
        return n2 && n2.length ? Ur(n2, x(t, 2)) : 0;
      }
      return a2.after = Xl, a2.ary = Ju, a2.assign = $p, a2.assignIn = oa, a2.assignInWith = ar2, a2.assignWith = Up, a2.at = Wp, a2.before = Xu, a2.bind = Ci, a2.bindAll = Gd, a2.bindKey = Qu, a2.castArray = ap, a2.chain = Ku, a2.chunk = vh, a2.compact = _h, a2.concat = mh, a2.cond = zd, a2.conforms = Kd, a2.constant = Ri, a2.countBy = yl, a2.create = Fp, a2.curry = Vu, a2.curryRight = ku, a2.debounce = ju, a2.defaults = Mp, a2.defaultsDeep = qp, a2.defer = Ql, a2.delay = Vl, a2.difference = wh, a2.differenceBy = Ph, a2.differenceWith = Ah, a2.drop = Ch, a2.dropRight = Ih, a2.dropRightWhile = xh, a2.dropWhile = Eh, a2.fill = yh, a2.filter = Ol, a2.flatMap = Tl, a2.flatMapDeep = Ll, a2.flatMapDepth = Dl, a2.flatten = qu, a2.flattenDeep = Sh, a2.flattenDepth = Oh, a2.flip = kl, a2.flow = Zd, a2.flowRight = Jd, a2.fromPairs = Rh, a2.functions = Jp, a2.functionsIn = Xp, a2.groupBy = Nl, a2.initial = Th, a2.intersection = Lh, a2.intersectionBy = Dh, a2.intersectionWith = Nh, a2.invert = Vp, a2.invertBy = kp, a2.invokeMap = $l, a2.iteratee = bi, a2.keyBy = Ul, a2.keys = V2, a2.keysIn = on, a2.map = tr2, a2.mapKeys = nd, a2.mapValues = td, a2.matches = Xd, a2.matchesProperty = Qd, a2.memoize = rr2, a2.merge = ed, a2.mergeWith = fa, a2.method = Vd, a2.methodOf = kd, a2.mixin = Ti, a2.negate = ir2, a2.nthArg = ng, a2.omit = rd, a2.omitBy = id, a2.once = jl, a2.orderBy = Wl, a2.over = tg, a2.overArgs = np, a2.overEvery = eg, a2.overSome = rg, a2.partial = Ii, a2.partialRight = na, a2.partition = Fl, a2.pick = sd, a2.pickBy = ca, a2.property = _a, a2.propertyOf = ig, a2.pull = Wh, a2.pullAll = Gu, a2.pullAllBy = Fh, a2.pullAllWith = Mh, a2.pullAt = qh, a2.range = sg, a2.rangeRight = ug, a2.rearg = tp, a2.reject = Bl, a2.remove = Bh, a2.rest = ep, a2.reverse = Pi, a2.sampleSize = zl, a2.set = ad, a2.setWith = od, a2.shuffle = Kl, a2.slice = Gh, a2.sortBy = Jl, a2.sortedUniq = Qh, a2.sortedUniqBy = Vh, a2.split = Td, a2.spread = rp, a2.tail = kh, a2.take = jh, a2.takeRight = nl, a2.takeRightWhile = tl, a2.takeWhile = el, a2.tap = _l, a2.throttle = ip, a2.thru = nr2, a2.toArray = sa, a2.toPairs = ha, a2.toPairsIn = la, a2.toPath = hg, a2.toPlainObject = aa, a2.transform = fd, a2.unary = sp, a2.union = rl, a2.unionBy = il, a2.unionWith = sl, a2.uniq = ul, a2.uniqBy = al, a2.uniqWith = ol, a2.unset = cd, a2.unzip = Ai, a2.unzipWith = zu, a2.update = hd, a2.updateWith = ld, a2.values = qt, a2.valuesIn = pd, a2.without = fl, a2.words = ga, a2.wrap = up, a2.xor = cl, a2.xorBy = hl, a2.xorWith = ll, a2.zip = pl, a2.zipObject = dl, a2.zipObjectDeep = gl, a2.zipWith = vl, a2.entries = ha, a2.entriesIn = la, a2.extend = oa, a2.extendWith = ar2, Ti(a2, a2), a2.add = pg, a2.attempt = va, a2.camelCase = _d, a2.capitalize = pa, a2.ceil = dg, a2.clamp = dd, a2.clone = op, a2.cloneDeep = cp, a2.cloneDeepWith = hp, a2.cloneWith = fp, a2.conformsTo = lp, a2.deburr = da, a2.defaultTo = Yd, a2.divide = gg, a2.endsWith = md, a2.eq = bn, a2.escape = wd, a2.escapeRegExp = Pd, a2.every = Sl, a2.find = Rl, a2.findIndex = Fu, a2.findKey = Bp, a2.findLast = bl, a2.findLastIndex = Mu, a2.findLastKey = Gp, a2.floor = vg, a2.forEach = Yu, a2.forEachRight = Zu, a2.forIn = zp, a2.forInRight = Kp, a2.forOwn = Yp, a2.forOwnRight = Zp, a2.get = yi, a2.gt = pp, a2.gte = dp, a2.has = Qp, a2.hasIn = Si, a2.head = Bu, a2.identity = fn, a2.includes = Hl, a2.indexOf = bh, a2.inRange = gd, a2.invoke = jp, a2.isArguments = wt2, a2.isArray = O2, a2.isArrayBuffer = gp, a2.isArrayLike = an2, a2.isArrayLikeObject = Y2, a2.isBoolean = vp, a2.isBuffer = at2, a2.isDate = _p, a2.isElement = mp, a2.isEmpty = wp, a2.isEqual = Pp, a2.isEqualWith = Ap, a2.isError = xi, a2.isFinite = Cp, a2.isFunction = Xn2, a2.isInteger = ta, a2.isLength = sr2, a2.isMap = ea, a2.isMatch = Ip, a2.isMatchWith = xp, a2.isNaN = Ep, a2.isNative = yp, a2.isNil = Op, a2.isNull = Sp, a2.isNumber = ra, a2.isObject = z, a2.isObjectLike = K2, a2.isPlainObject = le2, a2.isRegExp = Ei, a2.isSafeInteger = Rp, a2.isSet = ia, a2.isString = ur, a2.isSymbol = pn, a2.isTypedArray = Mt2, a2.isUndefined = bp, a2.isWeakMap = Tp, a2.isWeakSet = Lp, a2.join = Hh, a2.kebabCase = Ad, a2.last = In, a2.lastIndexOf = $h, a2.lowerCase = Cd, a2.lowerFirst = Id, a2.lt = Dp, a2.lte = Np, a2.max = _g, a2.maxBy = mg, a2.mean = wg, a2.meanBy = Pg, a2.min = Ag, a2.minBy = Cg, a2.stubArray = Di, a2.stubFalse = Ni, a2.stubObject = ag, a2.stubString = og, a2.stubTrue = fg, a2.multiply = Ig, a2.nth = Uh, a2.noConflict = jd, a2.noop = Li2, a2.now = er2, a2.pad = xd, a2.padEnd = Ed, a2.padStart = yd, a2.parseInt = Sd, a2.random = vd, a2.reduce = Ml, a2.reduceRight = ql, a2.repeat = Od, a2.replace = Rd, a2.result = ud, a2.round = xg, a2.runInContext = h2, a2.sample = Gl, a2.size = Yl, a2.snakeCase = bd, a2.some = Zl, a2.sortedIndex = zh, a2.sortedIndexBy = Kh, a2.sortedIndexOf = Yh, a2.sortedLastIndex = Zh, a2.sortedLastIndexBy = Jh, a2.sortedLastIndexOf = Xh, a2.startCase = Ld, a2.startsWith = Dd, a2.subtract = Eg, a2.sum = yg, a2.sumBy = Sg, a2.template = Nd, a2.times = cg, a2.toFinite = Qn, a2.toInteger = R, a2.toLength = ua, a2.toLower = Hd, a2.toNumber = xn, a2.toSafeInteger = Hp, a2.toString = U2, a2.toUpper = $d, a2.trim = Ud, a2.trimEnd = Wd, a2.trimStart = Fd, a2.truncate = Md, a2.unescape = qd, a2.uniqueId = lg, a2.upperCase = Bd, a2.upperFirst = Oi, a2.each = Yu, a2.eachRight = Zu, a2.first = Bu, Ti(a2, function() {
        var n2 = {};
        return $n2(a2, function(t, e) {
          W2.call(a2.prototype, e) || (n2[e] = t);
        }), n2;
      }(), { chain: false }), a2.VERSION = p2, mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n2) {
        a2[n2].placeholder = a2;
      }), mn(["drop", "take"], function(n2, t) {
        N2.prototype[n2] = function(e) {
          e = e === i ? 1 : Q2(R(e), 0);
          var r = this.__filtered__ && !t ? new N2(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = nn(e, r.__takeCount__) : r.__views__.push({ size: nn(e, Hn), type: n2 + (r.__dir__ < 0 ? "Right" : "") }), r;
        }, N2.prototype[n2 + "Right"] = function(e) {
          return this.reverse()[n2](e).reverse();
        };
      }), mn(["filter", "map", "takeWhile"], function(n2, t) {
        var e = t + 1, r = e == qi2 || e == $a;
        N2.prototype[n2] = function(s) {
          var o = this.clone();
          return o.__iteratees__.push({ iteratee: x(s, 3), type: e }), o.__filtered__ = o.__filtered__ || r, o;
        };
      }), mn(["head", "last"], function(n2, t) {
        var e = "take" + (t ? "Right" : "");
        N2.prototype[n2] = function() {
          return this[e](1).value()[0];
        };
      }), mn(["initial", "tail"], function(n2, t) {
        var e = "drop" + (t ? "" : "Right");
        N2.prototype[n2] = function() {
          return this.__filtered__ ? new N2(this) : this[e](1);
        };
      }), N2.prototype.compact = function() {
        return this.filter(fn);
      }, N2.prototype.find = function(n2) {
        return this.filter(n2).head();
      }, N2.prototype.findLast = function(n2) {
        return this.reverse().find(n2);
      }, N2.prototype.invokeMap = T(function(n2, t) {
        return typeof n2 == "function" ? new N2(this) : this.map(function(e) {
          return ue2(e, n2, t);
        });
      }), N2.prototype.reject = function(n2) {
        return this.filter(ir2(x(n2)));
      }, N2.prototype.slice = function(n2, t) {
        n2 = R(n2);
        var e = this;
        return e.__filtered__ && (n2 > 0 || t < 0) ? new N2(e) : (n2 < 0 ? e = e.takeRight(-n2) : n2 && (e = e.drop(n2)), t !== i && (t = R(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n2)), e);
      }, N2.prototype.takeRightWhile = function(n2) {
        return this.reverse().takeWhile(n2).reverse();
      }, N2.prototype.toArray = function() {
        return this.take(Hn);
      }, $n2(N2.prototype, function(n2, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), s = a2[r ? "take" + (t == "last" ? "Right" : "") : t], o = r || /^find/.test(t);
        s && (a2.prototype[t] = function() {
          var f2 = this.__wrapped__, c = r ? [1] : arguments, l = f2 instanceof N2, v2 = c[0], _2 = l || O2(f2), m2 = function(L2) {
            var H2 = s.apply(a2, nt2([L2], c));
            return r && w2 ? H2[0] : H2;
          };
          _2 && e && typeof v2 == "function" && v2.length != 1 && (l = _2 = false);
          var w2 = this.__chain__, A2 = !!this.__actions__.length, E2 = o && !w2, b2 = l && !A2;
          if (!o && _2) {
            f2 = b2 ? f2 : new N2(this);
            var y2 = n2.apply(f2, c);
            return y2.__actions__.push({ func: nr2, args: [m2], thisArg: i }), new Pn(y2, w2);
          }
          return E2 && b2 ? n2.apply(this, c) : (y2 = this.thru(m2), E2 ? r ? y2.value()[0] : y2.value() : y2);
        });
      }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n2) {
        var t = ye[n2], e = /^(?:push|sort|unshift)$/.test(n2) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n2);
        a2.prototype[n2] = function() {
          var s = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return t.apply(O2(o) ? o : [], s);
          }
          return this[e](function(f2) {
            return t.apply(O2(f2) ? f2 : [], s);
          });
        };
      }), $n2(N2.prototype, function(n2, t) {
        var e = a2[t];
        if (e) {
          var r = e.name + "";
          W2.call(Ht, r) || (Ht[r] = []), Ht[r].push({ name: t, func: e });
        }
      }), Ht[Ze2(i, ft2).name] = [{ name: "wrapper", func: i }], N2.prototype.clone = qf, N2.prototype.reverse = Bf, N2.prototype.value = Gf, a2.prototype.at = ml, a2.prototype.chain = wl, a2.prototype.commit = Pl, a2.prototype.next = Al, a2.prototype.plant = Il, a2.prototype.reverse = xl, a2.prototype.toJSON = a2.prototype.valueOf = a2.prototype.value = El, a2.prototype.first = a2.prototype.head, jt2 && (a2.prototype[jt2] = Cl), a2;
    }, Lt2 = Pf();
    ht2 ? ((ht2.exports = Lt2)._ = Lt2, br2._ = Lt2) : k._ = Lt2;
  }).call(pe);
})($i, $i.exports);
var Fg = Object.defineProperty, Mg = Object.defineProperties, qg = Object.getOwnPropertyDescriptors, xa = Object.getOwnPropertySymbols, Bg = Object.prototype.hasOwnProperty, Gg = Object.prototype.propertyIsEnumerable, Ea = (C2, u2, i) => u2 in C2 ? Fg(C2, u2, { enumerable: true, configurable: true, writable: true, value: i }) : C2[u2] = i, fr = (C2, u2) => {
  for (var i in u2 || (u2 = {}))
    Bg.call(u2, i) && Ea(C2, i, u2[i]);
  if (xa)
    for (var i of xa(u2))
      Gg.call(u2, i) && Ea(C2, i, u2[i]);
  return C2;
}, zg = (C2, u2) => Mg(C2, qg(u2));
function En(C2, u2, i) {
  let p2;
  const I2 = Ui(C2);
  return u2.rpcMap && (p2 = u2.rpcMap[I2]), p2 || (p2 = `${Wg}?chainId=eip155:${I2}&projectId=${i}`), p2;
}
function Ui(C2) {
  return C2.includes("eip155") ? Number(C2.split(":")[1]) : Number(C2);
}
function ya(C2) {
  return C2.map((u2) => `${u2.split(":")[0]}:${u2.split(":")[1]}`);
}
function Kg(C2, u2) {
  const i = Object.keys(u2.namespaces).filter((I2) => I2.includes(C2));
  if (!i.length)
    return [];
  const p2 = [];
  return i.forEach((I2) => {
    const D2 = u2.namespaces[I2].accounts;
    p2.push(...D2);
  }), p2;
}
function Yg(C2 = {}, u2 = {}) {
  const i = Sa(C2), p2 = Sa(u2);
  return $i.exports.merge(i, p2);
}
function Sa(C2) {
  var u2, i, p2, I2;
  const D2 = {};
  if (!H$2(C2))
    return D2;
  for (const [F2, Fn2] of Object.entries(C2)) {
    const Gt2 = te(F2) ? [F2] : Fn2.chains, lr2 = Fn2.methods || [], At2 = Fn2.events || [], Ln = Fn2.rpcMap || {}, Mn = Ze$1(F2);
    D2[Mn] = zg(fr(fr({}, D2[Mn]), Fn2), { chains: S$2(Gt2, (u2 = D2[Mn]) == null ? void 0 : u2.chains), methods: S$2(lr2, (i = D2[Mn]) == null ? void 0 : i.methods), events: S$2(At2, (p2 = D2[Mn]) == null ? void 0 : p2.events), rpcMap: fr(fr({}, Ln), (I2 = D2[Mn]) == null ? void 0 : I2.rpcMap) });
  }
  return D2;
}
function Zg(C2) {
  return C2.includes(":") ? C2.split(":")[2] : C2;
}
function Jg(C2) {
  const u2 = {};
  for (const [i, p2] of Object.entries(C2)) {
    const I2 = p2.methods || [], D2 = p2.events || [], F2 = p2.accounts || [], Fn2 = te(i) ? [i] : p2.chains ? p2.chains : ya(p2.accounts);
    u2[i] = { chains: Fn2, methods: I2, events: D2, accounts: F2 };
  }
  return u2;
}
const Oa = {}, J = (C2) => Oa[C2], Wi = (C2, u2) => {
  Oa[C2] = u2;
};
class Xg {
  constructor(u2) {
    this.name = "polkadot", this.namespace = u2.namespace, this.events = J("events"), this.client = J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u2) {
    this.namespace = Object.assign(this.namespace, u2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u2 = this.namespace.chains[0];
    if (!u2)
      throw new Error("ChainId not found");
    return u2.split(":")[1];
  }
  request(u2) {
    return this.namespace.methods.includes(u2.request.method) ? this.client.request(u2) : this.getHttpProvider().request(u2.request);
  }
  setDefaultChain(u2, i) {
    if (this.chainId = u2, !this.httpProviders[u2]) {
      const p2 = i || En(`${this.name}:${u2}`, this.namespace);
      if (!p2)
        throw new Error(`No RPC url provided for chainId: ${u2}`);
      this.setHttpProvider(u2, p2);
    }
    this.events.emit(ot.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u2 = this.namespace.accounts;
    return u2 ? u2.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u2 = {};
    return this.namespace.chains.forEach((i) => {
      var p2;
      u2[i] = this.createHttpProvider(i, (p2 = this.namespace.rpcMap) == null ? void 0 : p2[i]);
    }), u2;
  }
  getHttpProvider() {
    const u2 = `${this.name}:${this.chainId}`, i = this.httpProviders[u2];
    if (typeof i > "u")
      throw new Error(`JSON-RPC provider for ${u2} not found`);
    return i;
  }
  setHttpProvider(u2, i) {
    const p2 = this.createHttpProvider(u2, i);
    p2 && (this.httpProviders[u2] = p2);
  }
  createHttpProvider(u2, i) {
    const p2 = i || En(u2, this.namespace);
    return typeof p2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(p2, J("disableProviderPing")));
  }
}
class Qg {
  constructor(u2) {
    this.name = "eip155", this.namespace = u2.namespace, this.events = J("events"), this.client = J("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(u2) {
    switch (u2.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(u2);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(u2.request.method) ? await this.client.request(u2) : this.getHttpProvider().request(u2.request);
  }
  updateNamespace(u2) {
    this.namespace = Object.assign(this.namespace, u2);
  }
  setDefaultChain(u2, i) {
    const p2 = Ui(u2);
    if (!this.httpProviders[p2]) {
      const I2 = i || En(`${this.name}:${p2}`, this.namespace, this.client.core.projectId);
      if (!I2)
        throw new Error(`No RPC url provided for chainId: ${p2}`);
      this.setHttpProvider(p2, I2);
    }
    this.chainId = p2, this.events.emit(ot.DEFAULT_CHAIN_CHANGED, `${this.name}:${p2}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u2 = this.namespace.chains[0];
    if (!u2)
      throw new Error("ChainId not found");
    return u2.split(":")[1];
  }
  createHttpProvider(u2, i) {
    const p2 = i || En(`${this.name}:${u2}`, this.namespace, this.client.core.projectId);
    return typeof p2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(p2, J("disableProviderPing")));
  }
  setHttpProvider(u2, i) {
    const p2 = this.createHttpProvider(u2, i);
    p2 && (this.httpProviders[u2] = p2);
  }
  createHttpProviders() {
    const u2 = {};
    return this.namespace.chains.forEach((i) => {
      var p2;
      const I2 = Ui(i);
      u2[I2] = this.createHttpProvider(I2, (p2 = this.namespace.rpcMap) == null ? void 0 : p2[i]);
    }), u2;
  }
  getAccounts() {
    const u2 = this.namespace.accounts;
    return u2 ? [...new Set(u2.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const u2 = this.chainId, i = this.httpProviders[u2];
    if (typeof i > "u")
      throw new Error(`JSON-RPC provider for ${u2} not found`);
    return i;
  }
  async handleSwitchChain(u2) {
    var i, p2;
    let I2 = u2.request.params ? (i = u2.request.params[0]) == null ? void 0 : i.chainId : "0x0";
    I2 = I2.startsWith("0x") ? I2 : `0x${I2}`;
    const D2 = parseInt(I2, 16);
    if (this.isChainApproved(D2))
      this.setDefaultChain(`${D2}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: u2.topic, request: { method: u2.request.method, params: [{ chainId: I2 }] }, chainId: (p2 = this.namespace.chains) == null ? void 0 : p2[0] }), this.setDefaultChain(`${D2}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${D2}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(u2) {
    return this.namespace.chains.includes(`${this.name}:${u2}`);
  }
}
class Vg {
  constructor(u2) {
    this.name = "solana", this.namespace = u2.namespace, this.events = J("events"), this.client = J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u2) {
    this.namespace = Object.assign(this.namespace, u2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u2) {
    return this.namespace.methods.includes(u2.request.method) ? this.client.request(u2) : this.getHttpProvider().request(u2.request);
  }
  setDefaultChain(u2, i) {
    if (!this.httpProviders[u2]) {
      const p2 = i || En(`${this.name}:${u2}`, this.namespace, this.client.core.projectId);
      if (!p2)
        throw new Error(`No RPC url provided for chainId: ${u2}`);
      this.setHttpProvider(u2, p2);
    }
    this.chainId = u2, this.events.emit(ot.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u2 = this.namespace.chains[0];
    if (!u2)
      throw new Error("ChainId not found");
    return u2.split(":")[1];
  }
  getAccounts() {
    const u2 = this.namespace.accounts;
    return u2 ? [...new Set(u2.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u2 = {};
    return this.namespace.chains.forEach((i) => {
      var p2;
      u2[i] = this.createHttpProvider(i, (p2 = this.namespace.rpcMap) == null ? void 0 : p2[i]);
    }), u2;
  }
  getHttpProvider() {
    const u2 = `${this.name}:${this.chainId}`, i = this.httpProviders[u2];
    if (typeof i > "u")
      throw new Error(`JSON-RPC provider for ${u2} not found`);
    return i;
  }
  setHttpProvider(u2, i) {
    const p2 = this.createHttpProvider(u2, i);
    p2 && (this.httpProviders[u2] = p2);
  }
  createHttpProvider(u2, i) {
    const p2 = i || En(u2, this.namespace, this.client.core.projectId);
    return typeof p2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(p2, J("disableProviderPing")));
  }
}
class kg {
  constructor(u2) {
    this.name = "cosmos", this.namespace = u2.namespace, this.events = J("events"), this.client = J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u2) {
    this.namespace = Object.assign(this.namespace, u2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u2 = this.namespace.chains[0];
    if (!u2)
      throw new Error("ChainId not found");
    return u2.split(":")[1];
  }
  request(u2) {
    return this.namespace.methods.includes(u2.request.method) ? this.client.request(u2) : this.getHttpProvider().request(u2.request);
  }
  setDefaultChain(u2, i) {
    if (this.chainId = u2, !this.httpProviders[u2]) {
      const p2 = i || En(`${this.name}:${u2}`, this.namespace, this.client.core.projectId);
      if (!p2)
        throw new Error(`No RPC url provided for chainId: ${u2}`);
      this.setHttpProvider(u2, p2);
    }
    this.events.emit(ot.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u2 = this.namespace.accounts;
    return u2 ? [...new Set(u2.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u2 = {};
    return this.namespace.chains.forEach((i) => {
      var p2;
      u2[i] = this.createHttpProvider(i, (p2 = this.namespace.rpcMap) == null ? void 0 : p2[i]);
    }), u2;
  }
  getHttpProvider() {
    const u2 = `${this.name}:${this.chainId}`, i = this.httpProviders[u2];
    if (typeof i > "u")
      throw new Error(`JSON-RPC provider for ${u2} not found`);
    return i;
  }
  setHttpProvider(u2, i) {
    const p2 = this.createHttpProvider(u2, i);
    p2 && (this.httpProviders[u2] = p2);
  }
  createHttpProvider(u2, i) {
    const p2 = i || En(u2, this.namespace, this.client.core.projectId);
    return typeof p2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(p2, J("disableProviderPing")));
  }
}
class jg {
  constructor(u2) {
    this.name = "cip34", this.namespace = u2.namespace, this.events = J("events"), this.client = J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u2) {
    this.namespace = Object.assign(this.namespace, u2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u2 = this.namespace.chains[0];
    if (!u2)
      throw new Error("ChainId not found");
    return u2.split(":")[1];
  }
  request(u2) {
    return this.namespace.methods.includes(u2.request.method) ? this.client.request(u2) : this.getHttpProvider().request(u2.request);
  }
  setDefaultChain(u2, i) {
    if (this.chainId = u2, !this.httpProviders[u2]) {
      const p2 = i || this.getCardanoRPCUrl(u2);
      if (!p2)
        throw new Error(`No RPC url provided for chainId: ${u2}`);
      this.setHttpProvider(u2, p2);
    }
    this.events.emit(ot.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u2 = this.namespace.accounts;
    return u2 ? [...new Set(u2.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u2 = {};
    return this.namespace.chains.forEach((i) => {
      const p2 = this.getCardanoRPCUrl(i);
      u2[i] = this.createHttpProvider(i, p2);
    }), u2;
  }
  getHttpProvider() {
    const u2 = `${this.name}:${this.chainId}`, i = this.httpProviders[u2];
    if (typeof i > "u")
      throw new Error(`JSON-RPC provider for ${u2} not found`);
    return i;
  }
  getCardanoRPCUrl(u2) {
    const i = this.namespace.rpcMap;
    if (i)
      return i[u2];
  }
  setHttpProvider(u2, i) {
    const p2 = this.createHttpProvider(u2, i);
    p2 && (this.httpProviders[u2] = p2);
  }
  createHttpProvider(u2, i) {
    const p2 = i || this.getCardanoRPCUrl(u2);
    return typeof p2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(p2, J("disableProviderPing")));
  }
}
class nv {
  constructor(u2) {
    this.name = "elrond", this.namespace = u2.namespace, this.events = J("events"), this.client = J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u2) {
    this.namespace = Object.assign(this.namespace, u2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u2) {
    return this.namespace.methods.includes(u2.request.method) ? this.client.request(u2) : this.getHttpProvider().request(u2.request);
  }
  setDefaultChain(u2, i) {
    if (!this.httpProviders[u2]) {
      const p2 = i || En(`${this.name}:${u2}`, this.namespace, this.client.core.projectId);
      if (!p2)
        throw new Error(`No RPC url provided for chainId: ${u2}`);
      this.setHttpProvider(u2, p2);
    }
    this.chainId = u2, this.events.emit(ot.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u2 = this.namespace.chains[0];
    if (!u2)
      throw new Error("ChainId not found");
    return u2.split(":")[1];
  }
  getAccounts() {
    const u2 = this.namespace.accounts;
    return u2 ? [...new Set(u2.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u2 = {};
    return this.namespace.chains.forEach((i) => {
      var p2;
      u2[i] = this.createHttpProvider(i, (p2 = this.namespace.rpcMap) == null ? void 0 : p2[i]);
    }), u2;
  }
  getHttpProvider() {
    const u2 = `${this.name}:${this.chainId}`, i = this.httpProviders[u2];
    if (typeof i > "u")
      throw new Error(`JSON-RPC provider for ${u2} not found`);
    return i;
  }
  setHttpProvider(u2, i) {
    const p2 = this.createHttpProvider(u2, i);
    p2 && (this.httpProviders[u2] = p2);
  }
  createHttpProvider(u2, i) {
    const p2 = i || En(u2, this.namespace, this.client.core.projectId);
    return typeof p2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(p2, J("disableProviderPing")));
  }
}
class tv {
  constructor(u2) {
    this.name = "multiversx", this.namespace = u2.namespace, this.events = J("events"), this.client = J("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u2) {
    this.namespace = Object.assign(this.namespace, u2);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u2) {
    return this.namespace.methods.includes(u2.request.method) ? this.client.request(u2) : this.getHttpProvider().request(u2.request);
  }
  setDefaultChain(u2, i) {
    if (!this.httpProviders[u2]) {
      const p2 = i || En(`${this.name}:${u2}`, this.namespace, this.client.core.projectId);
      if (!p2)
        throw new Error(`No RPC url provided for chainId: ${u2}`);
      this.setHttpProvider(u2, p2);
    }
    this.chainId = u2, this.events.emit(ot.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u2 = this.namespace.chains[0];
    if (!u2)
      throw new Error("ChainId not found");
    return u2.split(":")[1];
  }
  getAccounts() {
    const u2 = this.namespace.accounts;
    return u2 ? [...new Set(u2.filter((i) => i.split(":")[1] === this.chainId.toString()).map((i) => i.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u2 = {};
    return this.namespace.chains.forEach((i) => {
      var p2;
      u2[i] = this.createHttpProvider(i, (p2 = this.namespace.rpcMap) == null ? void 0 : p2[i]);
    }), u2;
  }
  getHttpProvider() {
    const u2 = `${this.name}:${this.chainId}`, i = this.httpProviders[u2];
    if (typeof i > "u")
      throw new Error(`JSON-RPC provider for ${u2} not found`);
    return i;
  }
  setHttpProvider(u2, i) {
    const p2 = this.createHttpProvider(u2, i);
    p2 && (this.httpProviders[u2] = p2);
  }
  createHttpProvider(u2, i) {
    const p2 = i || En(u2, this.namespace, this.client.core.projectId);
    return typeof p2 > "u" ? void 0 : new JsonRpcProvider(new HttpConnection(p2, J("disableProviderPing")));
  }
}
var ev = Object.defineProperty, rv = Object.defineProperties, iv = Object.getOwnPropertyDescriptors, Ra = Object.getOwnPropertySymbols, sv = Object.prototype.hasOwnProperty, uv = Object.prototype.propertyIsEnumerable, ba = (C2, u2, i) => u2 in C2 ? ev(C2, u2, { enumerable: true, configurable: true, writable: true, value: i }) : C2[u2] = i, cr = (C2, u2) => {
  for (var i in u2 || (u2 = {}))
    sv.call(u2, i) && ba(C2, i, u2[i]);
  if (Ra)
    for (var i of Ra(u2))
      uv.call(u2, i) && ba(C2, i, u2[i]);
  return C2;
}, Fi = (C2, u2) => rv(C2, iv(u2));
class hr {
  constructor(u2) {
    this.events = new events.exports(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = u2, this.logger = typeof u2?.logger < "u" && typeof u2?.logger != "string" ? u2.logger : cjs.pino(cjs.getDefaultLoggerOptions({ level: u2?.logger || Ca })), this.disableProviderPing = u2?.disableProviderPing || false;
  }
  static async init(u2) {
    const i = new hr(u2);
    return await i.initialize(), i;
  }
  async request(u2, i) {
    const [p2, I2] = this.validateChain(i);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(p2).request({ request: cr({}, u2), chainId: `${p2}:${I2}`, topic: this.session.topic });
  }
  sendAsync(u2, i, p2) {
    this.request(u2, p2).then((I2) => i(null, I2)).catch((I2) => i(I2, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var u2;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (u2 = this.session) == null ? void 0 : u2.topic, reason: A$1("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(u2) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(u2), await this.cleanupPendingPairings(), !u2.skipPairing)
      return await this.pair(u2.pairingTopic);
  }
  on(u2, i) {
    this.events.on(u2, i);
  }
  once(u2, i) {
    this.events.once(u2, i);
  }
  removeListener(u2, i) {
    this.events.removeListener(u2, i);
  }
  off(u2, i) {
    this.events.off(u2, i);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(u2) {
    this.shouldAbortPairingAttempt = false;
    let i = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (i >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: p2, approval: I2 } = await this.client.connect({ pairingTopic: u2, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      p2 && (this.uri = p2, this.events.emit("display_uri", p2)), await I2().then((D2) => {
        this.session = D2, this.namespaces || (this.namespaces = Jg(D2.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((D2) => {
        if (D2.message !== re)
          throw D2;
        i++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(u2, i) {
    try {
      if (!this.session)
        return;
      const [p2, I2] = this.validateChain(u2);
      this.getProvider(p2).setDefaultChain(I2, i);
    } catch (p2) {
      if (!/Please call connect/.test(p2.message))
        throw p2;
    }
  }
  async cleanupPendingPairings(u2 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i = this.client.pairing.getAll();
    if (C$1(i)) {
      for (const p2 of i)
        u2.deletePairings ? this.client.core.expirer.set(p2.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(p2.topic);
      this.logger.info(`Inactive pairings cleared: ${i.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const u2 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[u2]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await U$1.init({ logger: this.providerOpts.logger || Ca, relayUrl: this.providerOpts.relayUrl || Hg, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const u2 = [...new Set(Object.keys(this.session.namespaces).map((i) => Ze$1(i)))];
    Wi("client", this.client), Wi("events", this.events), Wi("disableProviderPing", this.disableProviderPing), u2.forEach((i) => {
      if (!this.session)
        return;
      const p2 = Kg(i, this.session), I2 = ya(p2), D2 = Yg(this.namespaces, this.optionalNamespaces), F2 = Fi(cr({}, D2[i]), { accounts: p2, chains: I2 });
      switch (i) {
        case "eip155":
          this.rpcProviders[i] = new Qg({ namespace: F2 });
          break;
        case "solana":
          this.rpcProviders[i] = new Vg({ namespace: F2 });
          break;
        case "cosmos":
          this.rpcProviders[i] = new kg({ namespace: F2 });
          break;
        case "polkadot":
          this.rpcProviders[i] = new Xg({ namespace: F2 });
          break;
        case "cip34":
          this.rpcProviders[i] = new jg({ namespace: F2 });
          break;
        case "elrond":
          this.rpcProviders[i] = new nv({ namespace: F2 });
          break;
        case "multiversx":
          this.rpcProviders[i] = new tv({ namespace: F2 });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (u2) => {
      this.events.emit("session_ping", u2);
    }), this.client.on("session_event", (u2) => {
      const { params: i } = u2, { event: p2 } = i;
      if (p2.name === "accountsChanged") {
        const I2 = p2.data;
        I2 && C$1(I2) && this.events.emit("accountsChanged", I2.map(Zg));
      } else
        p2.name === "chainChanged" ? this.onChainChanged(i.chainId) : this.events.emit(p2.name, p2.data);
      this.events.emit("session_event", u2);
    }), this.client.on("session_update", ({ topic: u2, params: i }) => {
      var p2;
      const { namespaces: I2 } = i, D2 = (p2 = this.client) == null ? void 0 : p2.session.get(u2);
      this.session = Fi(cr({}, D2), { namespaces: I2 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: u2, params: i });
    }), this.client.on("session_delete", async (u2) => {
      await this.cleanup(), this.events.emit("session_delete", u2), this.events.emit("disconnect", Fi(cr({}, A$1("USER_DISCONNECTED")), { data: u2.topic }));
    }), this.on(ot.DEFAULT_CHAIN_CHANGED, (u2) => {
      this.onChainChanged(u2, true);
    });
  }
  getProvider(u2) {
    if (!this.rpcProviders[u2])
      throw new Error(`Provider not found: ${u2}`);
    return this.rpcProviders[u2];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((u2) => {
      var i;
      this.getProvider(u2).updateNamespace((i = this.session) == null ? void 0 : i.namespaces[u2]);
    });
  }
  setNamespaces(u2) {
    const { namespaces: i, optionalNamespaces: p2, sessionProperties: I2 } = u2;
    i && Object.keys(i).length && (this.namespaces = i), p2 && Object.keys(p2).length && (this.optionalNamespaces = p2), this.sessionProperties = I2, this.persist("namespaces", i), this.persist("optionalNamespaces", p2);
  }
  validateChain(u2) {
    const [i, p2] = u2?.split(":") || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [i, p2];
    if (i && !Object.keys(this.namespaces || {}).map((F2) => Ze$1(F2)).includes(i))
      throw new Error(`Namespace '${i}' is not configured. Please call connect() first with namespace config.`);
    if (i && p2)
      return [i, p2];
    const I2 = Ze$1(Object.keys(this.namespaces)[0]), D2 = this.rpcProviders[I2].getDefaultChain();
    return [I2, D2];
  }
  async requestAccounts() {
    const [u2] = this.validateChain();
    return await this.getProvider(u2).requestAccounts();
  }
  onChainChanged(u2, i = false) {
    var p2;
    if (!this.namespaces)
      return;
    const [I2, D2] = this.validateChain(u2);
    i || this.getProvider(I2).setDefaultChain(D2), ((p2 = this.namespaces[I2]) != null ? p2 : this.namespaces[`${I2}:${D2}`]).defaultChain = D2, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", D2);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(u2, i) {
    this.client.core.storage.setItem(`${Ia}/${u2}`, i);
  }
  async getFromStore(u2) {
    return await this.client.core.storage.getItem(`${Ia}/${u2}`);
  }
}
const av = hr;
const P = "wc", S = "ethereum_provider", $ = `${P}@2:${S}:`, j = "https://rpc.walletconnect.com/v1/", u = ["eth_sendTransaction", "personal_sign"], E = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], m = ["chainChanged", "accountsChanged"], _ = ["message", "disconnect", "connect"];
var N = Object.defineProperty, q = Object.defineProperties, D = Object.getOwnPropertyDescriptors, y = Object.getOwnPropertySymbols, U = Object.prototype.hasOwnProperty, Q = Object.prototype.propertyIsEnumerable, O = (a2, t, s) => t in a2 ? N(a2, t, { enumerable: true, configurable: true, writable: true, value: s }) : a2[t] = s, p = (a2, t) => {
  for (var s in t || (t = {}))
    U.call(t, s) && O(a2, s, t[s]);
  if (y)
    for (var s of y(t))
      Q.call(t, s) && O(a2, s, t[s]);
  return a2;
}, M = (a2, t) => q(a2, D(t));
function g(a2) {
  return Number(a2[0].split(":")[1]);
}
function f(a2) {
  return `0x${a2.toString(16)}`;
}
function L(a2) {
  const { chains: t, optionalChains: s, methods: i, optionalMethods: n2, events: e, optionalEvents: h2, rpcMap: c } = a2;
  if (!C$1(t))
    throw new Error("Invalid chains");
  const o = { chains: t, methods: i || u, events: e || m, rpcMap: p({}, t.length ? { [g(t)]: c[g(t)] } : {}) }, r = e?.filter((l) => !m.includes(l)), d2 = i?.filter((l) => !u.includes(l));
  if (!s && !h2 && !n2 && !(r != null && r.length) && !(d2 != null && d2.length))
    return { required: t.length ? o : void 0 };
  const C2 = r?.length && d2?.length || !s, I2 = { chains: [...new Set(C2 ? o.chains.concat(s || []) : s)], methods: [...new Set(o.methods.concat(n2 != null && n2.length ? n2 : E))], events: [...new Set(o.events.concat(h2 || _))], rpcMap: c };
  return { required: t.length ? o : void 0, optional: s.length ? I2 : void 0 };
}
class v {
  constructor() {
    this.events = new events.exports.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $, this.on = (t, s) => (this.events.on(t, s), this), this.once = (t, s) => (this.events.once(t, s), this), this.removeListener = (t, s) => (this.events.removeListener(t, s), this), this.off = (t, s) => (this.events.off(t, s), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s = new v();
    return await s.initialize(t), s;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, s) {
    this.signer.sendAsync(t, s, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s, optional: i } = L(this.rpc);
    try {
      const n2 = await new Promise(async (h2, c) => {
        var o;
        this.rpc.showQrModal && ((o = this.modal) == null || o.subscribeModal((r) => {
          !r.open && !this.signer.session && (this.signer.abortPairingAttempt(), c(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(M(p({ namespaces: p({}, s && { [this.namespace]: s }) }, i && { optionalNamespaces: { [this.namespace]: i } }), { pairingTopic: t?.pairingTopic })).then((r) => {
          h2(r);
        }).catch((r) => {
          c(new Error(r.message));
        });
      });
      if (!n2)
        return;
      this.setChainIds(this.rpc.chains);
      const e = On(n2.namespaces, [this.namespace]);
      this.setAccounts(e), this.events.emit("connect", { chainId: f(this.chainId) });
    } catch (n2) {
      throw this.signer.logger.error(n2), n2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s } = t, { event: i } = s;
      i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data), this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s = parseInt(t);
      this.chainId = s, this.events.emit("chainChanged", f(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", M(p({}, A$1("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s, i;
      this.rpc.showQrModal && ((s = this.modal) == null || s.closeModal(), (i = this.modal) == null || i.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s = t.filter((i) => this.isCompatibleChainId(i)).map((i) => this.parseChainId(i));
    s.length && (this.chainId = s[0], this.events.emit("chainChanged", f(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s = this.parseChainId(t);
      this.chainId = s, this.switchEthereumChain(s);
    }
  }
  parseAccountId(t) {
    const [s, i, n2] = t.split(":");
    return { chainId: `${s}:${i}`, address: n2 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s) => this.parseChainId(this.parseAccountId(s).chainId) === this.chainId).map((s) => this.parseAccountId(s).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s, i;
    const n2 = (s = t?.chains) != null ? s : [], e = (i = t?.optionalChains) != null ? i : [], h2 = n2.concat(e);
    if (!h2.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const c = n2.length ? t?.methods || u : [], o = n2.length ? t?.events || m : [], r = t?.optionalMethods || [], d2 = t?.optionalEvents || [], C2 = t?.rpcMap || this.buildRpcMap(h2, t.projectId), I2 = t?.qrModalOptions || void 0;
    return { chains: n2?.map((l) => this.formatChainId(l)), optionalChains: e.map((l) => this.formatChainId(l)), methods: c, events: o, optionalMethods: r, optionalEvents: d2, rpcMap: C2, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: I2, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s) {
    const i = {};
    return t.forEach((n2) => {
      i[n2] = this.getRpcUrl(n2, s);
    }), i;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? g(this.rpc.chains) : g(this.rpc.optionalChains), this.signer = await av.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s;
      try {
        const { WalletConnectModal: i } = await __vitePreload(() => import("./index.68c0a314.js").then((n2) => n2.i), true ? ["assets/index.68c0a314.js","assets/index.43f3f5e7.js","assets/index.048efc1e.css"] : void 0);
        s = i;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s)
        try {
          this.modal = new s(p({ walletConnectVersion: 2, projectId: this.rpc.projectId, standaloneChains: this.rpc.chains }, this.rpc.qrModalOptions));
        } catch (i) {
          throw this.signer.logger.error(i), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: s, optionalChains: i, rpcMap: n2 } = t;
    s && C$1(s) && (this.rpc.chains = s.map((e) => this.formatChainId(e)), s.forEach((e) => {
      this.rpc.rpcMap[e] = n2?.[e] || this.getRpcUrl(e);
    })), i && C$1(i) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i?.map((e) => this.formatChainId(e)), i.forEach((e) => {
      this.rpc.rpcMap[e] = n2?.[e] || this.getRpcUrl(e);
    }));
  }
  getRpcUrl(t, s) {
    var i;
    return ((i = this.rpc.rpcMap) == null ? void 0 : i[t]) || `${j}?chainId=eip155:${t}&projectId=${s || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : s?.accounts), this.setAccounts(s?.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s) => this.parseAccount(s));
  }
}
const G = v;
export {
  G as EthereumProvider,
  _ as OPTIONAL_EVENTS,
  E as OPTIONAL_METHODS,
  m as REQUIRED_EVENTS,
  u as REQUIRED_METHODS,
  v as default
};
