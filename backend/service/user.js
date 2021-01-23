/**
 * 服务 - 用户信息
 */
const {
  updateEmailById, updatePhoneById, updateNameById, queryUserById,
} = require('../db/user');
const { deleteVeri } = require('../db/verification');
const { judgeVeri } = require('./common/verification');

/**
 * 修改邮箱
 */
const changeEmail = async ({ email, verification }, id) => {
  // 判断验证码是否合法
  const veriResult = await judgeVeri({ username: email, verification });
  if (veriResult.error) {
    return veriResult;
  }
  // 修改邮箱
  await updateEmailById({ id, email });
  // 删除使用过的验证码
  deleteVeri({ username: email, verification });
  return { error: false };
};

/**
 * 修改手机号
 */
const changePhone = async ({ phone, verification }, id) => {
  // 判断验证码是否合法
  const veriResult = await judgeVeri({ username: phone, verification });
  if (veriResult.error) {
    return veriResult;
  }
  // 修改手机号
  await updatePhoneById({ id, phone });
  // 删除使用过的验证码
  deleteVeri({ username: phone, verification });
  return { error: false };
};

/**
 * 获取用户基本信息
 */
const getInfo = async (_, id) => {
  const data = await queryUserById({ id });
  delete data[0].password;
  // TODO create_time 早了8小时
  return { error: false, data: data[0] };
};

/**
 * 修改用户基本信息
 */
const changeInfo = async ({ name }, id) => {
  await updateNameById({ id, name });
  return { error: false };
};

/**
 * 修改用户头像
 */
const changeHead = async (data) => {
  console.log(data);
  return { error: false };
};

/**
 * 搜索用户
 */
const search = async ({ username }) => {
  console.log(username);
  return { error: false };
};

module.exports = {
  changeEmail,
  changePhone,
  getInfo,
  changeInfo,
  changeHead,
  search,
};
