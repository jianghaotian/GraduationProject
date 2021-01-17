// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require('tencentcloud-sdk-nodejs');

const {
  msgConfig: {
    credential, TemplateID, SmsSdkAppid, Sign,
  }, veriTime,
} = require('../config');

const SmsClient = tencentcloud.sms.v20190711.Client;

const clientConfig = {
  credential,
  region: '',
  profile: {
    httpProfile: {
      endpoint: 'sms.tencentcloudapi.com',
    },
  },
};

const client = new SmsClient(clientConfig);
// eslint-disable-next-line no-console
console.log('create tencentcloud sms client --- OK');

/**
 * 发送短信
 */
const sendMsg = async ({ sendTo, verification }) => {
  const params = {
    PhoneNumberSet: [`+86${sendTo}`],
    TemplateParamSet: [`${verification}`, `${veriTime}`],
    TemplateID,
    SmsSdkAppid,
    Sign,
  };
  // 发送短信
  const { SendStatusSet } = await client.SendSms(params);
  const { Code, Message } = SendStatusSet[0];
  // 判断发送结果
  if (Code === 'Ok') {
    return { error: false };
  }
  if (Code === 'LimitExceeded.PhoneNumberThirtySecondLimit') {
    return { error: true, message: '30秒内只能发送1条短信，请稍后尝试！', detailMsg: { Code, Message } };
  }
  if (Code === 'LimitExceeded.PhoneNumberOneHourLimit') {
    return { error: true, message: '1小时内发送短信数量达到上限，请稍后尝试！', detailMsg: { Code, Message } };
  }
  if (Code === 'LimitExceeded.PhoneNumberOneDayLimit') { // TODO 待确认
    return { error: true, message: '今日发送短信数量达到上限，请明日再试！', detailMsg: { Code, Message } };
  }
  return { error: true, detailMsg: SendStatusSet[0] };
};

module.exports = sendMsg;
