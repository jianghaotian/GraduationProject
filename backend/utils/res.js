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
    detailMsg: null,
    message: 'success',
  };
};

/**
 * 通用失败响应 - 400
 */
res.error = (ctx, { detailMsg = null, message = '服务器内部错误' }) => {
  ctx.status = 400;
  ctx.body = {
    code: 400,
    data: null,
    detailMsg,
    message,
  };
};

/**
 * 请求数据验证失败响应 - 400
 */
res.validatorErr = (ctx, detailMsg = null) => {
  ctx.status = 400;
  ctx.body = {
    code: 422,
    data: null,
    detailMsg,
    message: 'Validator ERROR',
  };
};

/**
 * 身份验证失败响应 - 401
 */
res.authenticationErr = (ctx, { name, message }) => {
  ctx.status = 401;
  ctx.body = {
    code: 401,
    data: null,
    detailMsg: {
      errorType: name,
      message,
    },
    message: '身份验证失败！',
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
