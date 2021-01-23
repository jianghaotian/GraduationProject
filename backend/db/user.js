/**
 * 数据库操作 - 用户表 - user
 */
const { runSql } = require('../utils/db');

/** INSERT
 * user表增加一条字段
 */
const insertUser = async ({
  username, password, name, type,
}) => {
  const sql = `INSERT INTO xy.user (${type}, password, name) VALUES ($1, $2, $3)`;
  const row = await runSql(sql, [username, password, name]);
  return row;
};

/** UPDATE
 * 通过用户id修改密码
 */
const updatePwdById = async ({ id, newPassword }) => {
  const sql = 'UPDATE xy.user SET password = $1 WHERE id = $2';
  const row = await runSql(sql, [newPassword, id]);
  return row;
};

/** UPDATE
 * 通过用户id修改邮箱
 */
const updateEmailById = async ({ id, email }) => {
  const sql = 'UPDATE xy.user SET email = $1 WHERE id = $2';
  const row = await runSql(sql, [email, id]);
  return row;
};

/** UPDATE
 * 通过用户id修改手机号
 */
const updatePhoneById = async ({ id, phone }) => {
  const sql = 'UPDATE xy.user SET phone = $1 WHERE id = $2';
  const row = await runSql(sql, [phone, id]);
  return row;
};

/** UPDATE
 * 通过用户id修改用户名
 */
const updateNameById = async ({ id, name }) => {
  const sql = 'UPDATE xy.user SET name = $1 WHERE id = $2';
  const row = await runSql(sql, [name, id]);
  return row;
};

/** SELECT
 * 通过邮箱/手机号查询用户id
 */
const queryUserIdByUsername = async ({ username, type }) => {
  const sql = `SELECT id FROM xy.user WHERE ${type} = $1`;
  const row = await runSql(sql, [username]);
  return row;
};

/** SELECT
 * 通过邮箱/手机号、密码查询用户id
 */
const queryUserIdByPwd = async ({ username, password, type }) => {
  const sql = `SELECT id FROM xy.user WHERE ${type} = $1 AND password = $2`;
  const row = await runSql(sql, [username, password]);
  return row;
};

/** SELECT
 * 通过用户id获取用户信息
 */
const queryUserById = async ({ id }) => {
  const sql = `SELECT * FROM xy.user WHERE ${id} = $1`;
  const row = await runSql(sql, [id]);
  return row;
};

module.exports = {
  insertUser,
  updatePwdById,
  updateEmailById,
  updatePhoneById,
  updateNameById,
  queryUserIdByUsername,
  queryUserIdByPwd,
  queryUserById,
};
