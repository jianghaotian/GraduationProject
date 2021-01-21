/**
 * 公共服务 - 验证码相关
 */
const { deleteVeri, queryVeriTime } = require('../../db/verification');
const { dateConverSceond, getNowSceond } = require('../../utils/time');
const { veriTime } = require('../../config');

/**
 * 判断验证码正确性
 */
const judgeVeri = async ({ username, verification }) => {
  // 查询验证码
  const veriTimeRow = await queryVeriTime({ username, verification });
  if (veriTimeRow.length === 0) {
    // 验证码不存在
    return { error: true, message: '验证码错误！' };
  }
  // 验证码生成时间和当前时间的时间差
  const timeDiff = getNowSceond() - dateConverSceond(veriTimeRow[0].time);
  if (timeDiff > veriTime * 60) {
    // 验证码过期，删除过期的验证码
    deleteVeri({ username, verification });
    return { error: true, message: '验证码已过期，请重新获取验证码！' };
  }
  return { error: false };
};

module.exports = {
  judgeVeri,
};
