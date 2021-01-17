const jwt = require('jsonwebtoken');
const { jwtConfig: { jwtSecret, tokenExpiresTime } } = require('../config');

/**
 * 生成token
 */
const getJwt = (data) => jwt.sign(data, jwtSecret, { expiresIn: tokenExpiresTime });

/**
 * 验证token
 */
const verifyJwt = (token) => jwt.verify(token, jwtSecret);

module.exports = { getJwt, verifyJwt };
