import { defineEventHandler } from 'file://C:/Users/reyes/nuxt3-app/node_modules/h3/dist/index.mjs';

const _____ = defineEventHandler((event) => {
  return $fetch(`https://api.coinlore.net${event.node.req.url}`);
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
