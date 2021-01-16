/**
 * 账号相关路由 - no JWT
 */
const router = require('koa-router')();
const { baseURL } = require('../config');
const { validator, res } = require('../utils');
const { registerSchema } = require('../validator/account');
const { register } = require('../service/account');

router.prefix(`${baseURL}/account`);

/**
 * 用户注册
 */
router.post('/register', async (ctx) => {
  const { details } = validator(registerSchema, ctx.request.body);
  if (details) {
    res.validatorErr(ctx, details);
  } else {
    register(ctx.request.body);
    res.success(ctx);
  }
});

/**
 * 邮箱/手机号、密码登录
 */
router.post('/login', async (ctx) => {

});

/**
 * 邮箱/手机号、验证码登录
 */
router.post('/login/verification', async (ctx) => {

});

/**
 * 找回密码（通过验证码修改密码）
 */
router.post('/change/verification', async (ctx) => {

});

/**
  * 通过原密码修改密码
  */
router.post('/change/password', async (ctx) => {

});

/**
 * 邮箱/手机号获取验证码
 */
router.post('/verification', async (ctx) => {

});

module.exports = router;
