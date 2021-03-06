'use strict';

exports.createResponseData = (result, data, extra) => {
  let response = {
    statusCode: result.statusCode,
    body: {
      result: {
        code: result.code,
        message: result.message
      }
    }
  };
  if (data) {
    response.body.data = data;
  }
  if (extra) {
    response.body.extra = extra;
  }

  return response;
};


exports.createInternalResponse = (statusCode, code, message) => {
  return {
    statusCode: statusCode,
    code: code,
    message: message,
  }
};