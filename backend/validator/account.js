/**
 * 验证器 - 账号相关
 */
const Joi = require('joi');
const { veriLen, pwdLen } = require('../config');

/**
 * 用户注册
 */
const registerSchema = Joi.object({
  username: Joi.string().trim().required(),
  password: Joi.string().trim().min(pwdLen[0]).max(pwdLen[1])
    .required(),
  verification: Joi.string().length(veriLen).required(),
  type: Joi.string().valid('email', 'phone'),
  name: Joi.string().trim().required(),
});

module.exports = {
  registerSchema,
};
