/**
 * 处理时间
 */

/**
 * Date 转换成毫秒级时间戳
 */
const dateConverMilliSceond = (date) => Math.floor(date.valueOf());

/**
 * Date 转换成秒级时间戳
 */
const dateConverSceond = (date) => Math.floor(date.valueOf() / 1000);

/**
 * 获取当前时间戳(毫秒)
 */
const getNowMilliSecond = () => Math.floor(Date.now());

/**
 * 获取当前时间戳(秒)
 */
const getNowSceond = () => Math.floor(Date.now() / 1000);

module.exports = {
  dateConverMilliSceond,
  dateConverSceond,
  getNowMilliSecond,
  getNowSceond,
};
