/**
 * Created by luzhen on 14-9-24.
 */
//messageType
var messageType={'NOTIFICATION':'1','COMMAND':'2','RICH_MESSAGE':'3'};
//sendType
var sendType={'REALTIME':'1','DELAYED':'2'};
//messageAction
var messageAction={'OPEN_APP':'1','OPEN_ACTIVITY':'2','OPEN_WEB_SITE':'3','CUSTOM':'4'};
//warmType
var warmType={'OPEN_BLN':1,'OPEN_BEL':2,'OPEN_VIB':3};
//countries
var countries={'US':'US', 'UK':'UK', 'AU':'AU', 'CA':'CA', 'RU':'RU', 'DE':'DE', 'SG':'SG', 'FR':'FR', 'HK':'HK', 'IT':'IT', 'TH':'TH', 'NO':'NO', 'MY':'MY', 'KR':'KR', 'SE':'SE', 'ID':'ID', 'SA':'SA', 'ES':'ES', 'DK':'DK', 'PH':'PH', 'NL':'NL', 'IL':'IL', 'JP':'JP', 'NZ':'NZ', 'BR':'BR', 'BE':'BE', 'CH':'CH', 'CZ':'CZ', 'ZA':'ZA', 'CN':'CN','TW':'TW','IN':'IN','PK':'PK','NG':'NG','MX':'MX','VN':'VN','IR':'IR','UA':'UA','CL':'CL','PT':'PT','TR':'TR','GR':'GR','FI':'FI','CO':'CO','HU':'HU','EG':'EG','IE':'IE','HR':'HR','RO':'RO','OTHER':'OT'};
//tags
var tags={'ONLINE_SHOPPING':16,'VIDEO':17,'GAME':18,'STUDENT':23,'JOURNEY':25,'CARTOON':26,'NOVEL':30,'SPORTS':33,'SOCIAL_NET':34,'NEWS_READING':35,'POTENTIAL_PAYER':66,'POTENTIAL_LOST_USER':67,'NEW_USER':68,'ACTIVE_USER':69};

//netTypes
var netTypes={'GPRS':'GPRS', 'GSM':'GSM', '_3G':'3G', '_4G':'4G', 'WIFI':'WIFI','EDGE':'EDGE','HSPA':'HSPA','HSUPA':'HSUPA','HSPAP':'HSPAP'};
var platforms={'ANDROID':'1','IOS_DEV':'2A','IOS_PRO':'2B'};
exports.messageType=messageType;
exports.sendType=sendType;
exports.messageAction=messageAction;
exports.warmType = warmType;
exports.countries = countries;
exports.tags = tags;
exports.netTypes = netTypes;
exports.platforms = platforms;
