import { withAsyncContext, unref, useSSRContext } from 'file://C:/Users/reyes/nuxt3-app/node_modules/vue/index.mjs';
import { a as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-a9a85dce.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://C:/Users/reyes/nuxt3-app/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/pathe/dist/index.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=_id_-1d566087.mjs.map
