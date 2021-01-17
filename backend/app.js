const Koa = require('koa');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const res = require('./utils/res');

const app = new Koa();

// 应用程序初始化
// eslint-disable-next-line no-console
console.log('application initialization...');

// 中间件
app.use(logger());
app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));

// 处理 404 500
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    res.serverErr(ctx, err);
    // eslint-disable-next-line no-console
    console.error(err, ctx);
  }
  if (parseInt(ctx.status, 10) === 404) {
    res.notFoundErr(ctx);
  }
});

// 引入路由
const accountRoute = require('./routes/account');

// 配置路由
app.use(accountRoute.routes(), accountRoute.allowedMethods());

// 应用程序初始化完成
// eslint-disable-next-line no-console
console.log('application initialization --- OK');

// 错误处理
app.on('error', (err, ctx) => {
  // eslint-disable-next-line no-console
  console.error(err, ctx);
});

module.exports = app;
