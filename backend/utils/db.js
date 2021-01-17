/**
 * 操作数据库
 */
const pg = require('pg');
const { pgConfig } = require('../config');

/**
 * 创建连接池
 */
const pool = new pg.Pool(pgConfig);

pool.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error('数据库连接错误 - ', err);
});

/**
 * 执行sql语句
 */
const runSql = async (sql, data = []) => {
  const client = await pool.connect();
  const result = await client.query(sql, data);
  client.release();
  return result.rows;
};

module.exports = { pool, runSql };
