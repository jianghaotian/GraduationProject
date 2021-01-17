const nodemailer = require('nodemailer');
const {
  emailConfig: {
    createConfig, from, getSubject, getHtml,
  }, veriTime,
} = require('../config');

/**
 * 定义邮件服务器
 */
const transporter = nodemailer.createTransport(createConfig);
// eslint-disable-next-line no-console
console.log('create email transport serve --- OK');

/**
 * 发送邮件
 */
const sendEmail = async ({ sendTo, verification }) => {
  // 发送邮件配置
  const mailOptions = {
    from, // 发送邮件的地址
    to: sendTo, // 接收邮件的地址
    subject: getSubject({ verification }), // 邮件主题
    html: getHtml({ verification, minute: veriTime }), // 以HTML的格式显示
  };
  // 发送邮件
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
