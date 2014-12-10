/**
 * Created by luzhen on 14-9-24.
 */

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
message.setMessageTitle=function(title){
    this.message_title=title;
    return this;
};

message.setMessageContent=function(content){
    this.message_content=content;
    return this;
};
message.setMessageType=function(messageType) {
    this.message_type=messageType;
    return this;
};
message.setSendType=function(sendType){
    this.send_type=sendType;
    return this;
};
message.setMessageAction=function(messageAction){
    this.message_action=messageAction;
    return this;
};
message.setActionParam=function(actionParam){
    this.action_param=actionParam;
    return this;
};
message.setSendTime=function(sendTime){
    this.send_time=sendTime;
    return this;
};
message.setRemandTime=function(remandTime){
    this.remand_time=remandTime;
    return this;
};
message.setMessageStyle=function(styleNum){
    this.message_style=styleNum;
    return this;
};
message.setMessageUrl=function(messageUrl){
    this.message_url=messageUrl;
    return this;
};
message.setWarmType=function(warmTypes){
    this.warm_type=warmTypes.join(',');
    return this;
};
message.setTokens=function(tokens){
    this.token_list=tokens.join(',');
    return this;
};
message.setVersions=function(versions){
    this.dimension5=versions.join(',');
    return this;
};
message.setChannels=function(channels){
    this.dimension4=channels.join.(',');
    return this;
};
message.setNetTypes=function(netTypes){
    this.dimension3=netTypes.join(',');
    return this;
};
message.setTags=function(tags){
    this.dimension2=tags.join(',');
    return this;
};
message.setCountries=function(countries){
    this.dimension1=countries.join(',');
};
message.setReceiveType=function(receiveType){
    this.receive_type=receiveType;
    return this;
};
message.setPlatforms=function(){
    this.platform=Array.prototype.join.call(arguments, ',');
    return this;
};

module.exports=message;

