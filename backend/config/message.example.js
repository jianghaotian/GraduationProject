/**
 * 腾讯云短信配置
 */
const msgConfig = {
  // 腾讯云认证信息
  credential: {
    secretId: 'xxxxxxxxxxxxxxxxxxxx',
    secretKey: 'xxxxxxxxxxxxxxxxxxxx',
  },
  // 腾讯云短信签名内容
  Sign: 'xxxxxx',
  // 腾讯云短信正文模板id
  TemplateID: 'xxxxxx',
  // 腾讯云短信应用SDK AppID
  SmsSdkAppid: 'xxxxxxxx',
};

module.exports = msgConfig;
