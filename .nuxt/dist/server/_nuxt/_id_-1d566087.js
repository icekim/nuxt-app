import { withAsyncContext, unref, useSSRContext } from "vue";
import "hookable";
import { a as useRoute } from "../server.mjs";
import { u as useFetch } from "./fetch-a9a85dce.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "defu";
import "ohash";
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/ticker/?id=" + route.params.id, "$2vkVphECD9")), __temp = await __temp, __restore(), __temp);
    const coin = data.value[0];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h2>${ssrInterpolate(unref(coin).name)} Detail page</h2><table border="1 px solid"><thead><th>Symbol</th><th>Rank</th><th>Price - US $</th><th>Market Cap - US $</th></thead><tr><td>${ssrInterpolate(unref(coin).symbol)}</td><td>${ssrInterpolate(unref(coin).rank)}</td><td>${ssrInterpolate(unref(coin).price_usd)}</td><td>${ssrInterpolate(unref(coin).market_cap_usd)}</td></tr></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/currency/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-1d566087.js.map
