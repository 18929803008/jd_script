/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-01-26 21:09:52 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-02-20 16:25:12
 */

const $ = new Env("万年历极速版")
let index = 0

!(async () => {
  for(var i =0;i<100000000;i++){
    index = i
  AutoRead()
  await $.wait(100);
}
})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())


// 封装函数
function AutoRead(){
 return new Promise((resolve) => { 
   const myRequest = {
    // 福利中心
    // url: `http://coin.makingmoney.cn:8088/task/award?guid=037A2282-CC50-4F82-9310-17BACDAB885B&task_id=6029&adtask_id=74&ver=1.1.1&systemver=14.2&bid=com.calendar.jishi.app&mt=1&sw=375&sh=667&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=055bb7e865aa346bda1a2860a32e0eb8`,
    // url: `http://coin.makingmoney.cn:8088/task/award?guid=0CDF5067-D3F2-49C7-AB9B-60440A608B49&task_id=6029&adtask_id=${index}&ver=1.1.1&systemver=14.3&bid=com.calendar.jishi.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=1299c41cedd0246e95ed06ab3f560359`,
    // url: `http://coin.makingmoney.cn:8088/task/award?guid=0CDF5067-D3F2-49C7-AB9B-60440A608B49&task_id=6029&adtask_id=74&ver=1.1.1&systemver=14.3&bid=com.calendar.jishi.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=8076e30473ae98311b8c21af279187d9`,
    // url: `http://coin.makingmoney.cn:8088/task/award?guid=0CDF5067-D3F2-49C7-AB9B-60440A608B49&task_id=6029&adtask_id=76&ver=1.1.1&systemver=14.3&bid=com.calendar.jishi.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=4d32b4acde420148b0a3a05f5d3ca900`,
    // url: `http://coin.makingmoney.cn:8088/task/award?guid=0CDF5067-D3F2-49C7-AB9B-60440A608B49&task_id=6029&adtask_id=73&ver=1.1.1&systemver=14.3&bid=com.calendar.jishi.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=24567dc2409901a231b41102bf0cb03a`,
    // url: `http://coin.makingmoney.cn:8088/task/award?guid=0CDF5067-D3F2-49C7-AB9B-60440A608B49&task_id=6029&adtask_id=72&ver=1.1.1&systemver=14.3&bid=com.calendar.jishi.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=3c8bfb56e7603bf0ecb69b9fed8b3312`,
    // url: `http://coin.makingmoney.cn:8088/task/award?guid=0CDF5067-D3F2-49C7-AB9B-60440A608B49&task_id=6029&adtask_id=71&ver=1.1.1&systemver=14.3&bid=com.calendar.jishi.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=4f366bde554f247b3e3a5afced27ccf3`,
    // 签到奖励
    url: `http://coin.makingmoney.cn:8088/task/award?guid=0CDF5067-D3F2-49C7-AB9B-60440A608B49&task_id=6007&ver=1.1.1&systemver=14.3&bid=com.calendar.jishi.app&mt=1&sw=375&sh=812&device=iPhone&idiom=0&chl=AppStore&language=zh-Hans-CN&locale=CN&zone=Asia%2FShanghai&sign=a3d29fa3c45276dda7ca1ee325fc0d4f`,
    headers: {
      // Cookie抓包获取
      'Cookie' : ``,
      'Accept-Encoding' : `gzip, deflate`,
      'Connection' : `close`,
      'Accept' : `*/*`,
      'Host' : `coin.makingmoney.cn:8088`,
      'User-Agent' : `%E4%B8%87%E5%B9%B4%E5%8E%86%E6%9E%81%E9%80%9F%E7%89%88/1 CFNetwork/1206 Darwin/20.1.0`,
      'Accept-Language' : `zh-cn`
    },
};
  // get请求 请求地址&请求头 (错误，错误响应数据,成功返回的JSON数据)
  $.get(myRequest, (error, response, data) => {
    if(data){
      console.log("当前任务ID:"+index);
      console.log("相应数据成功:"+data);
    }
     if(error){
     console.log("响应失败："+response + "\n\n" + data);
     }
      })
    resolve()
   }) 
}

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}