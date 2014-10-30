/**
 * Created by luzhen on 14-9-24.
 */
    var ENUM=require('./MessageEnum');
var message={
    'message_type':'2',
    'message_title':'',
    'message_content':'',
    'send_type':'',
    'message_action':'',
    'action_param':'',
    'warm_type':'1,2,3',
    'send_time':'',
    'remand_time':'',
    'message_style':'0',
    'message_url':'',
    'timezone':(new Date().getTimezoneOffset()/60)*(-1),
    'receive_type':'',
    'token_list':'',
    'dimension1':'',
    'dimension2':'',
    'dimension3':'',
    'dimension4':'',
    'dimension5':'',
    'platform':''
};
function setMessageTitle(title){
    message.message_title=title;
    return this;
}

function setMessageContent(content){
    message.message_content=content;
    return this;
}
function setMessageType(messageType) {
    message.message_type=messageType;
    return this;
}
function setSendType(sendType){
    message.send_type=sendType;
    return this;
}
function setMessageAction(messageAction){
    message.message_action=messageAction;
    return this;
}
function setActionParam(actionParam){
    message.action_param=actionParam;
    return this;
}
function setSendTime(sendTime){
    message.send_time=sendTime;
    return this;
}
function setRemandTime(remandTime){
    message.remand_time=remandTime;
    return this;
}
function setMessageStyle(styleNum){
    message.message_style=styleNum;
    return this;
}
function setMessageUrl(messageUrl){
    message.message_url=messageUrl;
    return this;
}
function setWarmType(){
    message.warm_type=Array.prototype.join.call(arguments, ',');
    return this;
}
function setTokens(){
    message.token_list=Array.prototype.join.call(arguments, ',');
    return this;
}
function setVersions(){
    message.dimension5=Array.prototype.join.call(arguments, ',');
    return this;
}
function setChannels(){
    message.dimension4=Array.prototype.join.call(arguments, ',');
    return this;
}
function setNetTypes(){
    message.dimension3=Array.prototype.join.call(arguments, ',');
    return this;
}
function setTags(){
    message.dimension2=Array.prototype.join.call(arguments, ',');
    return this;
}
function setCountries(){
    message.dimension1=Array.prototype.join.call(arguments, ',');
}
function setReceiveType(receiveType){
    message.receive_type=receiveType;
    return this;
}
function setPlatforms(){
    message.platform=Array.prototype.join.call(arguments, ',');
    return this;
}
exports.setMessageTitle=setMessageTitle;
exports.setMessageContent=setMessageContent;
exports.setMessageType=setMessageType;
exports.setSendType=setSendType;
exports.setMessageAction=setMessageAction;
exports.setActionParam=setActionParam;
exports.setSendTime=setSendTime;
exports.setRemandTime=setRemandTime;
exports.setMessageStyle=setMessageStyle;
exports.setMessageUrl=setMessageUrl;
exports.setWarmType=setWarmType;
exports.setReceiveType=setReceiveType;
exports.setTokens=setTokens;
exports.setCountries=setCountries;
exports.setTags=setTags;
exports.setNetTypes=setNetTypes;
exports.setPlatforms=setPlatforms;
exports.setChannels=setChannels;
exports.setVersions=setVersions;
exports.message=message;

