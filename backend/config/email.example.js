/**
 * 发送邮件配置
 */
const emailConfig = {
  // createTransport 的配置
  createConfig: {
    // service: 'xxx',
    host: 'smtp.xxx.com',
    port: 465,
    secure: true,
    auth: {
      user: 'xxxxxx@xxx.com',
      pass: 'xxxxxxxxx',
    },
  },
  from: '"星原协作" <xxxxxx@xxx.com>',
  // 获取邮件主题
  getSubject: ({ verification }) => `【星原协作】验证码：${verification}`,
  // 获取发送的 html 内容
  getHtml: ({ verification, minute }) => `
    <p>您的验证码为：</p>
    <strong style="font-size:28px; line-height:32px;">${verification} </strong>
    <p>请于${minute}分钟内填写 </p>
    <p>如非本人操作，请忽略本邮件 </p>
    <p>—— 来自星原协作(<a href="https://xxx.xxx">https://xxx.xxx</a>)</p>
  `,
};

module.exports = emailConfig;
