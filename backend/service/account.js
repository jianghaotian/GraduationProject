/**
 * 服务 - 账号相关
 */

/**
 * 用户注册
 */
const register = (data) => {
  console.log(data);
};

/**
 * 邮箱/手机号、密码登录
 */
const login = (data) => {
  console.log(data);
};

/**
 * 邮箱/手机号、验证码登录
 */
const loginByVerification = (data) => {
  console.log(data);
};

/**
 * 找回密码（通过验证码修改密码）
 */
const changeByVerification = (data) => {
  console.log(data);
};

/**
  * 通过原密码修改密码
  */
const changePassword = (data) => {
  console.log(data);
};

/**
 * 邮箱/手机号获取验证码
 */
const verification = (data) => {
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
