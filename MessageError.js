/**
 * Created by luzhen on 14-9-24.
 */
exports.APIConnectionError = APIConnectionError;
exports.APIRequestError = APIRequestError;
exports.InvalidArgumentError = InvalidArgumentError;
var util=require('util');

function APIConnectionError(message, isResponseTimeout) {
    this.name = "APIConnectionError";
    this.message = message;
    this.isResponseTimeout = isResponseTimeout || false;
}

function APIRequestError(httpCode, response) {
    var message = "Push Fail, HttpStatusCode: " + httpCode + " result: " + response.toString();
    this.name = "APIRequestError";
    this.message = message;
    this.httpCode = httpCode;
    this.response = response;
}

function InvalidArgumentError(message) {
    this.name = "InvalidArgumentError";
    this.message = message;
}

util.inherits(APIConnectionError,Error);
util.inherits(APIRequestError,Error);
util.inherits(InvalidArgumentError,Error);
