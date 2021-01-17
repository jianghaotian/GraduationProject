/**
 * 服务 - 账号相关
 */
const {
  insertVeri,
  deleteVeri,
  queryVeriTime,
  insertUser,
  updatePwdById,
  queryUserId,
  queryUserIdByPwd,
} = require('../db/account');
const { dateConverSceond, getNowSceond } = require('../utils/time');
const { getJwt } = require('../utils/jwt');
const getRandom = require('../utils/random');
const sendEmail = require('../utils/email');
const sendMsg = require('../utils/message');
const { veriTime } = require('../config');

/**
 * 用户注册
 */
const register = async ({
  username, password, verification, type, name,
}) => {
  // 查询验证码
  const veriTimeRow = await queryVeriTime({ username, verification });
  if (veriTimeRow.length === 0) {
    // 验证码不存在
    return { error: true, message: '验证码错误！' };
  }
  // 验证码生成时间和当前时间的时间差
  const timeDiff = getNowSceond() - dateConverSceond(veriTimeRow[0].time);
  if (timeDiff > veriTime * 60) {
    // 验证码过期，删除过期的验证码
    deleteVeri({ username, verification });
    return { error: true, message: '验证码已过期，请重新获取验证码！' };
  }
  // 判断用户是否已注册
  const userRow = await queryUserId({ username, type });
  if (userRow.length !== 0) {
    // 用户已注册
    return { error: true, message: '用户已注册！' };
  }
  // 存储数据
  await insertUser({
    username, password, name, type,
  });
  // 删除使用过的验证码
  deleteVeri({ username, verification });
  return { error: false };
};

/**
 * 邮箱/手机号、密码登录
 */
const login = async ({ username, password, type }) => {
  // 查询用户id
  const userRow = await queryUserIdByPwd({ username, password, type });
  if (userRow.length === 0) {
    // 用户名或密码错误
    return { error: true, message: '用户名或密码错误！' };
  }
  // 获取存储id的token
  const { id } = userRow[0];
  const token = getJwt({ id });
  return { error: false, data: { token } };
};

/**
 * 邮箱/手机号、验证码登录
 */
const loginByVerification = async ({ username, verification, type }) => {
  // 查询验证码
  const veriTimeRow = await queryVeriTime({ username, verification });
  if (veriTimeRow.length === 0) {
    // 验证码不存在
    return { error: true, message: '验证码错误！' };
  }
  // 验证码生成时间和当前时间的时间差
  const timeDiff = getNowSceond() - dateConverSceond(veriTimeRow[0].time);
  if (timeDiff > veriTime * 60) {
    // 验证码过期，删除过期的验证码
    deleteVeri({ username, verification });
    return { error: true, message: '验证码已过期，请重新获取验证码！' };
  }
  // 判断用户是否已注册
  const userRow = await queryUserId({ username, type });
  if (userRow.length === 0) {
    // 用户未注册
    return { error: true, message: '用户未注册！' };
  }
  // 获取存储id的token
  const { id } = userRow[0];
  const token = getJwt({ id });
  // 删除使用过的验证码
  deleteVeri({ username, verification });
  return { error: false, data: { token } };
};

/**
 * 找回密码（通过验证码修改密码）
 */
const changeByVerification = async ({
  username, newPassword, verification, type,
}) => {
  // 查询验证码
  const veriTimeRow = await queryVeriTime({ username, verification });
  if (veriTimeRow.length === 0) {
    // 验证码不存在
    return { error: true, message: '验证码错误！' };
  }
  // 验证码生成时间和当前时间的时间差
  const timeDiff = getNowSceond() - dateConverSceond(veriTimeRow[0].time);
  if (timeDiff > veriTime * 60) {
    // 验证码过期，删除过期的验证码
    deleteVeri({ username, verification });
    return { error: true, message: '验证码已过期，请重新获取验证码！' };
  }
  // 判断用户是否已注册
  const userRow = await queryUserId({ username, type });
  if (userRow.length === 0) {
    // 用户未注册
    return { error: true, message: '用户未注册！' };
  }
  // 修改密码
  const { id } = userRow[0];
  await updatePwdById({ id, newPassword });
  // 删除使用过的验证码
  deleteVeri({ username, verification });
  return { error: false };
};

/**
 * 通过原密码修改密码
 */
const changePassword = async ({
  username, password, newPassword, type,
}) => {
  // 查询用户id
  const userRow = await queryUserIdByPwd({ username, password, type });
  if (userRow.length === 0) {
    // 用户名或密码错误
    return { error: true, message: '用户名或密码错误！' };
  }
  // 修改密码
  const { id } = userRow[0];
  await updatePwdById({ id, newPassword });
  return { error: false };
};

/**
 * 邮箱/手机号获取验证码
 */
const verification = async ({ username, type }) => {
  // 生成验证码
  const vericode = getRandom(6);
  // 发送验证码
  if (type === 'phone') {
    // 发送短信
    const result = await sendMsg({ sendTo: username, verification: vericode });
    if (result.error === false) {
      // 存储数据
      await insertVeri({ username, verification: vericode });
    }
    return result;
  }
  // 发送邮件
  await sendEmail({ sendTo: username, verification: vericode });
  // 存储数据
  await insertVeri({ username, verification: vericode });
  return { error: false };
};

module.exports = {
  register,
  login,
  loginByVerification,
  changeByVerification,
  changePassword,
  verification,
};
