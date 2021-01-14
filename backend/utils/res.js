/**
 * 构建响应内容
 */

// 成功响应 - 200
const genSuccess = (data = []) => ({
  status: 200,
  res: {
    code: 0,
    data,
    detailMsg: '',
    message: 'success',
  },
});

// 通用失败响应 - 400
// const genError = ({
//   status = 400,
//   code = -1,
//   message = '服务器内部错误',
//   detailMsg = '',
// }) => ({
//   status,
//   res: {
//     code,
//     data: [],
//     detailMsg,
//     message,
//   },
// });

//
const genNotFoundErr = ({ path }) => ({
  status: 404,
  res: {
    code: 404,
    data: [],
    detailMsg: {
      path,
    },
    message: '404 Not Found',
  },
});

// 请求数据验证失败响应 - 422
const genValidatorErr = ({
  message = '服务器内部错误',
  errors,
}) => ({
  status: 422,
  res: {
    code: 422,
    data: [],
    detailMsg: {
      validator: errors,
    },
    message,
  },
});

module.exports = { genSuccess, genNotFoundErr, genValidatorErr };
