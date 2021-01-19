/**
 * 路由 - 账号相关 - no JWT
 */
const router = require('koa-router')();
const { baseURL } = require('../config');
const genRouter = require('../utils/router');
const {
  registerSchema,
  loginSchema,
  loginByVeriSchema,
  changeByVeriSchema,
  changePasswordSchema,
  verificationSchema,
} = require('../validator/account');
const {
  register,
  login,
  loginByVerification,
  changeByVerification,
  changePassword,
  verification,
} = require('../service/account');

router.prefix(`${baseURL}/account`);

/**
 * 用户注册
 */
router.post('/register', async (ctx) => {
  await genRouter({
    ctx,
    schema: registerSchema,
    data: ctx.request.body,
    service: register,
  });
});

/**
 * 邮箱/手机号、密码登录
 */
router.post('/login', async (ctx) => {
  await genRouter({
    ctx,
    schema: loginSchema,
    data: ctx.request.body,
    service: login,
  });
});

/**
 * 邮箱/手机号、验证码登录
 */
router.post('/login/verification', async (ctx) => {
  await genRouter({
    ctx,
    schema: loginByVeriSchema,
    data: ctx.request.body,
    service: loginByVerification,
  });
});

/**
 * 找回密码（通过验证码修改密码）
 */
router.post('/change/verification', async (ctx) => {
  await genRouter({
    ctx,
    schema: changeByVeriSchema,
    data: ctx.request.body,
    service: changeByVerification,
  });
});

/**
 * 通过原密码修改密码
 */
router.post('/change', async (ctx) => {
  await genRouter({
    ctx,
    schema: changePasswordSchema,
    data: ctx.request.body,
    service: changePassword,
  });
});

/**
 * 邮箱/手机号获取验证码
 */
router.post('/verification', async (ctx) => {
  await genRouter({
    ctx,
    schema: verificationSchema,
    data: ctx.request.body,
    service: verification,
  });
});

module.exports = router;
