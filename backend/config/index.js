const pgConfig = require('./db');

/**
 * 项目配置
 */
const config = {
  // 监听端口
  port: 3000,
  // 引入数据库配置
  pgConfig,
};

module.exports = config;
