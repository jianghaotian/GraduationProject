const dbConfig = require('./db');
const jwtConfig = require('./jwt');
const emailConfig = require('./email');
const msgConfig = require('./message');

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
  // 引入数据库配置
  dbConfig,
  // 引入 jwt 配置
  jwtConfig,
  // 引入发送邮件配置
  emailConfig,
  // 引入发送短信配置
  msgConfig,
};

module.exports = config;
