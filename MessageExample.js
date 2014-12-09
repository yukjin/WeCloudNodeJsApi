/**
 * Created by luzhen on 14-9-24.
 */
var MessageClient = require('./MessageClient');//引入MessageClient,该模块用来实现消息发送
var MESSAGE_ENUM=require('./MessageEnum');//引入消息枚举
var messageType=MESSAGE_ENUM.messageType;//消息类型枚举
var messageAction=MESSAGE_ENUM.messageAction;//消息动作枚举
var sendType=MESSAGE_ENUM.sendType;//消息的发送类型枚举
var countries=MESSAGE_ENUM.countries;//国家维度枚举
var tags=MESSAGE_ENUM.tags;//标签枚举
var netTypes=MESSAGE_ENUM.netTypes;//网络类型枚举
var platforms=MESSAGE_ENUM.platforms;
var message=require('./Message');//引入消息模块
var client =MessageClient.instance({appkey:'DXZBSF7IOC6ACKOZCOT8R9IJ', masterSecret:'ZKUIVPP71E51Z0Y6HLSHO9T15MS504AC'});//获得一个MessageClient对象
message
    .setMessageType(messageType.NOTIFICATION)
    .setMessageTitle('test title')
    .setMessageContent('test content')
    .setMessageAction(messageAction.OPEN_APP)
    .setSendType(sendType.REALTIME)
    .setPlatforms(platforms.ANDROID);//链式设置消息
//发送给所有人
client.sendAll(message,function(err,res){
    console.log('这个方法是用来配置你希望在消息发送成功后执行的回调方法');
});

//按token发送
message.setTokens('140775224048952ddd91a4ced3b74');
client.sendByTokens(message,function(){
    console.log('这个方法是用来配置你希望在消息发送成功后执行的回调方法');
});

//按维度发送
message.setCountries(countries.OTHER);
message.setTags(tags.ONLINE_SHOPPING,tags.STUDENT);//设置多个标签
message.setNetTypes(netTypes._3G,netTypes.WIFI);//设置多种网络类型
message.setChannels("google","baidu");
message.setVersions("1.0","1.1");
client.sendByDimensions(message,function(){
    console.log('这个方法是用来配置你希望在消息发送成功后执行的回调方法');
});
