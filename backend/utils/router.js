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
    // 存在 jwt 时发送用户id
    const result = await service(data, ctx.state.jwt?.id);
    if (result.error) {
      res.error(ctx, result);
    } else {
      res.success(ctx, result.data);
    }
  }
};

module.exports = genRouter;
