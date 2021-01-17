/**
 * jwt 配置
 */
const jwtConfig = {
  // jwt密钥
  jwtSecret: 'xxxxxx',
  // jwt过期时间（单位：秒）
  tokenExpiresTime: 60 * 60 * 24 * 1, // 1天
};

module.exports = jwtConfig;
