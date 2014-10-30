/**
 * Created by luzhen on 14-9-23.
 */
var MessageError = require('./MessageError');
var Request = require('request');
var MESSAGE_API_URL = 'http://www.wecloud.io/push/api.do!v1';
var DEFAULT_MAX_RETRY_TIMES = 3;
var READ_TIMEOUT = 30 * 1000;
// Pattern
var WECLOUD_APPKEY_PATTERNS = /^[a-zA-Z0-9]{24}/;
var WECLOUD_MASTER_SECRET_PATTERNS = /^[a-zA-Z0-9]{32}/;

exports.instance = function(appKey, masterSecret, retryTimes) {
    return new MessageClient(appKey, masterSecret, retryTimes);
};
function MessageClient(appKey, masterSecret, retryTimes) {
    if (!appKey || !masterSecret) {
        throw MessageError
            .InvalidArgumentError('appKey and masterSecret are both required.');
    }

    if (typeof appKey !== 'string' || typeof masterSecret !== 'string'
        || !WECLOUD_APPKEY_PATTERNS.test(appKey) || !WECLOUD_MASTER_SECRET_PATTERNS.test(masterSecret)) {
        throw new MessageError.InvalidArgumentError(
                'appKey and masterSecret format is incorrect. ');
    }
    this.appkey = appKey;
    this.masterSecret = masterSecret;
    if (retryTimes) {
        if (typeof retryTimes != 'number') {
            throw MessageError.InvalidArgumentError("Invalid retryTimes.");
        }
        this.retryTimes = retryTimes;
    } else {
        this.retryTimes = DEFAULT_MAX_RETRY_TIMES;
    }


    this.sendByDimensions=function(message, callback) {
        message.setReceiveType('2');
        message=JSON.stringify(message.message);
        this.send(message,callback);
    }

    this.sendByTokens=function(message, callback) {
        message.setReceiveType('3');
        message=JSON.stringify(message.message);
        this.send(message,callback);
    }

    this.sendAll=function(message, callback) {
        message.setReceiveType('1');
        message=JSON.stringify(message.message);
        console.log(this.masterSecret);
        console.log(this.appkey);
        this.send(message,callback);
    }

    this.send=function(message,callback){
        var header = {
            'Connection' : 'Keep-Alive',
            'Charset' : 'UTF-8',
            'Content-Type' : 'application/x-www-form-urlencoded'
        };
        return _request(MESSAGE_API_URL, 'encoding_type=0&master_secret='+this.masterSecret+'&appkey='+this.appkey+'&message='+message, header, {
        }, 'POST', 1, this.retryTimes, callback);
    }

    _request=function(url, body, headers, auth, method, times, maxTryTimes,
                                    callback) {
        console.log("Push URL :" + url);
        if (body)
            console.log("Body :" + body);
        console.log("Headers :" + JSON.stringify(headers));
        console.log("Method :" + method);
        console.log("Times/MaxTryTimes : " + times + "/" + maxTryTimes);

        var _callback = function(err, res, body) {
            if (err) {
                if (err.code == 'ETIMEDOUT' && err.syscall != 'connect') {
                    // response timeout
                    return callback(new MessageError.APIConnectionError(
                        'Response timeout. Your request to the server may have already received, please check whether or not to push',
                        true));
                } else if (err.code == 'ENOTFOUND') {
                    // unknown host
                    return callback(new MessageError.APIConnectionError('Known host : '
                        + url));
                }
                // other connection error
                if (times < maxTryTimes) {
                    return _request(url, body, headers, auth, method, times + 1,
                        maxTryTimes, callback);
                } else {
                    return callback(new MessageError.APIConnectionError(
                        'Connect timeout. Please retry later.'));
                }
            }
            if (res.statusCode == 200) {
                if (body.length != 0) {
                    console.log("response : " + body)
                    return callback(null, eval('(' + body + ')'));
                } else {
                    console.log("response : " + body)
                    return callback(null, 200);
                }
            } else {
                console.log("Push Fail, HttpStatusCode: " + res.statusCode
                    + " result: " + body);
                callback(new MessageError.APIRequestError(res.statusCode, body));
            }
        };

        if (method == 'POST' || method == 'post') {
            Request.post({
                url : url,
                body : body,
                headers : headers,
                timeout : READ_TIMEOUT
            }, _callback);
        }
    }
}