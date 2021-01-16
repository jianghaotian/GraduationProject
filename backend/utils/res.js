/**
 * 发送响应
 */
const res = {};

/**
 * 成功响应 - 200
 */
res.success = (ctx, data = {}) => {
  ctx.status = 200;
  ctx.body = {
    code: 0,
    data,
    detailMsg: '',
    message: 'success',
  };
};

/**
 * Not Found - 404
 */
res.notFoundErr = (ctx) => {
  ctx.status = 404;
  ctx.body = {
    code: 404,
    data: null,
    detailMsg: {
      path: ctx.path,
      method: ctx.method,
      host: ctx.host,
    },
    message: '404 Not Found',
  };
};

/**
 * 请求数据验证失败响应 - 422
 */
res.validatorErr = (ctx, detailMsg = 'validator error') => {
  ctx.status = 422;
  ctx.body = {
    code: 422,
    data: null,
    detailMsg,
    message: '服务器内部错误',
  };
};

/**
 * Internal Server Error - 500
 */
res.serverErr = (ctx, { name, message }) => {
  ctx.status = 500;
  ctx.body = {
    code: 500,
    data: null,
    detailMsg: {
      errorType: name,
      message,
    },
    message: '服务器内部错误',
  };
};

module.exports = res;
