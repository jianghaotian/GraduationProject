/**
 * 验证器 - 账号相关
 */
const Joi = require('joi');
const {
  username, password, verification, type, name,
} = require('./common');

/**
 * 用户注册
 */
const registerSchema = Joi.object({
  username,
  password,
  verification,
  type,
  name,
});

/**
 * 邮箱/手机号、密码登录
 */
const loginSchema = Joi.object({
  username,
  password,
  type,
});

/**
 * 邮箱/手机号、验证码登录
 */
const loginByVeriSchema = Joi.object({
  username,
  verification,
  type,
});

/**
 * 找回密码（通过验证码修改密码）
 */
const changeByVeriSchema = Joi.object({
  username,
  newPassword: password,
  verification,
  type,
});

/**
 * 通过原密码修改密码
 */
const changePasswordSchema = Joi.object({
  username,
  password,
  newPassword: password,
  type,
});

/**
 * 邮箱/手机号获取验证码
 */
const verificationSchema = Joi.object({
  username,
  type,
});

module.exports = {
  registerSchema,
  loginSchema,
  loginByVeriSchema,
  changeByVeriSchema,
  changePasswordSchema,
  verificationSchema,
};
