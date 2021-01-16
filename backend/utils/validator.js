/**
 * 参数校验
 */
const validator = (schema, data) => {
  const value = schema.validate(data, { convert: false });
  return { value: value.value, details: value.error?.details };
};

module.exports = validator;
