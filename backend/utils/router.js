/**
 * 处理路由
 */
const res = require('./res');
const validator = require('./validator');

/**
 * 生成路由访问方法
 */
const genRouter = async ({
  ctx, schema, data, service,
}) => {
  const { details } = validator(schema, data);
  if (details) {
    res.validatorErr(ctx, details);
  } else {
    const result = await service(data);
    if (result.error) {
      res.error(ctx, result);
    } else {
      res.success(ctx, result.data);
    }
  }
};

module.exports = genRouter;
