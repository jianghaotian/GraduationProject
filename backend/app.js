const Koa = require('koa');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');

const app = new Koa();

// 引入数据库
require('./utils/db');

// 中间件
app.use(logger());
app.use(bodyparser({ enableTypes: ['json', 'form', 'text'] }));

// 引入路由
const accountRoute = require('./routes/account');

// 配置路由
app.use(accountRoute.routes(), accountRoute.allowedMethods());

// 错误处理
app.on('error', (err, ctx) => {
  // eslint-disable-next-line no-console
  console.error('server error', err, ctx);
});

module.exports = app;
