/**
 * 数据库操作 - 账号相关
 */
const { runSql } = require('../utils/db');

/** SELECT verification
 * 根据邮箱/手机号、验证码查询生成时间
 * @param {String} username - 邮箱/手机号
 * @param {String} verification - 验证码
 */
const queryVeriTime = async ({ username, verification }) => {
  const sql = 'SELECT time FROM xy.verification WHERE username = $1 AND verification = $2';
  const row = await runSql(sql, [username, verification]);
  return row;
};

/** DELETE verification
 * 根据邮箱/手机号、验证码删除记录
 * @param {String} username - 邮箱/手机号
 * @param {String} verification - 验证码
 */
const deleteVeri = async ({ username, verification }) => {
  const sql = 'DELETE FROM xy.verification WHERE username = $1 AND verification = $2';
  const row = await runSql(sql, [username, verification]);
  return row;
};

/** SELECT user
 * 根据邮箱/手机号判断用户是否已经注册
 * @param {String} username - 邮箱/手机号
 * @param {String} type - email - 邮箱、phone - 手机号
 */
const queryUserRegister = async ({ username, type }) => {
  const sql = `SELECT COUNT(*) FROM xy.user WHERE ${type} = $1`;
  const row = await runSql(sql, [username]);
  return row;
};

/** INSERT user
 * user表存储一条字段
 * @param {String} username - 邮箱/手机号
 * @param {String} password - 密码
 * @param {String} name - 用户名
 * @param {String} type - email - 邮箱、phone - 手机号
 */
const insertUserByType = async ({
  username, password, name, type,
}) => {
  const sql = `INSERT INTO xy.user (${type}, password, name) VALUES ($1, $2, $3)`;
  const row = await runSql(sql, [username, password, name]);
  return row;
};

module.exports = {
  queryVeriTime,
  deleteVeri,
  queryUserRegister,
  insertUserByType,
};
