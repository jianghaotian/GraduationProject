/**
 * 服务 - 账号相关
 */
const {
  queryVeriTime, deleteVeri, queryUserRegister, insertUserByType,
} = require('../db/account');
const { dateConverSceond, getNowSceond } = require('../utils/time');
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
  const registerRow = await queryUserRegister({ username, type });
  if (parseInt(registerRow[0].count, 10) !== 0) {
    // 用户已注册
    return { error: true, message: '用户已注册！' };
  }
  // 存储数据
  await insertUserByType({
    username, password, name, type,
  });
  // 删除使用过的验证码
  deleteVeri({ username, verification });
  return { error: false };
};

/**
 * 邮箱/手机号、密码登录
 */
const login = async (data) => {
  console.log(data);
};

/**
 * 邮箱/手机号、验证码登录
 */
const loginByVerification = async (data) => {
  console.log(data);
};

/**
 * 找回密码（通过验证码修改密码）
 */
const changeByVerification = async (data) => {
  console.log(data);
};

/**
 * 通过原密码修改密码
 */
const changePassword = async (data) => {
  console.log(data);
};

/**
 * 邮箱/手机号获取验证码
 */
const verification = async (data) => {
  console.log(data);
};

module.exports = {
  register,
  login,
  loginByVerification,
  changeByVerification,
  changePassword,
  verification,
};
