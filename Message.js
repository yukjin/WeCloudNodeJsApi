/**
 * Created by luzhen on 14-9-24.
 */
var MessageError=require('./MessageError');
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
    'platform':'1'//默认android
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
    if(warmTypes['join']){
        this.warm_type=warmTypes.join(',');
    }
    return this;
};
message.setTokens=function(tokens){
    if(tokens['join']){
        this.token_list=tokens.join(',');
    }else{
        throw new MessageError.InvalidArgumentError('param type should be array in tokens');
    }
    return this;
};
message.setVersions=function(versions){
    if(versions['join']){
        this.dimension5=versions.join(',');
    }else{
        throw new MessageError.InvalidArgumentError('param type should be array in versions');
    }
    return this;
};
message.setChannels=function(channels){
    if(channels['join']){
        this.dimension4=channels.join(',');
    }else{
        throw new MessageError.InvalidArgumentError('param type should be array in channels');
    }
    return this;
};

message.setNetTypes=function(netTypes){
    if(netTypes['join']){
        this.dimension3=netTypes.join(',');
    }else{
        throw new MessageError.InvalidArgumentError('param type should be array in netTypes');
    }
    return this;
};
message.setTags=function(tags){
    if(tags['join']){
        this.dimension2=tags.join(',');
    }else{
        throw new MessageError.InvalidArgumentError('param type should be array in tags');
    }
    return this;
};
message.setCountries=function(countries){
    if(countries['join']){
        this.dimension1=countries.join(',');
    }else{
        throw new MessageError.InvalidArgumentError('param type should be array in countries');
    }
    return this;
};
message.setReceiveType=function(receiveType){
    this.receive_type=receiveType;
    return this;
};
message.setPlatforms=function(platforms){
    if(platforms['join']){
        this.platform=platforms.join(',');
    }
    return this;
};

module.exports=message;

