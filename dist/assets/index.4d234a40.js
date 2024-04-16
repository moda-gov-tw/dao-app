import { i, s, x, o, n, e, b, a as animate, t, l, c as browser } from "./if-defined.5d5f80c2.js";
import { s as se$1, T as T$1, o as oe$1, n as ne$1, R, y, t as te$1, p, a } from "./index.68c0a314.js";
import "./index.43f3f5e7.js";
var et = Object.defineProperty, Be = Object.getOwnPropertySymbols, tt = Object.prototype.hasOwnProperty, ot = Object.prototype.propertyIsEnumerable, Ue = (e2, o2, r) => o2 in e2 ? et(e2, o2, { enumerable: true, configurable: true, writable: true, value: r }) : e2[o2] = r, ve = (e2, o2) => {
  for (var r in o2 || (o2 = {}))
    tt.call(o2, r) && Ue(e2, r, o2[r]);
  if (Be)
    for (var r of Be(o2))
      ot.call(o2, r) && Ue(e2, r, o2[r]);
  return e2;
};
function rt() {
  var e2;
  const o2 = (e2 = ne$1.state.themeMode) != null ? e2 : "dark", r = { light: { foreground: { 1: "rgb(20,20,20)", 2: "rgb(121,134,134)", 3: "rgb(158,169,169)" }, background: { 1: "rgb(255,255,255)", 2: "rgb(241,243,243)", 3: "rgb(228,231,231)" }, overlay: "rgba(0,0,0,0.1)" }, dark: { foreground: { 1: "rgb(228,231,231)", 2: "rgb(148,158,158)", 3: "rgb(110,119,119)" }, background: { 1: "rgb(20,20,20)", 2: "rgb(39,42,42)", 3: "rgb(59,64,64)" }, overlay: "rgba(255,255,255,0.1)" } }[o2];
  return { "--wcm-color-fg-1": r.foreground[1], "--wcm-color-fg-2": r.foreground[2], "--wcm-color-fg-3": r.foreground[3], "--wcm-color-bg-1": r.background[1], "--wcm-color-bg-2": r.background[2], "--wcm-color-bg-3": r.background[3], "--wcm-color-overlay": r.overlay };
}
function He() {
  return { "--wcm-accent-color": "#3396FF", "--wcm-accent-fill-color": "#FFFFFF", "--wcm-z-index": "89", "--wcm-background-color": "#3396FF", "--wcm-background-border-radius": "8px", "--wcm-container-border-radius": "30px", "--wcm-wallet-icon-border-radius": "15px", "--wcm-wallet-icon-large-border-radius": "30px", "--wcm-wallet-icon-small-border-radius": "7px", "--wcm-input-border-radius": "28px", "--wcm-button-border-radius": "10px", "--wcm-notification-border-radius": "36px", "--wcm-secondary-button-border-radius": "28px", "--wcm-icon-button-border-radius": "50%", "--wcm-button-hover-highlight-border-radius": "10px", "--wcm-text-big-bold-size": "20px", "--wcm-text-big-bold-weight": "600", "--wcm-text-big-bold-line-height": "24px", "--wcm-text-big-bold-letter-spacing": "-0.03em", "--wcm-text-big-bold-text-transform": "none", "--wcm-text-xsmall-bold-size": "10px", "--wcm-text-xsmall-bold-weight": "700", "--wcm-text-xsmall-bold-line-height": "12px", "--wcm-text-xsmall-bold-letter-spacing": "0.02em", "--wcm-text-xsmall-bold-text-transform": "uppercase", "--wcm-text-xsmall-regular-size": "12px", "--wcm-text-xsmall-regular-weight": "600", "--wcm-text-xsmall-regular-line-height": "14px", "--wcm-text-xsmall-regular-letter-spacing": "-0.03em", "--wcm-text-xsmall-regular-text-transform": "none", "--wcm-text-small-thin-size": "14px", "--wcm-text-small-thin-weight": "500", "--wcm-text-small-thin-line-height": "16px", "--wcm-text-small-thin-letter-spacing": "-0.03em", "--wcm-text-small-thin-text-transform": "none", "--wcm-text-small-regular-size": "14px", "--wcm-text-small-regular-weight": "600", "--wcm-text-small-regular-line-height": "16px", "--wcm-text-small-regular-letter-spacing": "-0.03em", "--wcm-text-small-regular-text-transform": "none", "--wcm-text-medium-regular-size": "16px", "--wcm-text-medium-regular-weight": "600", "--wcm-text-medium-regular-line-height": "20px", "--wcm-text-medium-regular-letter-spacing": "-0.03em", "--wcm-text-medium-regular-text-transform": "none", "--wcm-font-family": "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif", "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on", "--wcm-success-color": "rgb(38,181,98)", "--wcm-error-color": "rgb(242, 90, 103)", "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)", "--wcm-overlay-backdrop-filter": "none" };
}
const h = { getPreset(e2) {
  return He()[e2];
}, setTheme() {
  const e2 = document.querySelector(":root"), { themeVariables: o2 } = ne$1.state;
  if (e2) {
    const r = ve(ve(ve({}, rt()), He()), o2);
    Object.entries(r).forEach(([a2, t2]) => e2.style.setProperty(a2, t2));
  }
}, globalCss: i`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}` }, at = i`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var lt = Object.defineProperty, it = Object.getOwnPropertyDescriptor, F = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? it(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && lt(o2, r, t2), t2;
};
let T = class extends s {
  constructor() {
    super(...arguments), this.disabled = false, this.iconLeft = void 0, this.iconRight = void 0, this.onClick = () => null, this.variant = "default";
  }
  render() {
    const e2 = { "wcm-icon-left": this.iconLeft !== void 0, "wcm-icon-right": this.iconRight !== void 0, "wcm-ghost": this.variant === "ghost", "wcm-outline": this.variant === "outline" };
    let o$1 = "inverse";
    return this.variant === "ghost" && (o$1 = "secondary"), this.variant === "outline" && (o$1 = "accent"), x`<button class="${o(e2)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${o$1}"><slot></slot></wcm-text>${this.iconRight}</button>`;
  }
};
T.styles = [h.globalCss, at], F([n({ type: Boolean })], T.prototype, "disabled", 2), F([n()], T.prototype, "iconLeft", 2), F([n()], T.prototype, "iconRight", 2), F([n()], T.prototype, "onClick", 2), F([n()], T.prototype, "variant", 2), T = F([e("wcm-button")], T);
const nt = i`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var ct = Object.defineProperty, st = Object.getOwnPropertyDescriptor, ue = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? st(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && ct(o2, r, t2), t2;
};
let ee = class extends s {
  constructor() {
    super(...arguments), this.disabled = false, this.variant = "primary";
  }
  render() {
    const e2 = { "wcm-secondary": this.variant === "secondary" };
    return x`<button ?disabled="${this.disabled}" class="${o(e2)}"><slot></slot></button>`;
  }
};
ee.styles = [h.globalCss, nt], ue([n({ type: Boolean })], ee.prototype, "disabled", 2), ue([n()], ee.prototype, "variant", 2), ee = ue([e("wcm-button-big")], ee);
const dt = i`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var mt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, wt = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? ht(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && mt(o2, r, t2), t2;
};
let be = class extends s {
  render() {
    return x`<div><slot></slot></div>`;
  }
};
be.styles = [h.globalCss, dt], be = wt([e("wcm-info-footer")], be);
const v = { CROSS_ICON: b`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`, WALLET_CONNECT_LOGO: b`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`, WALLET_CONNECT_ICON: b`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`, WALLET_CONNECT_ICON_COLORED: b`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`, BACK_ICON: b`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`, COPY_ICON: b`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`, RETRY_ICON: b`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`, DESKTOP_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`, MOBILE_ICON: b`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`, ARROW_DOWN_ICON: b`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`, ARROW_UP_RIGHT_ICON: b`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`, ARROW_RIGHT_ICON: b`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`, QRCODE_ICON: b`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`, SCAN_ICON: b`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`, CHECKMARK_ICON: b`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`, SEARCH_ICON: b`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`, WALLET_PLACEHOLDER: b`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`, GLOBE_ICON: b`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>` }, pt = i`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var gt = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, ut = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? vt(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && gt(o2, r, t2), t2;
};
let fe = class extends s {
  render() {
    return x`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${v.WALLET_CONNECT_LOGO} <button @click="${se$1.close}">${v.CROSS_ICON}</button></div>`;
  }
};
fe.styles = [h.globalCss, pt], fe = ut([e("wcm-modal-backcard")], fe);
const bt = i`main{padding:20px;padding-top:0;width:100%}`;
var ft = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, yt = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? xt(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && ft(o2, r, t2), t2;
};
let xe = class extends s {
  render() {
    return x`<main><slot></slot></main>`;
  }
};
xe.styles = [h.globalCss, bt], xe = yt([e("wcm-modal-content")], xe);
const $t = i`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var Ct = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, Ot = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? kt(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Ct(o2, r, t2), t2;
};
let ye = class extends s {
  render() {
    return x`<footer><slot></slot></footer>`;
  }
};
ye.styles = [h.globalCss, $t], ye = Ot([e("wcm-modal-footer")], ye);
const Wt = i`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var It = Object.defineProperty, Et = Object.getOwnPropertyDescriptor, te = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Et(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && It(o2, r, t2), t2;
};
let S = class extends s {
  constructor() {
    super(...arguments), this.title = "", this.onAction = void 0, this.actionIcon = void 0, this.border = false;
  }
  backBtnTemplate() {
    return x`<button class="wcm-back-btn" @click="${T$1.goBack}">${v.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return x`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const e2 = { "wcm-border": this.border }, o$1 = T$1.state.history.length > 1, r = this.title ? x`<wcm-text variant="big-bold">${this.title}</wcm-text>` : x`<slot></slot>`;
    return x`<header class="${o(e2)}">${o$1 ? this.backBtnTemplate() : null} ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
S.styles = [h.globalCss, Wt], te([n()], S.prototype, "title", 2), te([n()], S.prototype, "onAction", 2), te([n()], S.prototype, "actionIcon", 2), te([n({ type: Boolean })], S.prototype, "border", 2), S = te([e("wcm-modal-header")], S);
const c = { MOBILE_BREAKPOINT: 600, WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA", EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet", getShadowRootElement(e2, o2) {
  const r = e2.renderRoot.querySelector(o2);
  if (!r)
    throw new Error(`${o2} not found`);
  return r;
}, getWalletIcon({ id: e2, image_id: o2 }) {
  const { walletImages: r } = y.state;
  return r != null && r[e2] ? r[e2] : o2 ? te$1.getWalletImageUrl(o2) : "";
}, getWalletName(e2, o2 = false) {
  return o2 && e2.length > 8 ? `${e2.substring(0, 8)}..` : e2;
}, isMobileAnimation() {
  return window.innerWidth <= c.MOBILE_BREAKPOINT;
}, async preloadImage(e2) {
  const o2 = new Promise((r, a2) => {
    const t2 = new Image();
    t2.onload = r, t2.onerror = a2, t2.crossOrigin = "anonymous", t2.src = e2;
  });
  return Promise.race([o2, a.wait(3e3)]);
}, getErrorMessage(e2) {
  return e2 instanceof Error ? e2.message : "Unknown Error";
}, debounce(e2, o2 = 500) {
  let r;
  return (...a2) => {
    function t2() {
      e2(...a2);
    }
    r && clearTimeout(r), r = setTimeout(t2, o2);
  };
}, handleMobileLinking(e2) {
  const { walletConnectUri: o2 } = p.state, { mobile: r, name: a$1 } = e2, t2 = r?.native, l2 = r?.universal;
  c.setRecentWallet(e2);
  function i2(s2) {
    let $ = "";
    t2 ? $ = a.formatUniversalUrl(t2, s2, a$1) : l2 && ($ = a.formatNativeUrl(l2, s2, a$1)), a.openHref($, "_self");
  }
  o2 && i2(o2);
}, handleAndroidLinking() {
  const { walletConnectUri: e2 } = p.state;
  e2 && (a.setWalletConnectAndroidDeepLink(e2), a.openHref(e2, "_self"));
}, async handleUriCopy() {
  const { walletConnectUri: e2 } = p.state;
  if (e2)
    try {
      await navigator.clipboard.writeText(e2), oe$1.openToast("Link copied", "success");
    } catch {
      oe$1.openToast("Failed to copy", "error");
    }
}, getCustomImageUrls() {
  const { walletImages: e2 } = y.state, o2 = Object.values(e2 ?? {});
  return Object.values(o2);
}, truncate(e2, o2 = 8) {
  return e2.length <= o2 ? e2 : `${e2.substring(0, 4)}...${e2.substring(e2.length - 4)}`;
}, setRecentWallet(e2) {
  try {
    localStorage.setItem(c.WCM_RECENT_WALLET_DATA, JSON.stringify(e2));
  } catch {
    console.info("Unable to set recent wallet");
  }
}, getRecentWallet() {
  try {
    const e2 = localStorage.getItem(c.WCM_RECENT_WALLET_DATA);
    return e2 ? JSON.parse(e2) : void 0;
  } catch {
    console.info("Unable to get recent wallet");
  }
}, caseSafeIncludes(e2, o2) {
  return e2.toUpperCase().includes(o2.toUpperCase());
}, openWalletExplorerUrl() {
  a.openHref(c.EXPLORER_WALLET_URL, "_blank");
}, getCachedRouterWalletPlatforms() {
  const { desktop: e2, mobile: o2 } = a.getWalletRouterData(), r = Boolean(e2?.native), a$1 = Boolean(e2?.universal), t2 = Boolean(o2?.native) || Boolean(o2?.universal);
  return { isDesktop: r, isMobile: t2, isWeb: a$1 };
}, goToConnectingView(e2) {
  T$1.setData({ Wallet: e2 });
  const o2 = a.isMobile(), { isDesktop: r, isWeb: a$1, isMobile: t2 } = c.getCachedRouterWalletPlatforms();
  o2 ? t2 ? T$1.push("MobileConnecting") : a$1 ? T$1.push("WebConnecting") : T$1.push("InstallWallet") : r ? T$1.push("DesktopConnecting") : a$1 ? T$1.push("WebConnecting") : t2 ? T$1.push("MobileQrcodeConnecting") : T$1.push("InstallWallet");
} }, Mt = i`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var Lt = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, $e = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Rt(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Lt(o2, r, t2), t2;
};
let oe = class extends s {
  constructor() {
    super(), this.view = T$1.state.view, this.prevView = T$1.state.view, this.unsubscribe = void 0, this.oldHeight = "0px", this.resizeObserver = void 0, this.unsubscribe = T$1.subscribe((e2) => {
      this.view !== e2.view && this.onChangeRoute();
    });
  }
  firstUpdated() {
    this.resizeObserver = new ResizeObserver(([e2]) => {
      const o2 = `${e2.contentRect.height}px`;
      this.oldHeight !== "0px" && animate(this.routerEl, { height: [this.oldHeight, o2] }, { duration: 0.2 }), this.oldHeight = o2;
    }), this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var e2, o2;
    (e2 = this.unsubscribe) == null || e2.call(this), (o2 = this.resizeObserver) == null || o2.disconnect();
  }
  get routerEl() {
    return c.getShadowRootElement(this, ".wcm-router");
  }
  get contentEl() {
    return c.getShadowRootElement(this, ".wcm-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return x`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case "DesktopConnecting":
        return x`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case "MobileConnecting":
        return x`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case "WebConnecting":
        return x`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return x`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case "WalletExplorer":
        return x`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case "Qrcode":
        return x`<wcm-qrcode-view></wcm-qrcode-view>`;
      case "InstallWallet":
        return x`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return x`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await animate(this.routerEl, { opacity: [1, 0], scale: [1, 1.02] }, { duration: 0.15, delay: 0.1 }).finished, this.view = T$1.state.view, animate(this.routerEl, { opacity: [0, 1], scale: [0.99, 1] }, { duration: 0.37, delay: 0.05 });
  }
  render() {
    return x`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
oe.styles = [h.globalCss, Mt], $e([t()], oe.prototype, "view", 2), $e([t()], oe.prototype, "prevView", 2), oe = $e([e("wcm-modal-router")], oe);
const At = i`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var Pt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, ze = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Tt(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Pt(o2, r, t2), t2;
};
let ne = class extends s {
  constructor() {
    super(), this.open = false, this.unsubscribe = void 0, this.timeout = void 0, this.unsubscribe = oe$1.subscribe((e2) => {
      e2.open ? (this.open = true, this.timeout = setTimeout(() => oe$1.closeToast(), 2200)) : (this.open = false, clearTimeout(this.timeout));
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribe) == null || e2.call(this), clearTimeout(this.timeout), oe$1.closeToast();
  }
  render() {
    const { message: e2, variant: o$1 } = oe$1.state, r = { "wcm-success": o$1 === "success", "wcm-error": o$1 === "error" };
    return this.open ? x`<div class="${o(r)}">${o$1 === "success" ? v.CHECKMARK_ICON : null} ${o$1 === "error" ? v.CROSS_ICON : null}<wcm-text variant="small-regular">${e2}</wcm-text></div>` : null;
  }
};
ne.styles = [h.globalCss, At], ze([t()], ne.prototype, "open", 2), ne = ze([e("wcm-modal-toast")], ne);
const jt = 0.1, Ve = 2.5, A = 7;
function Ce(e2, o2, r) {
  return e2 === o2 ? false : (e2 - o2 < 0 ? o2 - e2 : e2 - o2) <= r + jt;
}
function _t(e2, o2) {
  const r = Array.prototype.slice.call(browser.create(e2, { errorCorrectionLevel: o2 }).modules.data, 0), a2 = Math.sqrt(r.length);
  return r.reduce((t2, l2, i2) => (i2 % a2 === 0 ? t2.push([l2]) : t2[t2.length - 1].push(l2)) && t2, []);
}
const Dt = { generate(e2, o2, r) {
  const a2 = "#141414", t2 = "#ffffff", l2 = [], i2 = _t(e2, "Q"), s2 = o2 / i2.length, $ = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }];
  $.forEach(({ x: y2, y: u }) => {
    const O = (i2.length - A) * s2 * y2, b$1 = (i2.length - A) * s2 * u, E = 0.45;
    for (let M = 0; M < $.length; M += 1) {
      const V = s2 * (A - M * 2);
      l2.push(b`<rect fill="${M % 2 === 0 ? a2 : t2}" height="${V}" rx="${V * E}" ry="${V * E}" width="${V}" x="${O + s2 * M}" y="${b$1 + s2 * M}">`);
    }
  });
  const f = Math.floor((r + 25) / s2), Ne = i2.length / 2 - f / 2, Ze = i2.length / 2 + f / 2 - 1, Se = [];
  i2.forEach((y2, u) => {
    y2.forEach((O, b2) => {
      if (i2[u][b2] && !(u < A && b2 < A || u > i2.length - (A + 1) && b2 < A || u < A && b2 > i2.length - (A + 1)) && !(u > Ne && u < Ze && b2 > Ne && b2 < Ze)) {
        const E = u * s2 + s2 / 2, M = b2 * s2 + s2 / 2;
        Se.push([E, M]);
      }
    });
  });
  const J = {};
  return Se.forEach(([y2, u]) => {
    J[y2] ? J[y2].push(u) : J[y2] = [u];
  }), Object.entries(J).map(([y2, u]) => {
    const O = u.filter((b2) => u.every((E) => !Ce(b2, E, s2)));
    return [Number(y2), O];
  }).forEach(([y2, u]) => {
    u.forEach((O) => {
      l2.push(b`<circle cx="${y2}" cy="${O}" fill="${a2}" r="${s2 / Ve}">`);
    });
  }), Object.entries(J).filter(([y2, u]) => u.length > 1).map(([y2, u]) => {
    const O = u.filter((b2) => u.some((E) => Ce(b2, E, s2)));
    return [Number(y2), O];
  }).map(([y2, u]) => {
    u.sort((b2, E) => b2 < E ? -1 : 1);
    const O = [];
    for (const b2 of u) {
      const E = O.find((M) => M.some((V) => Ce(b2, V, s2)));
      E ? E.push(b2) : O.push([b2]);
    }
    return [y2, O.map((b2) => [b2[0], b2[b2.length - 1]])];
  }).forEach(([y2, u]) => {
    u.forEach(([O, b$1]) => {
      l2.push(b`<line x1="${y2}" x2="${y2}" y1="${O}" y2="${b$1}" stroke="${a2}" stroke-width="${s2 / (Ve / 2)}" stroke-linecap="round">`);
    });
  }), l2;
} }, Nt = i`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var Zt = Object.defineProperty, St = Object.getOwnPropertyDescriptor, q = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? St(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Zt(o2, r, t2), t2;
};
let j = class extends s {
  constructor() {
    super(...arguments), this.uri = "", this.size = 0, this.imageId = void 0, this.walletId = void 0, this.imageUrl = void 0;
  }
  svgTemplate() {
    const e2 = ne$1.state.themeMode === "light" ? this.size : this.size - 36;
    return b`<svg height="${e2}" width="${e2}">${Dt.generate(this.uri, e2, e2 / 4)}</svg>`;
  }
  render() {
    const e2 = { "wcm-dark": ne$1.state.themeMode === "dark" };
    return x`<div style="${`width: ${this.size}px`}" class="${o(e2)}">${this.walletId || this.imageUrl ? x`<wcm-wallet-image walletId="${l(this.walletId)}" imageId="${l(this.imageId)}" imageUrl="${l(this.imageUrl)}"></wcm-wallet-image>` : v.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
j.styles = [h.globalCss, Nt], q([n()], j.prototype, "uri", 2), q([n({ type: Number })], j.prototype, "size", 2), q([n()], j.prototype, "imageId", 2), q([n()], j.prototype, "walletId", 2), q([n()], j.prototype, "imageUrl", 2), j = q([e("wcm-qrcode")], j);
const Bt = i`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var Ut = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Fe = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Ht(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Ut(o2, r, t2), t2;
};
let ce = class extends s {
  constructor() {
    super(...arguments), this.onChange = () => null;
  }
  render() {
    return x`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${v.SEARCH_ICON}`;
  }
};
ce.styles = [h.globalCss, Bt], Fe([n()], ce.prototype, "onChange", 2), ce = Fe([e("wcm-search-input")], ce);
const zt = i`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var Vt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, qt = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Ft(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Vt(o2, r, t2), t2;
};
let ke = class extends s {
  render() {
    return x`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
ke.styles = [h.globalCss, zt], ke = qt([e("wcm-spinner")], ke);
const Qt = i`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var Kt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Oe = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Yt(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Kt(o2, r, t2), t2;
};
let re = class extends s {
  constructor() {
    super(...arguments), this.variant = "medium-regular", this.color = "primary";
  }
  render() {
    const e2 = { "wcm-big-bold": this.variant === "big-bold", "wcm-medium-regular": this.variant === "medium-regular", "wcm-small-regular": this.variant === "small-regular", "wcm-small-thin": this.variant === "small-thin", "wcm-xsmall-regular": this.variant === "xsmall-regular", "wcm-xsmall-bold": this.variant === "xsmall-bold", "wcm-color-primary": this.color === "primary", "wcm-color-secondary": this.color === "secondary", "wcm-color-tertiary": this.color === "tertiary", "wcm-color-inverse": this.color === "inverse", "wcm-color-accnt": this.color === "accent", "wcm-color-error": this.color === "error" };
    return x`<span><slot class="${o(e2)}"></slot></span>`;
  }
};
re.styles = [h.globalCss, Qt], Oe([n()], re.prototype, "variant", 2), Oe([n()], re.prototype, "color", 2), re = Oe([e("wcm-text")], re);
const Gt = i`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var Xt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor, _ = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Jt(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Xt(o2, r, t2), t2;
};
let L = class extends s {
  constructor() {
    super(...arguments), this.onClick = () => null, this.name = "", this.walletId = "", this.label = void 0, this.imageId = void 0, this.installed = false, this.recent = false;
  }
  sublabelTemplate() {
    return this.recent ? x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>` : this.installed ? x`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>` : null;
  }
  handleClick() {
    R.click({ name: "WALLET_BUTTON", walletId: this.walletId }), this.onClick();
  }
  render() {
    var e2;
    return x`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${l(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(e2 = this.label) != null ? e2 : c.getWalletName(this.name, true)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
L.styles = [h.globalCss, Gt], _([n()], L.prototype, "onClick", 2), _([n()], L.prototype, "name", 2), _([n()], L.prototype, "walletId", 2), _([n()], L.prototype, "label", 2), _([n()], L.prototype, "imageId", 2), _([n({ type: Boolean })], L.prototype, "installed", 2), _([n({ type: Boolean })], L.prototype, "recent", 2), L = _([e("wcm-wallet-button")], L);
const eo = i`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var to = Object.defineProperty, oo = Object.getOwnPropertyDescriptor, se = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? oo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && to(o2, r, t2), t2;
};
let Q = class extends s {
  constructor() {
    super(...arguments), this.walletId = "", this.imageId = void 0, this.imageUrl = void 0;
  }
  render() {
    var e2;
    const o2 = (e2 = this.imageUrl) != null && e2.length ? this.imageUrl : c.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return x`${o2.length ? x`<div><img crossorigin="anonymous" src="${o2}" alt="${this.id}"></div>` : v.WALLET_PLACEHOLDER}`;
  }
};
Q.styles = [h.globalCss, eo], se([n()], Q.prototype, "walletId", 2), se([n()], Q.prototype, "imageId", 2), se([n()], Q.prototype, "imageUrl", 2), Q = se([e("wcm-wallet-image")], Q);
var ro = Object.defineProperty, ao = Object.getOwnPropertyDescriptor, qe = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? ao(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && ro(o2, r, t2), t2;
};
let We = class extends s {
  constructor() {
    super(), this.preload = true, this.preloadData();
  }
  async loadImages(e2) {
    try {
      e2 != null && e2.length && await Promise.all(e2.map(async (o2) => c.preloadImage(o2)));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", e2);
    }
  }
  async preloadListings() {
    if (y.state.enableExplorer) {
      await te$1.getRecomendedWallets(), p.setIsDataLoaded(true);
      const { recomendedWallets: e2 } = te$1.state, o2 = e2.map((r) => c.getWalletIcon(r));
      await this.loadImages(o2);
    } else
      p.setIsDataLoaded(true);
  }
  async preloadCustomImages() {
    const e2 = c.getCustomImageUrls();
    await this.loadImages(e2);
  }
  async preloadData() {
    try {
      this.preload && (this.preload = false, await Promise.all([this.preloadListings(), this.preloadCustomImages()]));
    } catch (e2) {
      console.error(e2), oe$1.openToast("Failed preloading", "error");
    }
  }
};
qe([t()], We.prototype, "preload", 2), We = qe([e("wcm-explorer-context")], We);
var lo = Object.defineProperty, io = Object.getOwnPropertyDescriptor, no = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? io(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && lo(o2, r, t2), t2;
};
let Qe = class extends s {
  constructor() {
    super(), this.unsubscribeTheme = void 0, h.setTheme(), this.unsubscribeTheme = ne$1.subscribe(h.setTheme);
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeTheme) == null || e2.call(this);
  }
};
Qe = no([e("wcm-theme-context")], Qe);
const co = i`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var so = Object.defineProperty, mo = Object.getOwnPropertyDescriptor, ho = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? mo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && so(o2, r, t2), t2;
};
let Ie = class extends s {
  onGoToQrcode() {
    T$1.push("Qrcode");
  }
  render() {
    const { recomendedWallets: e2 } = te$1.state, o2 = [...e2, ...e2], r = a.RECOMMENDED_WALLET_AMOUNT * 2;
    return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[...Array(r)].map((a2, t2) => {
      const l2 = o2[t2 % o2.length];
      return l2 ? x`<wcm-wallet-image walletId="${l2.id}" imageId="${l2.image_id}"></wcm-wallet-image>` : v.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${c.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
Ie.styles = [h.globalCss, co], Ie = ho([e("wcm-android-wallet-selection")], Ie);
const wo = i`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var po = Object.defineProperty, go = Object.getOwnPropertyDescriptor, K = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? go(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && po(o2, r, t2), t2;
};
let D = class extends s {
  constructor() {
    super(...arguments), this.walletId = void 0, this.imageId = void 0, this.isError = false, this.isStale = false, this.label = "";
  }
  svgLoaderTemplate() {
    var e2, o2;
    const r = (o2 = (e2 = ne$1.state.themeVariables) == null ? void 0 : e2["--wcm-wallet-icon-large-border-radius"]) != null ? o2 : h.getPreset("--wcm-wallet-icon-large-border-radius");
    let a2 = 0;
    r.includes("%") ? a2 = 88 / 100 * parseInt(r, 10) : a2 = parseInt(r, 10), a2 *= 1.17;
    const t2 = 317 - a2 * 1.57, l2 = 425 - a2 * 1.8;
    return x`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${a2}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${t2}" stroke-dashoffset="${l2}"></use></svg>`;
  }
  render() {
    const e2 = { "wcm-error": this.isError, "wcm-stale": this.isStale };
    return x`<div class="${o(e2)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${l(this.walletId)}" imageId="${l(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? "error" : "primary"}">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
  }
};
D.styles = [h.globalCss, wo], K([n()], D.prototype, "walletId", 2), K([n()], D.prototype, "imageId", 2), K([n({ type: Boolean })], D.prototype, "isError", 2), K([n({ type: Boolean })], D.prototype, "isStale", 2), K([n()], D.prototype, "label", 2), D = K([e("wcm-connector-waiting")], D);
const G = { manualWallets() {
  var e2, o2;
  const { mobileWallets: r, desktopWallets: a$1 } = y.state, t2 = (e2 = G.recentWallet()) == null ? void 0 : e2.id, l2 = a.isMobile() ? r : a$1, i2 = l2?.filter((s2) => t2 !== s2.id);
  return (o2 = a.isMobile() ? i2?.map(({ id: s2, name: $, links: f }) => ({ id: s2, name: $, mobile: f, links: f })) : i2?.map(({ id: s2, name: $, links: f }) => ({ id: s2, name: $, desktop: f, links: f }))) != null ? o2 : [];
}, recentWallet() {
  return c.getRecentWallet();
}, recomendedWallets(e2 = false) {
  var o2;
  const r = e2 || (o2 = G.recentWallet()) == null ? void 0 : o2.id, { recomendedWallets: a2 } = te$1.state;
  return a2.filter((t2) => r !== t2.id);
} }, Z = { onConnecting(e2) {
  c.goToConnectingView(e2);
}, manualWalletsTemplate() {
  return G.manualWallets().map((e2) => x`<wcm-wallet-button walletId="${e2.id}" name="${e2.name}" .onClick="${() => this.onConnecting(e2)}"></wcm-wallet-button>`);
}, recomendedWalletsTemplate(e2 = false) {
  return G.recomendedWallets(e2).map((o2) => x`<wcm-wallet-button name="${o2.name}" walletId="${o2.id}" imageId="${o2.image_id}" .onClick="${() => this.onConnecting(o2)}"></wcm-wallet-button>`);
}, recentWalletTemplate() {
  const e2 = G.recentWallet();
  if (e2)
    return x`<wcm-wallet-button name="${e2.name}" walletId="${e2.id}" imageId="${l(e2.image_id)}" .recent="${true}" .onClick="${() => this.onConnecting(e2)}"></wcm-wallet-button>`;
} }, vo = i`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var uo = Object.defineProperty, bo = Object.getOwnPropertyDescriptor, fo = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? bo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && uo(o2, r, t2), t2;
};
let Ee = class extends s {
  render() {
    const { explorerExcludedWalletIds: e2, enableExplorer: o2 } = y.state, r = e2 !== "ALL" && o2, a2 = Z.manualWalletsTemplate(), t2 = Z.recomendedWalletsTemplate();
    let l2 = [Z.recentWalletTemplate(), ...a2, ...t2];
    l2 = l2.filter(Boolean);
    const i2 = l2.length > 4 || r;
    let s2 = [];
    i2 ? s2 = l2.slice(0, 3) : s2 = l2;
    const $ = Boolean(s2.length);
    return x`<wcm-modal-header .border="${true}" title="Connect your wallet" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${v.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${v.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${$ ? x`<wcm-modal-footer><div class="wcm-desktop-title">${v.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${s2} ${i2 ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
  }
};
Ee.styles = [h.globalCss, vo], Ee = fo([e("wcm-desktop-wallet-selection")], Ee);
const xo = i`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var yo = Object.defineProperty, $o = Object.getOwnPropertyDescriptor, Co = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? $o(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && yo(o2, r, t2), t2;
};
let Me = class extends s {
  render() {
    const { termsOfServiceUrl: e2, privacyPolicyUrl: o2 } = y.state;
    return e2 ?? o2 ? x`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${e2 ? x`<a href="${e2}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${e2 && o2 ? "and" : null} ${o2 ? x`<a href="${o2}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>` : null;
  }
};
Me.styles = [h.globalCss, xo], Me = Co([e("wcm-legal-notice")], Me);
const ko = i`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Oo = Object.defineProperty, Wo = Object.getOwnPropertyDescriptor, Io = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Wo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Oo(o2, r, t2), t2;
};
let Le = class extends s {
  onQrcode() {
    T$1.push("Qrcode");
  }
  render() {
    const { explorerExcludedWalletIds: e2, enableExplorer: o2 } = y.state, r = e2 !== "ALL" && o2, a2 = Z.manualWalletsTemplate(), t2 = Z.recomendedWalletsTemplate();
    let l2 = [Z.recentWalletTemplate(), ...a2, ...t2];
    l2 = l2.filter(Boolean);
    const i2 = l2.length > 8 || r;
    let s2 = [];
    i2 ? s2 = l2.slice(0, 7) : s2 = l2;
    const $ = Boolean(s2.length);
    return x`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${v.QRCODE_ICON}"></wcm-modal-header>${$ ? x`<wcm-modal-content><div>${s2} ${i2 ? x`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
  }
};
Le.styles = [h.globalCss, ko], Le = Io([e("wcm-mobile-wallet-selection")], Le);
const Eo = i`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var Mo = Object.defineProperty, Lo = Object.getOwnPropertyDescriptor, Re = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Lo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Mo(o2, r, t2), t2;
};
let ae = class extends s {
  constructor() {
    super(), this.open = false, this.active = false, this.unsubscribeModal = void 0, this.abortController = void 0, this.unsubscribeModal = se$1.subscribe((e2) => {
      e2.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
    });
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.unsubscribeModal) == null || e2.call(this);
  }
  get overlayEl() {
    return c.getShadowRootElement(this, ".wcm-overlay");
  }
  get containerEl() {
    return c.getShadowRootElement(this, ".wcm-container");
  }
  toggleBodyScroll(e2) {
    if (document.querySelector("body"))
      if (e2) {
        const o2 = document.getElementById("wcm-styles");
        o2?.remove();
      } else
        document.head.insertAdjacentHTML("beforeend", '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>');
  }
  onCloseModal(e2) {
    e2.target === e2.currentTarget && se$1.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(false), this.addKeyboardEvents(), this.open = true, setTimeout(async () => {
      const e2 = c.isMobileAnimation() ? { y: ["50vh", "0vh"] } : { scale: [0.98, 1] }, o2 = 0.1, r = 0.2;
      await Promise.all([animate(this.overlayEl, { opacity: [0, 1] }, { delay: o2, duration: r }).finished, animate(this.containerEl, e2, { delay: o2, duration: r }).finished]), this.active = true;
    }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(true), this.removeKeyboardEvents();
    const e2 = c.isMobileAnimation() ? { y: ["0vh", "50vh"] } : { scale: [1, 0.98] }, o2 = 0.2;
    await Promise.all([animate(this.overlayEl, { opacity: [1, 0] }, { duration: o2 }).finished, animate(this.containerEl, e2, { duration: o2 }).finished]), this.containerEl.removeAttribute("style"), this.active = false, this.open = false;
  }
  addKeyboardEvents() {
    this.abortController = new AbortController(), window.addEventListener("keydown", (e2) => {
      var o2;
      e2.key === "Escape" ? se$1.close() : e2.key === "Tab" && ((o2 = e2.target) != null && o2.tagName.includes("wcm-") || this.containerEl.focus());
    }, this.abortController), this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var e2;
    (e2 = this.abortController) == null || e2.abort(), this.abortController = void 0;
  }
  render() {
    const e2 = { "wcm-overlay": true, "wcm-active": this.active };
    return x`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${o(e2)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? x`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
  }
};
ae.styles = [h.globalCss, Eo], Re([t()], ae.prototype, "open", 2), Re([t()], ae.prototype, "active", 2), ae = Re([e("wcm-modal")], ae);
const Ro = i`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var Ao = Object.defineProperty, Po = Object.getOwnPropertyDescriptor, le = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Po(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Ao(o2, r, t2), t2;
};
let B = class extends s {
  constructor() {
    super(...arguments), this.isMobile = false, this.isDesktop = false, this.isWeb = false, this.isRetry = false;
  }
  onMobile() {
    a.isMobile() ? T$1.replace("MobileConnecting") : T$1.replace("MobileQrcodeConnecting");
  }
  onDesktop() {
    T$1.replace("DesktopConnecting");
  }
  onWeb() {
    T$1.replace("WebConnecting");
  }
  render() {
    return x`<div>${this.isRetry ? x`<slot></slot>` : null} ${this.isMobile ? x`<wcm-button .onClick="${this.onMobile}" .iconLeft="${v.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? x`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${v.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? x`<wcm-button .onClick="${this.onWeb}" .iconLeft="${v.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
  }
};
B.styles = [h.globalCss, Ro], le([n({ type: Boolean })], B.prototype, "isMobile", 2), le([n({ type: Boolean })], B.prototype, "isDesktop", 2), le([n({ type: Boolean })], B.prototype, "isWeb", 2), le([n({ type: Boolean })], B.prototype, "isRetry", 2), B = le([e("wcm-platform-selection")], B);
const To = i`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var jo = Object.defineProperty, _o = Object.getOwnPropertyDescriptor, Do = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? _o(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && jo(o2, r, t2), t2;
};
let Ae = class extends s {
  onClick() {
    T$1.push("WalletExplorer");
  }
  render() {
    const { recomendedWallets: e2 } = te$1.state, o2 = G.manualWallets(), r = [...e2, ...o2].reverse().slice(0, 4);
    return x`<button @click="${this.onClick}"><div class="wcm-icons">${r.map((a2) => {
      const t2 = c.getWalletIcon(a2);
      if (t2)
        return x`<img crossorigin="anonymous" src="${t2}">`;
      const l2 = c.getWalletIcon({ id: a2.id });
      return l2 ? x`<img crossorigin="anonymous" src="${l2}">` : v.WALLET_PLACEHOLDER;
    })} ${[...Array(4 - r.length)].map(() => v.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
Ae.styles = [h.globalCss, To], Ae = Do([e("wcm-view-all-wallets-button")], Ae);
const No = i`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var Zo = Object.defineProperty, So = Object.getOwnPropertyDescriptor, de = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? So(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Zo(o2, r, t2), t2;
};
let Y = class extends s {
  constructor() {
    super(), this.walletId = "", this.imageId = "", this.uri = "", setTimeout(() => {
      const { walletConnectUri: e2 } = p.state;
      this.uri = e2;
    }, 0);
  }
  get overlayEl() {
    return c.getShadowRootElement(this, ".wcm-qr-container");
  }
  render() {
    return x`<div class="wcm-qr-container">${this.uri ? x`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${l(this.walletId)}" imageId="${l(this.imageId)}"></wcm-qrcode>` : x`<wcm-spinner></wcm-spinner>`}</div>`;
  }
};
Y.styles = [h.globalCss, No], de([n()], Y.prototype, "walletId", 2), de([n()], Y.prototype, "imageId", 2), de([t()], Y.prototype, "uri", 2), Y = de([e("wcm-walletconnect-qr")], Y);
var Bo = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, Ho = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Uo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Bo(o2, r, t2), t2;
};
let Pe = class extends s {
  viewTemplate() {
    return a.isAndroid() ? x`<wcm-android-wallet-selection></wcm-android-wallet-selection>` : a.isMobile() ? x`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>` : x`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  render() {
    return x`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
Pe.styles = [h.globalCss], Pe = Ho([e("wcm-connect-wallet-view")], Pe);
const zo = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Vo = Object.defineProperty, Fo = Object.getOwnPropertyDescriptor, Ke = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Fo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Vo(o2, r, t2), t2;
};
let me = class extends s {
  constructor() {
    super(), this.isError = false, this.openDesktopApp();
  }
  onFormatAndRedirect(e2) {
    const { desktop: o2, name: r } = a.getWalletRouterData(), a$1 = o2?.native;
    if (a$1) {
      const t2 = a.formatNativeUrl(a$1, e2, r);
      a.openHref(t2, "_self");
    }
  }
  openDesktopApp() {
    const { walletConnectUri: e2 } = p.state, o2 = a.getWalletRouterData();
    c.setRecentWallet(o2), e2 && this.onFormatAndRedirect(e2);
  }
  render() {
    const { name: e2, id: o2, image_id: r } = a.getWalletRouterData(), { isMobile: a$1, isWeb: t2 } = c.getCachedRouterWalletPlatforms();
    return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r)}" label="${`Continue in ${e2}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e2} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${a$1}" .isWeb="${t2}" .isRetry="${true}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
me.styles = [h.globalCss, zo], Ke([t()], me.prototype, "isError", 2), me = Ke([e("wcm-desktop-connecting-view")], me);
const qo = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var Qo = Object.defineProperty, Ko = Object.getOwnPropertyDescriptor, Yo = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Ko(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Qo(o2, r, t2), t2;
};
let Te = class extends s {
  onInstall(e2) {
    e2 && a.openHref(e2, "_blank");
  }
  render() {
    const { name: e2, id: o2, image_id: r, homepage: a$1 } = a.getWalletRouterData();
    return x`<wcm-modal-header title="${e2}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r)}" label="Not Detected" .isStale="${true}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e2} to continue. If multiple browser extensions are installed, disable non ${e2} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(a$1)}" .iconLeft="${v.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
  }
};
Te.styles = [h.globalCss, qo], Te = Yo([e("wcm-install-wallet-view")], Te);
const Go = i`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var Xo = Object.defineProperty, Jo = Object.getOwnPropertyDescriptor, Ye = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? Jo(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && Xo(o2, r, t2), t2;
};
let he = class extends s {
  constructor() {
    super(), this.isError = false, this.openMobileApp();
  }
  onFormatAndRedirect(e2, o2 = false) {
    const { mobile: r, name: a$1 } = a.getWalletRouterData(), t2 = r?.native, l2 = r?.universal;
    if (t2 && !o2) {
      const i2 = a.formatNativeUrl(t2, e2, a$1);
      a.openHref(i2, "_self");
    } else if (l2) {
      const i2 = a.formatUniversalUrl(l2, e2, a$1);
      a.openHref(i2, "_self");
    }
  }
  openMobileApp(e2 = false) {
    const { walletConnectUri: o2 } = p.state, r = a.getWalletRouterData();
    c.setRecentWallet(r), o2 && this.onFormatAndRedirect(o2, e2);
  }
  onGoToAppStore(e2) {
    e2 && a.openHref(e2, "_blank");
  }
  render() {
    const { name: e2, id: o2, image_id: r, app: a$1, mobile: t2 } = a.getWalletRouterData(), { isWeb: l$1 } = c.getCachedRouterWalletPlatforms(), i2 = a$1?.ios, s2 = t2?.universal;
    return x`<wcm-modal-header title="${e2}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${l$1}" .isRetry="${true}"><wcm-button .onClick="${() => this.openMobileApp(false)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${s2 ? x`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(true)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${o2}" imageId="${l(r)}"></wcm-wallet-image><wcm-text>${`Get ${e2}`}</wcm-text></div><wcm-button .iconRight="${v.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(i2)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
he.styles = [h.globalCss, Go], Ye([t()], he.prototype, "isError", 2), he = Ye([e("wcm-mobile-connecting-view")], he);
const er = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var tr = Object.defineProperty, or = Object.getOwnPropertyDescriptor, rr = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? or(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && tr(o2, r, t2), t2;
};
let je = class extends s {
  render() {
    const { name: e2, id: o2, image_id: r } = a.getWalletRouterData(), { isDesktop: a$1, isWeb: t2 } = c.getCachedRouterWalletPlatforms();
    return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${o2}" imageId="${l(r)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e2} app`}</wcm-text><wcm-platform-selection .isDesktop="${a$1}" .isWeb="${t2}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
je.styles = [h.globalCss, er], je = rr([e("wcm-mobile-qr-connecting-view")], je);
var ar = Object.defineProperty, lr = Object.getOwnPropertyDescriptor, ir = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? lr(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && ar(o2, r, t2), t2;
};
let _e = class extends s {
  render() {
    return x`<wcm-modal-header title="Scan the code" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
_e.styles = [h.globalCss], _e = ir([e("wcm-qrcode-view")], _e);
const nr = i`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var cr = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, ie = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? sr(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && cr(o2, r, t2), t2;
};
const De = 40;
let U = class extends s {
  constructor() {
    super(...arguments), this.loading = !te$1.state.wallets.listings.length, this.firstFetch = !te$1.state.wallets.listings.length, this.search = "", this.endReached = false, this.intersectionObserver = void 0, this.searchDebounce = c.debounce((e2) => {
      e2.length >= 1 ? (this.firstFetch = true, this.endReached = false, this.search = e2, te$1.resetSearch(), this.fetchWallets()) : this.search && (this.search = "", this.endReached = this.isLastPage(), te$1.resetSearch());
    });
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e2;
    (e2 = this.intersectionObserver) == null || e2.disconnect();
  }
  get placeholderEl() {
    return c.getShadowRootElement(this, ".wcm-placeholder-block");
  }
  createPaginationObserver() {
    this.intersectionObserver = new IntersectionObserver(([e2]) => {
      e2.isIntersecting && !(this.search && this.firstFetch) && this.fetchWallets();
    }), this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: e2, search: o2 } = te$1.state, { listings: r, total: a2 } = this.search ? o2 : e2;
    return a2 <= De || r.length >= a2;
  }
  async fetchWallets() {
    var e2;
    const { wallets: o2, search: r } = te$1.state, { listings: a$1, total: t2, page: l2 } = this.search ? r : o2;
    if (!this.endReached && (this.firstFetch || t2 > De && a$1.length < t2))
      try {
        this.loading = true;
        const i2 = (e2 = p.state.chains) == null ? void 0 : e2.join(","), { listings: s2 } = await te$1.getWallets({ page: this.firstFetch ? 1 : l2 + 1, entries: De, search: this.search, version: 2, chains: i2 }), $ = s2.map((f) => c.getWalletIcon(f));
        await Promise.all([...$.map(async (f) => c.preloadImage(f)), a.wait(300)]), this.endReached = this.isLastPage();
      } catch (i2) {
        console.error(i2), oe$1.openToast(c.getErrorMessage(i2), "error");
      } finally {
        this.loading = false, this.firstFetch = false;
      }
  }
  onConnect(e2) {
    a.isAndroid() ? c.handleMobileLinking(e2) : c.goToConnectingView(e2);
  }
  onSearchChange(e2) {
    const { value: o2 } = e2.target;
    this.searchDebounce(o2);
  }
  render() {
    const { wallets: e2, search: o$1 } = te$1.state, { listings: r } = this.search ? o$1 : e2, a2 = this.loading && !r.length, t2 = this.search.length >= 3;
    let l2 = Z.manualWalletsTemplate(), i2 = Z.recomendedWalletsTemplate(true);
    t2 && (l2 = l2.filter(({ values: f }) => c.caseSafeIncludes(f[0], this.search)), i2 = i2.filter(({ values: f }) => c.caseSafeIncludes(f[0], this.search)));
    const s2 = !this.loading && !r.length && !i2.length, $ = { "wcm-loading": a2, "wcm-end-reached": this.endReached || !this.loading, "wcm-empty": s2 };
    return x`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${o($)}"><div class="wcm-grid">${a2 ? null : l2} ${a2 ? null : i2} ${a2 ? null : r.map((f) => x`${f ? x`<wcm-wallet-button imageId="${f.image_id}" name="${f.name}" walletId="${f.id}" .onClick="${() => this.onConnect(f)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${s2 ? x`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!s2 && this.loading ? x`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
  }
};
U.styles = [h.globalCss, nr], ie([t()], U.prototype, "loading", 2), ie([t()], U.prototype, "firstFetch", 2), ie([t()], U.prototype, "search", 2), ie([t()], U.prototype, "endReached", 2), U = ie([e("wcm-wallet-explorer-view")], U);
const dr = i`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var mr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, Ge = (e2, o2, r, a2) => {
  for (var t2 = a2 > 1 ? void 0 : a2 ? hr(o2, r) : o2, l2 = e2.length - 1, i2; l2 >= 0; l2--)
    (i2 = e2[l2]) && (t2 = (a2 ? i2(o2, r, t2) : i2(t2)) || t2);
  return a2 && t2 && mr(o2, r, t2), t2;
};
let we = class extends s {
  constructor() {
    super(), this.isError = false, this.openWebWallet();
  }
  onFormatAndRedirect(e2) {
    const { desktop: o2, name: r } = a.getWalletRouterData(), a$1 = o2?.universal;
    if (a$1) {
      const t2 = a.formatUniversalUrl(a$1, e2, r);
      a.openHref(t2, "_blank");
    }
  }
  openWebWallet() {
    const { walletConnectUri: e2 } = p.state, o2 = a.getWalletRouterData();
    c.setRecentWallet(o2), e2 && this.onFormatAndRedirect(e2);
  }
  render() {
    const { name: e2, id: o2, image_id: r } = a.getWalletRouterData(), { isMobile: a$1, isDesktop: t2 } = c.getCachedRouterWalletPlatforms(), l$1 = a.isMobile();
    return x`<wcm-modal-header title="${e2}" .onAction="${c.handleUriCopy}" .actionIcon="${v.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${o2}" imageId="${l(r)}" label="${`Continue in ${e2}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e2} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${a$1}" .isDesktop="${l$1 ? false : t2}" .isRetry="${true}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${v.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
we.styles = [h.globalCss, dr], Ge([t()], we.prototype, "isError", 2), we = Ge([e("wcm-web-connecting-view")], we);
export {
  ae as WcmModal,
  j as WcmQrCode
};
