/**
 * 账号相关路由 - no JWT
 */
const router = require('koa-router')();

router.prefix('/users');

router.get('/', (ctx) => {
  ctx.body = { name: 'haha' };
});

module.exports = router;
