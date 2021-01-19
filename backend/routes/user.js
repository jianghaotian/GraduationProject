/**
 * 路由 - 用户信息
 */
const router = require('koa-router')();
const { baseURL } = require('../config');
const genRouter = require('../utils/router');
const {
  changeEmailSchema,
  changePhoneSchema,
  getInfoSchema,
  changeInfoSchema,
  changeHeadSchema,
  searchSchema,
} = require('../validator/user');
const {
  changeEmail,
  changePhone,
  getInfo,
  changeInfo,
  changeHead,
  search,
} = require('../service/user');

router.prefix(`${baseURL}/user`);

/**
 * 修改邮箱
 */
router.post('/change/email', async (ctx) => {
  await genRouter({
    ctx,
    schema: changeEmailSchema,
    data: ctx.request.body,
    service: changeEmail,
  });
});

/**
 * 修改手机号
 */
router.post('/change/phone', async (ctx) => {
  await genRouter({
    ctx,
    schema: changePhoneSchema,
    data: ctx.request.body,
    service: changePhone,
  });
});

/**
 * 获取用户基本信息
 */
router.get('/info', async (ctx) => {
  await genRouter({
    ctx,
    schema: getInfoSchema,
    data: ctx.query,
    service: getInfo,
  });
});

/**
 * 修改用户基本信息
 */
router.post('/info', async (ctx) => {
  await genRouter({
    ctx,
    schema: changeInfoSchema,
    data: ctx.request.body,
    service: changeInfo,
  });
});

/**
 * 修改用户头像
 */
router.post('/head', async (ctx) => {
  await genRouter({
    ctx,
    schema: changeHeadSchema,
    data: ctx.request.body,
    service: changeHead,
  });
});

/**
 * 搜索用户
 */
router.get('/search', async (ctx) => {
  await genRouter({
    ctx,
    schema: searchSchema,
    data: ctx.query,
    service: search,
  });
});

module.exports = router;
