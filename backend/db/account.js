/**
 * 数据库操作 - 账号相关
 */
const { runSql } = require('../utils/db');

/** INSERT verification
 * verification表增加一条字段
 */
const insertVeri = async ({ username, verification }) => {
  const sql = 'INSERT INTO xy.verification (username, verification) VALUES ($1, $2)';
  const row = await runSql(sql, [username, verification]);
  return row;
};

/** DELETE verification
 * 通过邮箱/手机号、验证码删除记录
 */
const deleteVeri = async ({ username, verification }) => {
  const sql = 'DELETE FROM xy.verification WHERE username = $1 AND verification = $2';
  const row = await runSql(sql, [username, verification]);
  return row;
};

/** SELECT verification
 * 通过邮箱/手机号、验证码查询生成时间
 */
const queryVeriTime = async ({ username, verification }) => {
  const sql = 'SELECT time FROM xy.verification WHERE username = $1 AND verification = $2';
  const row = await runSql(sql, [username, verification]);
  return row;
};

/** INSERT user
 * user表增加一条字段
 */
const insertUser = async ({
  username, password, name, type,
}) => {
  const sql = `INSERT INTO xy.user (${type}, password, name) VALUES ($1, $2, $3)`;
  const row = await runSql(sql, [username, password, name]);
  return row;
};

/** UPDATE user
 * 通过用户id修改密码
 */
const updatePwdById = async ({ id, newPassword }) => {
  const sql = 'UPDATE xy.user SET password = $1 WHERE id = $2';
  const row = await runSql(sql, [newPassword, id]);
  return row;
};

/** SELECT user
 * 通过邮箱/手机号查询用户id
 */
const queryUserId = async ({ username, type }) => {
  const sql = `SELECT id FROM xy.user WHERE ${type} = $1`;
  const row = await runSql(sql, [username]);
  return row;
};

/** SELECT user
 * 通过邮箱/手机号、密码查询用户id
 */
const queryUserIdByPwd = async ({ username, password, type }) => {
  const sql = `SELECT id FROM xy.user WHERE ${type} = $1 AND password = $2`;
  const row = await runSql(sql, [username, password]);
  return row;
};

module.exports = {
  insertVeri,
  deleteVeri,
  queryVeriTime,
  insertUser,
  updatePwdById,
  queryUserId,
  queryUserIdByPwd,
};
