/**
 * 数据库操作 - 验证码表 - verification
 */
const { runSql } = require('../utils/db');

/** INSERT
 * verification表增加一条字段
 */
const insertVeri = async ({ username, verification }) => {
  const sql = 'INSERT INTO xy.verification (username, verification) VALUES ($1, $2)';
  const row = await runSql(sql, [username, verification]);
  return row;
};

/** DELETE
 * 通过邮箱/手机号、验证码删除记录
 */
const deleteVeri = async ({ username, verification }) => {
  const sql = 'DELETE FROM xy.verification WHERE username = $1 AND verification = $2';
  const row = await runSql(sql, [username, verification]);
  return row;
};

/** SELECT
 * 通过邮箱/手机号、验证码查询生成时间
 */
const queryVeriTime = async ({ username, verification }) => {
  const sql = 'SELECT time FROM xy.verification WHERE username = $1 AND verification = $2';
  const row = await runSql(sql, [username, verification]);
  return row;
};

module.exports = {
  insertVeri,
  deleteVeri,
  queryVeriTime,
};
