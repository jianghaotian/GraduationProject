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
  type: Joi.string().valid('email', 'phone'),
  // 用户名
  name: Joi.string().trim().required(),
};

module.exports = common;
