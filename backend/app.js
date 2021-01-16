const Koa = require('koa');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const { res } = require('./utils');

const app = new Koa();

// 引入数据库
require('./utils/db');

// 中间件
app.use(logger());
app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));

// 处理 404 500
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err, ctx);
    res.serverErr(ctx, err);
  }
  if (parseInt(ctx.status, 10) === 404) {
    res.notFoundErr(ctx);
  }
});

// 引入路由
const accountRoute = require('./routes/account');

// 配置路由
app.use(accountRoute.routes(), accountRoute.allowedMethods());

// 错误处理
app.on('error', (err, ctx) => {
  // eslint-disable-next-line no-console
  console.error(err, ctx);
});

module.exports = app;
