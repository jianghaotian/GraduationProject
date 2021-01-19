/**
 * 验证器 - 指定变量
 */
const Joi = require('joi');
const { veriLen, pwdLen } = require('../config');

const common = {
  // 邮箱/手机号
  username: Joi.string().trim().required(),
  // 密码
  password: Joi.string().trim().min(pwdLen[0]).max(pwdLen[1])
    .required(),
  // 验证码
  verification: Joi.string().trim().length(veriLen).required(),
  // 类型
  type: Joi.string().valid('email', 'phone').required(),
  // 用户名
  name: Joi.string().trim().required(),
  // 邮箱
  email: Joi.string().trim().email().required(),
  // 手机号
  phone: Joi.string().trim().pattern(/^1[0-9]{10}$/, 'phone').required(),

  // 字符串
  string: Joi.string(),
};

module.exports = common;
