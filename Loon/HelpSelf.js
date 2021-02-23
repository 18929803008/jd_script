/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-02-23 09:14:48 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-02-23 17:34:17
 */

const $ = new Env('拿别人COOKIE助力自己 for Node')

// 以下是Github Action拿到的Cookie
let cookiesArr = [
  `pt_key=AAJgJjtwADARwXveqxxpSgbaPM5imHbXTRRH-GvBrxR4sfaUgvB0pxjk0GrYJRb1kcKM5iOQuf0;pt_pin=jd_7d62f858f655a;`,
  `pt_key=AAJgJj69ADCyROQW34rEVvelSZ7eXaQZyD8XgmryiF8I2aQKGUo3df0_LbKDbF2N-W_pW385WkA;pt_pin=HHYUI444;`,
  `pt_key=AAJgJj54ADC31O0Fk0IturZsiO_xti6hggPOOEQN0gqI1ASvyFVkGtHK_djgRpoqC54qsbf9Uz8;pt_pin=jd_7775a19d77004;`,
  `pt_key=AAJgJj0KADAXnPbj4ZeaW51VDGfm0qv_7Gn2NdUphh5zWQLLo9puaDB97G7ja8SKqsR0mFQrQaE;pt_pin=jd_WyVaMvKTSsGj;`,
  `pt_key=AAJgMlyVADBHIfiutlWcwSImopyetuVHVaT-f9-DxrCoVlchW7NO2yGT6WgPVUdvNxHAS7hT_s0; pt_pin=jd_pOncQVUYiahi;`,
  `pt_key=AAJgEXyCADBqH5xFUqy9yQVRXulHSntFcvaoEdfVs5unoKvIX9kggcTMaK8mif2Lx7bgtKJOs2s;pt_pin=jd_5b165cd72f5e4;`,
  `pt_key=AAJgHrjhADDnMcMERQW53ZTFcbVsxJ0zA_T2tqIRYkoqqLi-ma8FNjS6VVfs8yaf2ahnlH-bQyc;pt_pin=jd_iVUQZCrDCwFd;`,
]

// --------------------------@Turing Lab Bot--------------------------
// 以下自己的助力码，通过别人的Cookie助力自己
// ------------【常驻活动】------------
// 种豆得豆
let bean_ShareCode = [``]
// 东东农场
let farm_ShareCode = [`4625d3914d044bacbae685e9d60f14c8@554359d55fcc4a1fab5f17a946cbf338`]
// 东东萌宠
let pet_ShareCode = [`MTAxODEyMjkxMDAwMDAwMDQwMDQ5ODU5@MTE1NDQ5MzYwMDAwMDAwMzkwMTMzNTk=`]
// 京喜工厂
let jxfactory_ShareCode = [`vuPgt-FKtWwBSRuB_yxNJw==@7cgl2Xm_soDzanE7bzNVdA==`]
// 东东工厂
let ddfactory_ShareCode = [`T0225KkcRB5L81yFIhOmxv4DcwCjVWnYaS5kRrbA@T0225KkcRR5K9QfSJxL2kPBcdACjVWnYaS5kRrbA`]
// ------------【临时活动】------------
// 闪购盲盒
let jdSgmh = [`T0225KkcRB5L81yFIhOmxv4DcwCjVWmIaW5kRrbA@T0225KkcRR5K9QfSJxL2kPBcdACjVWmIaW5kRrbA`] 

// --------------------------@Commit Code Bot--------------------------
// 以下自己的助力码，通过别人的Cookie助力自己
// ------------【常驻活动】------------
// JD赚赚
let jdzz = [`AUWE5mq3DzWYND2j62XsclQ@AUWE5m63Cyz1aCmmqj3VDkg`]
// crazy joy
let jdcrazyjoy = [`qNOtcKihtPlqVT188Rh9_6t9zd5YaBeE@4hcydYCP_3SVJFTBkKtsLKt9zd5YaBeE`]
// 签到领现金
let jdcash = [`eU9YaOzgYPR082eHmXoa0Q@eU9YaezhZq8j9mbXz3RF1g`]

const JD_API_HOST = 'https://api.m.jd.com/client.action'

!(async () => {
  for (let i = 0; i < cookiesArr.length; i++) {
    // 拿到单条Cookie
    if (cookiesArr[i]) {
      cookie = cookiesArr[i]
      $.UserName = decodeURIComponent(
        cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1]
      )
      $.index = i + 1
      $.isLogin = true
      $.nickName = ''
      message = ''
      // 检查Cookie是否过期
      await TotalBean()
      if (!$.isLogin) {
        continue
      }
      // 助力自己
      await toHelpMyself()
    }
  }
  // 最后打印信息
  showFormatMsg()
})()
  .catch(e => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
  })
  .finally(() => {
    $.done()
  })

// 助力自己
async function toHelpMyself() {
  console.log(`======账号${$.index}开始======`)
  // 种豆得豆
  await helpPlantBean()
  
  console.log(`======账号${$.index}结束======\n`)
}

// 种豆得豆
async function helpPlantBean() {
// 助力码
const jdPlantBeanShareArr=[
  `e7lhibzb3zek2volndkiirtldf2etf3cbfqgk5y@mlrdw3aw26j3xtlnoc5rovsdcl364xjx4ctvrhq`
]

// 格式化助力码
function shareCodesFormat() {
    newShareCodes = [];
    return new Promise(async resolve => {
      newShareCodes = jdPlantBeanShareArr[0].split('@');
      console.log(`第${$.index}个京东账号将要助力的好友${JSON.stringify(newShareCodes)}`)
      resolve();
    })
}

// 助力好友
async function doHelp() {
  await shareCodesFormat()
  for (let plantUuid of newShareCodes) {
    console.log(`开始助力京东账号${$.index} - ${$.nickName}的好友: ${plantUuid}`);
    if (!plantUuid) continue;
    await helpShare(plantUuid);
    if ($.helpResult.code === '0') {
      // console.log(`助力好友结果: ${JSON.stringify($.helpResult.data.helpShareRes)}`);
      if ($.helpResult.data.helpShareRes) {
        if ($.helpResult.data.helpShareRes.state === '1') {
          console.log(`助力好友${plantUuid}成功`)
          console.log(`${$.helpResult.data.helpShareRes.promptText}\n`);
        } else if ($.helpResult.data.helpShareRes.state === '2') {
          console.log('您今日助力的机会已耗尽，已不能再帮助好友助力了\n');
          break;
        } else if ($.helpResult.data.helpShareRes.state === '3') {
          console.log('该好友今日已满9人助力/20瓶营养液,明天再来为Ta助力吧\n')
        } else if ($.helpResult.data.helpShareRes.state === '4') {
          console.log(`${$.helpResult.data.helpShareRes.promptText}\n`)
        } else {
          console.log(`助力其他情况：${JSON.stringify($.helpResult.data.helpShareRes)}`);
        }
      }
    } else {
      console.log(`助力好友失败: ${JSON.stringify($.helpResult)}`);
    }
  }
}

// 助力好友的api
async function helpShare(plantUuid) {
  console.log(`\n开始助力好友: ${plantUuid}`);
  const body = {
    "plantUuid": plantUuid,
    "wxHeadImgUrl": "",
    "shareUuid": "",
    "followType": "1",
  }
  $.helpResult = await request(`plantBeanIndex`, body);
  console.log(`助力结果的code:${$.helpResult && $.helpResult.code}`);
}

// 请求体
function request(function_id, body = {}){
  return new Promise(async resolve => {
    await $.wait(2000);
    $.post(taskUrl(function_id, body), (err, resp, data) => {
      try {
        if (err) {
          console.log('\n种豆得豆: API查询请求失败 ‼️‼️')
          console.log(`function_id:${function_id}`)
          $.logErr(err);
        } else {
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    })
  })
}
function taskUrl(function_id, body) {
  body["version"] = "9.2.4.0";
  body["monitor_source"] = "plant_app_plant_index";
  body["monitor_refer"] = "";
  return {
    url: JD_API_HOST,
    body: `functionId=${function_id}&body=${escape(JSON.stringify(body))}&appid=ld&client=apple&area=19_1601_50258_51885&build=167490&clientVersion=9.3.2`,
    headers: {
      "Cookie": cookie,
      "Host": "api.m.jd.com",
      "Accept": "*/*",
      "Connection": "keep-alive",
      "User-Agent": $.isNode() ? (process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : (require('./USER_AGENTS').USER_AGENT)) : ($.getdata('JDUA') ? $.getdata('JDUA') : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0"),
      "Accept-Language": "zh-Hans-CN;q=1,en-CN;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    timeout: 10000,
  }
}

  // 助力
  await doHelp()
}



function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      headers: {
        Accept: 'application/json,text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-cn',
        Connection: 'keep-alive',
        Cookie: cookie,
        Referer: 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'User-Agent': $.isNode()? process.env.JD_USER_AGENT? process.env.JD_USER_AGENT: require('./USER_AGENTS').USER_AGENT: $.getdata('JDUA')? $.getdata('JDUA'): 'jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0',
      },
    }
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`)
          console.log(`${$.name} API请求失败，请检查网路重试`)
        } else {
          if (data) {
            data = JSON.parse(data)
            if (data['retcode'] === 13) {
              $.isLogin = false //cookie过期
              return
            }
            $.nickName = data['base'].nickname
          } else {
            console.log(`京东服务器返回空数据`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}


// 最后打印信息
function showFormatMsg() {
  console.log('1');
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}