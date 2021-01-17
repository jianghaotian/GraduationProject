/**
 * 生成随机数
 */
const getRandom = (x) => {
  const arr = [];
  for (let i = 0; i < x; i += 1) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr.join('');
};

module.exports = getRandom;
