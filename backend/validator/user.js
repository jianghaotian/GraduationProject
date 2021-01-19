/**
 * 验证器 - 用户信息
 */
const Joi = require('joi');
const {
  username, verification, name, email, phone,
} = require('./common');

/**
 * 修改邮箱
 */
const changeEmailSchema = Joi.object({
  email,
  verification,
});

/**
 * 修改手机号
 */
const changePhoneSchema = Joi.object({
  phone,
  verification,
});

/**
 * 获取用户基本信息
 */
const getInfoSchema = Joi.any();

/**
 * 修改用户基本信息
 */
const changeInfoSchema = Joi.object({
  name,
});

/**
 * 修改用户头像
 */
const changeHeadSchema = Joi.any();

/**
 * 搜索用户
 */
const searchSchema = Joi.object({
  username,
});

module.exports = {
  changeEmailSchema,
  changePhoneSchema,
  getInfoSchema,
  changeInfoSchema,
  changeHeadSchema,
  searchSchema,
};
