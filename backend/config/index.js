const pgConfig = require('./db');

/**
 * 项目配置
 */
const config = {
  // 监听端口
  port: 3000,
  // 路由根路径
  baseURL: '/api/v1',
  // 验证码长度
  veriLen: 6,
  // 验证码失效时间（单位：分钟）
  veriTime: 5,
  // 密码长度
  pwdLen: [6, 20],
  // jwt密钥
  jwtSecret: 'XYxyjwtSecretByJHT',
  // jwt过期时间（单位：秒）
  tokenExpiresTime: 60 * 60 * 24 * 7, // 7天
  // 引入数据库配置
  pgConfig,
};

module.exports = config;
