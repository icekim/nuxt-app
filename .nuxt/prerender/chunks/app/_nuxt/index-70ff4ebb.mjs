import { _ as __nuxt_component_0 } from './nuxt-link-563b35af.mjs';
import { withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file://C:/Users/reyes/nuxt3-app/node_modules/vue/index.mjs';
import { u as useFetch } from './fetch-a9a85dce.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/reyes/nuxt3-app/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/ufo/dist/index.mjs';
import '../server.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/reyes/nuxt3-app/node_modules/h3/dist/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/tickers/?limit=10", "$PslAyef5YX")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}><h1>Index Page</h1><table border="1 px solid"><thead><tr><th>Name</th><th>Symbol</th><th>Price</th><th>Details</th></tr></thead><!--[-->`);
      ssrRenderList(unref(data).data, (currency) => {
        _push(`<tr><td>${ssrInterpolate(currency.name)}</td><td>${ssrInterpolate(currency.symbol)}</td><td>${ssrInterpolate(currency.price_usd)}</td><td>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/currency/" + currency.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(currency.id)}`);
            } else {
              return [
                createTextVNode(toDisplayString(currency.id), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</td></tr>`);
      });
      _push(`<!--]--></table></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-70ff4ebb.mjs.map
