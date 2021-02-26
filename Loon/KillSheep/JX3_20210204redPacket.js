/*
 * @Author: Xin https://github.com/Xin-code 
 * @Date: 2021-02-04 13:11:59 
 * @Last Modified by: Xin 
 * @Last Modified time: 2021-02-26 17:02:56
 * 
 * 剑三通宝红包
 * 
 */

const $ = new Env("剑三通宝红包")
// ------------------------------🕛2月4日 小年--------------------------------
// 12：00 郭炜炜
// jx3hb = '剑网3真好玩'
// 15:00 官博
// jx3hb = '郭炜炜最帅'
// 15:30 官博
// jx3hb = '侠之大者'
// 16:00 同人秀
// jx3hb = '嗨老婆'
// 17:00 客户服务
// jx3hb = '小红手快出来'
// 19:00 咸鱼
// jx3hb = '小年夜快乐'
// ------------------------------🕛2月11日 除夕--------------------------------
// 12：00 郭炜炜
// jx3hb = '除旧迎新年'
// 15:00 官博
// jx3hb = '年夜饭吃啥'
// 16:00 同人秀
// jx3hb = '老公贴贴'
// 17:00 客户服务
// jx3hb = '今天开服了吗'
// 19:00 咸鱼
// jx3hb = '上线一起吃年夜饭'
// ------------------------------🕛2月12日 春节--------------------------------
// 12：00 郭炜炜
// jx3hb = '新春新气象'
// 15:00 官博
// jx3hb = '回家一起看烟花吧'
// 16:00 同人秀
// jx3hb = '今年一定产粮'
// 17:00 客户服务
// jx3hb = '今天不用维护'
// 19:00 咸鱼
// jx3hb = '新年大吉阖家欢乐'
// ------------------------------🕛2月26日 元宵节--------------------------------
// 12：00 郭炜炜
// jx3hb = '团圆万事兴'
// 15:00 官博
// jx3hb = '剑网3玩家的本质是'
// 16:00 同人秀
// jx3hb = '太太饭饭饿饿'
// 17:00 客户服务
// jx3hb = '昨天开过服了'
// 19:00 咸鱼
// jx3hb = ''


// nowTimeStamp = ''

const CookiesArr = [
  // z975203723
  `_wsi1=cae568909176fb467c484b263a0cd17ec1f0da64; _wsi4=cae568909176fb467c484b263a0cd17ec1f0da64; _wsi2=8cedf77f9466fc5875e72eaeca54a53c78096daa; _wsi3=9e3db4772a3a13c7c186db9f7864f08a01e77e8e; session_id_=OjFb5d6fLKi7uIBw8KVzvA8oSP7BLu6s3cDu25OF; session_id=OjFb5d6fLKi7uIBw8KVzvA8oSP7BLu6s3cDu25OF; xoyokey_=WEU%21%210KN%262NE%3DZtg%21Zj%21%26%26qKDDN0%2F%3DUPC%21jtj%26qfN220%2F%3DrtZj%26qKDN%21P.Cr%21%26M2gZCC.U%26%21.i%219PMK4j%21rU%3D9qrg%2FZ%21MjxB%26g%21jCj4%26t%3D%3D%26jj; xoyokey=WEU%21%210KN%262NE%3DZtg%21Zj%21%26%26qKDDN0%2F%3DUPC%21jtj%26qfN220%2F%3DrtZj%26qKDN%21P.Cr%21%26M2gZCC.U%26%21.i%219PMK4j%21rU%3D9qrg%2FZ%21MjxB%26g%21jCj4%26t%3D%3D%26jj`,
  // rui1771179
  `_wsi1=e7824aef8e776aab7701afe282ea79dc625f4e39; _wsi4=e7824aef8e776aab7701afe282ea79dc625f4e39; _wsi2=d57cd88e5ac212652d94c81d798bd5bf08bcaf99; _wsi3=1272b629c110453c60a928a93e05c3aa0dc528e9; session_id_=7t6Gvsf1l9NUpQKbGsUWghyqXxBVpVi0KImtCLRQ; session_id=7t6Gvsf1l9NUpQKbGsUWghyqXxBVpVi0KImtCLRQ; xoyokey_=b%5CMr%2F%2F7K%264y%3DeM88MM8u%26%26KD%21EE57S%3DMMr%2Fk%2F8%2F%26Km54D7%3DeM88%26D%3DC.u%2F%26%21UqZ8kwCM%2Fw.-%3D%21k%26q44%3D%26rwS5M%26LwK%26%2F8r5M.TuwDCS5uL5E58; xoyokey=b%5CMr%2F%2F7K%264y%3DeM88MM8u%26%26KD%21EE57S%3DMMr%2Fk%2F8%2F%26Km54D7%3DeM88%26D%3DC.u%2F%26%21UqZ8kwCM%2Fw.-%3D%21k%26q44%3D%26rwS5M%26LwK%26%2F8r5M.TuwDCS5uL5E58; OZ_1U_751=vid=v038a676bb4810.0&ctime=1614325374&ltime=1614325372; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325365&ctime=1614325374&ltime=1614325372&compid=751; OZ_SI_751=sTime=1614325365&sIndex=7`,
  // 君泠
  `_wsi1=1f18df4e0ea66d264ef18665069e73ba23641869; _wsi4=1f18df4e0ea66d264ef18665069e73ba23641869; _wsi2=96c594cb3d72583f002d6c7931d5cd5aba8a33db; _wsi3=15f47652656394f101efbb1bea7e2128df2b4447; session_id_=v4Zi9ba4zTgQzS0yVf3gvwNa9hXKQQG2r7PWFcz0; session_id=v4Zi9ba4zTgQzS0yVf3gvwNa9hXKQQG2r7PWFcz0; xoyokey_=lq6TLDpn%26nkr%3DT46D6EKgg%26%26JjiCCn8p%3DL6LK4LD%26%26JM7na8LT6Kg%26iCnT6..EEDiak%3DD6.TK84jLajDgpDJ%26%3D%26m%3DDJmTDaj%26eLHLE%3D4cKLD%26DgH; xoyokey=lq6TLDpn%26nkr%3DT46D6EKgg%26%26JjiCCn8p%3DL6LK4LD%26%26JM7na8LT6Kg%26iCnT6..EEDiak%3DD6.TK84jLajDgpDJ%26%3D%26m%3DDJmTDaj%26eLHLE%3D4cKLD%26DgH; OZ_1U_751=vid=v038a69d17e5d0.0&ctime=1614325417&ltime=1614325415; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325404&ctime=1614325417&ltime=1614325415&compid=751; OZ_SI_751=sTime=1614325404&sIndex=14`,
  // zx975203723
  `_wsi1=13dc44cff05787103bd3840da1489913de23ef2e; _wsi4=13dc44cff05787103bd3840da1489913de23ef2e; _wsi2=eaaa2a66acebf7ca5f09eba8d66d885587157021; _wsi3=13ff4a37102fbad1546d445f0fe20412ca0a7cb7; session_id_=rTnuoaA3A5dxq7iG4IRe5UIHikCo8RlRNfHeqhPb; session_id=rTnuoaA3A5dxq7iG4IRe5UIHikCo8RlRNfHeqhPb; xoyokey_=eBce11W%3D%26uoM_si01e8a0ea%26%26WBlUUft%3DcYcLaeL%26%26WuBf%3D_s1e8ae%26lUCeLii.al8YYfYctJ1YLJH%26-.%26uu%261L0J%3DLL0iatJcJB.W%3Da0%3DzoBac%26; xoyokey=eBce11W%3D%26uoM_si01e8a0ea%26%26WBlUUft%3DcYcLaeL%26%26WuBf%3D_s1e8ae%26lUCeLii.al8YYfYctJ1YLJH%26-.%26uu%261L0J%3DLL0iatJcJB.W%3Da0%3DzoBac%26; OZ_1U_751=vid=v038a6c0dc0e2d.0&ctime=1614325457&ltime=1614325456; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325440&ctime=1614325457&ltime=1614325456&compid=751; OZ_SI_751=sTime=1614325440&sIndex=11`,
  // zxg975203723
  `_wsi1=ed73bf190df2a55df5b6e3961201de6f802d7d07; _wsi4=ed73bf190df2a55df5b6e3961201de6f802d7d07; _wsi2=5d4f084391f699b67e92f0bbc75fcc939e64744d; _wsi3=e529cf2388909592ad044efa205002cc248acdcd; session_id_=9RCbUrwEojBfcR7XRd0EQOFPx5QigSFTcD0NPUqF; session_id=9RCbUrwEojBfcR7XRd0EQOFPx5QigSFTcD0NPUqF; xoyokey_=LOBja%21q9%3D%26S4D%3D2t7CgaJHMgJM%269qUKKS8%21%3DBBMJajH%26%269q8%212tJHMJM%269q5%3D6jCM%26%3Dgj46UC6%26BjM-%26.C%268HgLHS-mCUCgSWjJ.-.7a6S-g7M%3D%26KJ; xoyokey=LOBja%21q9%3D%26S4D%3D2t7CgaJHMgJM%269qUKKS8%21%3DBBMJajH%26%269q8%212tJHMJM%269q5%3D6jCM%26%3Dgj46UC6%26BjM-%26.C%268HgLHS-mCUCgSWjJ.-.7a6S-g7M%3D%26KJ; OZ_SI_751=sTime=1614325479&sIndex=12; OZ_1U_751=vid=v038a6e7083246.0&ctime=1614325491&ltime=1614325490; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325479&ctime=1614325491&ltime=1614325490&compid=751`,
  // zzz975203723
  `_wsi1=c781a2362c9f88ed9b8637d83c1eecf064a1a5b6; _wsi4=c781a2362c9f88ed9b8637d83c1eecf064a1a5b6; _wsi2=293842e959b4e980b79676b5225805201b595bbc; _wsi3=859e1b1d631a8e5755251424e818d404898949fc; session_id_=IhxYQlJd4Wt8q2n2pt2EVh1UHILOHNjgv1NIdDzz; session_id=IhxYQlJd4Wt8q2n2pt2EVh1UHILOHNjgv1NIdDzz; xoyokey_=Uq_aza2%3D%26%26Nx9%3D555k0za8W0W%26%26-2o44MfB%3D_YWazaZ%26%26-sMfB50a8W%26-4M%2FW.at.%26%26okzaYtakZWWaNHtx00Wo%3D.85zBka-fN5tu%3D2%3D_k2_NY%26MzM; xoyokey=Uq_aza2%3D%26%26Nx9%3D555k0za8W0W%26%26-2o44MfB%3D_YWazaZ%26%26-sMfB50a8W%26-4M%2FW.at.%26%26okzaYtakZWWaNHtx00Wo%3D.85zBka-fN5tu%3D2%3D_k2_NY%26MzM; OZ_1U_751=vid=v038a70a6449a6.0&ctime=1614325530&ltime=1614325528; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325514&ctime=1614325530&ltime=1614325528&compid=751; OZ_SI_751=sTime=1614325513&sIndex=12`,
  // x975203723
  `_wsi1=8e9e5995e535d9958ef057d5903ac468de3495ca; _wsi4=8e9e5995e535d9958ef057d5903ac468de3495ca; _wsi2=51dbba0da4a442892d81a7ac60f01f2f222fe575; _wsi3=bc22441fe7db71755412743a864dec2e3b8add81; session_id_=4sceU8UPcrqhpgLKLyYNXOsGHSvEvcCMUbKgGznO; session_id=4sceU8UPcrqhpgLKLyYNXOsGHSvEvcCMUbKgGznO; xoyokey_=%5Bj-MUo4K%3D%26KT%3DWfU4fU4%26%26L2iiKH9%3D--MUoP%26Z11LH%3D%21fo74fU4e2%3DPUM.M1%3DfMP%214H%269LiE4.%26x%2627K04aW%26U3e%21o9%26.Pe4-U4oPL%2613eK%21o7; xoyokey=%5Bj-MUo4K%3D%26KT%3DWfU4fU4%26%26L2iiKH9%3D--MUoP%26Z11LH%3D%21fo74fU4e2%3DPUM.M1%3DfMP%214H%269LiE4.%26x%2627K04aW%26U3e%21o9%26.Pe4-U4oPL%2613eK%21o7; OZ_1U_751=vid=v038a72fcddf6c.0&ctime=1614325564&ltime=1614325562; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325550&ctime=1614325564&ltime=1614325562&compid=751; OZ_SI_751=sTime=1614325550&sIndex=12`,
  // rui17711799
  `_wsi1=9bdb0f5bf49dfc01a13fe222c9ddd6d4d30a38ca; _wsi4=9bdb0f5bf49dfc01a13fe222c9ddd6d4d30a38ca; _wsi2=d9ec228b5e6c474b77795b6f9228715665d4fe82; _wsi3=e1e827832d21f5a81c4cde5ea10b94ff48337c78; session_id_=0yZZvuTDL8khziOnWs5lAlYbo3UrkYn7cNSXSd1r; session_id=0yZZvuTDL8khziOnWs5lAlYbo3UrkYn7cNSXSd1r; xoyokey_=%60n6Bc4%265%21-q%3Dy1%21o77oo7JJ%26%2624W99%21m%3Do6okBccc%26g54mU1o77J%26%2629%21SBtJJ.kW078mto265B47UJ.%26%3DkJJ%3Dt%21ty2.c%267%26-k%3D%3D%26_%21Uoo%215Woc3; xoyokey=%60n6Bc4%265%21-q%3Dy1%21o77oo7JJ%26%2624W99%21m%3Do6okBccc%26g54mU1o77J%26%2629%21SBtJJ.kW078mto265B47UJ.%26%3DkJJ%3Dt%21ty2.c%267%26-k%3D%3D%26_%21Uoo%215Woc3; OZ_1U_751=vid=v038a7505ca137.0&ctime=1614325596&ltime=1614325595; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325584&ctime=1614325596&ltime=1614325595&compid=751; OZ_SI_751=sTime=1614325584&sIndex=12`,
  // rui177117999
  `_wsi1=8ec9d7fdb6dbd3fea3cd8232abb39397c45b5a6e; _wsi4=8ec9d7fdb6dbd3fea3cd8232abb39397c45b5a6e; _wsi2=164b1318216b446d498509043a03ef0a1b483372; _wsi3=b027234d82b7c1739b5dc73c3d8da65e971c0ae9; session_id_=SdmFWGsftqC8nTsK7cK08mbAFKb2iJ85OTu27hRB; session_id=SdmFWGsftqC8nTsK7cK08mbAFKb2iJ85OTu27hRB; xoyokey_=O%5DncEPo_%3DCtuB%3D%2FStnZZnnZeee%26%26_ozWWt0%3Dn3sEPc_ftC0l%3D%2FZZnZeeeozcP3e3%26CgZHH%3D%26P.%2633z%265ntu%26o_%26scsct3Gec3.%3DJt%26nPnS%26lC0nlW.; xoyokey=O%5DncEPo_%3DCtuB%3D%2FStnZZnnZeee%26%26_ozWWt0%3Dn3sEPc_ftC0l%3D%2FZZnZeeeozcP3e3%26CgZHH%3D%26P.%2633z%265ntu%26o_%26scsct3Gec3.%3DJt%26nPnS%26lC0nlW.; OZ_1U_751=vid=v038a775032f8d.0&ctime=1614325644&ltime=1614325642; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325621&ctime=1614325644&ltime=1614325642&compid=751; OZ_SI_751=sTime=1614325621&sIndex=18`,
  // rrui1771179
  `_wsi1=fdf1c41bcf229a9b8c53750de1077320a2f8d90a; _wsi4=fdf1c41bcf229a9b8c53750de1077320a2f8d90a; _wsi2=86ab535d5dcb345e6570b3822837872e6b0f3769; _wsi3=4e7c95a6d21aae1aac83d8172131639bf0b343ac; session_id_=qs2TVGoCwR1AMzfrN1WlRL0x0p4Hn9suGMZXAFnQ; session_id=qs2TVGoCwR1AMzfrN1WlRL0x0p4Hn9suGMZXAFnQ; xoyokey_=CB%21rJfD%3D%269K1LLix%21ff%21%21f_%26%26DE%2FyyHN%3D%21P%21uSrP%26%26D9EH%3DLL%21ff%21f%26%2Fy2ru__.S%2F70_HPuNxJPPxZ%26p.%2699%26fuxx%3DurfiSNx%21xE.D%3D_%21%3DMKESu%26; xoyokey=CB%21rJfD%3D%269K1LLix%21ff%21%21f_%26%26DE%2FyyHN%3D%21P%21uSrP%26%26D9EH%3DLL%21ff%21f%26%2Fy2ru__.S%2F70_HPuNxJPPxZ%26p.%2699%26fuxx%3DurfiSNx%21xE.D%3D_%21%3DMKESu%26; OZ_1U_751=vid=v038a7a1e7f959.0&ctime=1614325675&ltime=1614325674; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325664&ctime=1614325675&ltime=1614325674&compid=751; OZ_SI_751=sTime=1614325664&sIndex=11`,
  // r1532141950
  `_wsi1=2b857d727af7d151ef74456600e7130a52e8c823; _wsi4=2b857d727af7d151ef74456600e7130a52e8c823; _wsi2=69ee35e3e9c6baf1f01f8a165f2a1bf129135abe; _wsi3=7cd4d187e58f91c2a5b05736d67ca9e70b74c77d; session_id_=rbe1b4OA11GNcXzJxZdHpwRd4EphAUEbg1QLNB0t; session_id=rbe1b4OA11GNcXzJxZdHpwRd4EphAUEbg1QLNB0t; xoyokey_=Jouo8tU%3D%26%26S4%3DunoluautnZ%26%26x_22U7W%3Duuaol8Z%26%26x1mS-oluaun%26-2U%3Do.to%26%26r5Z8%3DwZaZwa_S7Unlx-t_la-lS%3D.7D%26nxtWZwtnnU%21uWu5.D; xoyokey=Jouo8tU%3D%26%26S4%3DunoluautnZ%26%26x_22U7W%3Duuaol8Z%26%26x1mS-oluaun%26-2U%3Do.to%26%26r5Z8%3DwZaZwa_S7Unlx-t_la-lS%3D.7D%26nxtWZwtnnU%21uWu5.D; OZ_SI_751=sTime=1614325694&sIndex=10; OZ_1U_751=vid=v038a7beb2f270.0&ctime=1614325710&ltime=1614325709; OZ_1Y_751=erefer=-&eurl=https%3A//jx3.xoyo.com/tbhb/%23/&etime=1614325694&ctime=1614325710&ltime=1614325709&compid=751`,
]

const role_nameArr =[]

!(async () => {

  // getTime()
  // await $.wait(100)

  // 查找用户信息
  for(let i=0;i<CookiesArr.length;i++){
    await $.wait(200)
    nowCookie = CookiesArr[i]
    await $.wait(200)
    await 
    getUserInfo()
  }
  
  // 获得通宝
  for(let j=0;j<CookiesArr.length;j++){
    await $.wait(200)
    nowCookie = CookiesArr[j]
    await $.wait(200)
    nowrole_name = role_nameArr[j]
    await $.wait(200)
    await GetHB()
  }

  })()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())



// 红包
function GetHB(){
  return new Promise((resolve) => { 
    const myRequest = {
      // 获得奖励URL
     url: `https://ws.xoyo.com/jx3/redpacket210108/receive_packet?channel=%E6%B5%8F%E8%A7%88%E5%99%A8&from_source=2&role_name=${nowrole_name}&server_name=%E7%A0%B4%E9%98%B5%E5%AD%90&uid=${jx3hb}&zone_id=z21&zone_name=%E5%8F%8C%E7%BA%BF%E4%B8%80%E5%8C%BA%EF%BC%88%E7%82%B9%E5%8D%A1%EF%BC%89&__ts__=1612423897292&callback=`,
     headers: {
       // Cookie抓包获取
       'Cookie' : `${nowCookie}`,
       'Accept-Encoding' : `gzip, deflate, br`,
       'Connection' : `keep-alive`,
       'Accept' : `*/*`,
       'Host' : `ws.xoyo.com`,
       'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1`,
       'Accept-Language' : `zh-CN,zh;q=0.9`
     },
 };
   // get请求 请求地址&请求头 (错误，错误响应数据,成功返回的JSON数据)
   $.get(myRequest, (error, response, data) => {
     if(data){
      console.log(`----------兑换结果----------`);
       console.log("通宝反馈数据:"+data);
       temp = JSON.parse(data)
       if(temp.status!==`-20202`||`-20204`){
       let nowname =decodeURI(nowrole_name)
       console.log(nowname+`获得：`+temp.data.receive_money+`通宝`);
       $.totalTB=$.totalTB+temp.data.receive_money
       }else{
         console.log(temp.msg);
       }
     }
      if(error){
      console.log("响应失败："+response + "\n" + data);
      }
       })
     resolve()
    }) 
 }

// 查找自己的 信息
// https://ws.xoyo.com/jx3/redpacket210108/get_role_info?__ts__=1612664895408&callback=
function getUserInfo(){
  return new Promise((resolve) => { 
    const myRequest = {
      // 获得奖励URL
     url: `https://ws.xoyo.com/jx3/redpacket210108/get_role_info?__ts__=1612664895408&callback=`,
     headers: {
       // Cookie抓包获取
       'Cookie' : `${nowCookie}`,
       'Accept-Encoding' : `gzip, deflate, br`,
       'Connection' : `keep-alive`,
       'Accept' : `*/*`,
       'Host' : `ws.xoyo.com`,
       'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1`,
       'Accept-Language' : `zh-CN,zh;q=0.9`
     },
 };
   // get请求 请求地址&请求头 (错误，错误响应数据,成功返回的JSON数据)
   $.get(myRequest, (error, response, data) => {
     if(data){
      //  console.log("反馈数据:"+data);
       temp=JSON.parse(data)
       role_nameArr.push(encodeURI(temp.data.role_name))
      //  console.log(role_nameArr);
     }
      if(error){
      console.log("响应失败："+response + "\n" + data);
      }
       })
     resolve()
    }) 
 }


 // 获得时间戳
 function getTime(){
  nowTimeStp = Date.parse(new Date())
  console.log(`🕛现在的时间戳：`+nowTimeStp.toString().substr(0,10))
  $.nowTimeStamp = nowTimeStp
 }

// 登录
// https://pf-api.xoyo.com/passport/common_api/login?account=&password&geetest_challenge=4765de1d5b13e8c36d7a0c3af90ef4229m&geetest_validate=7fd08ecd47ff5d3b5e3d837c86d3930b&geetest_seccode=7fd08ecd47ff5d3b5e3d837c86d3930b%7Cjordan&geetest_gt=80c0ce0a5b35e4dcb473eee39844038b&__ts__=1612662901158&callback=__xfe4

// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}