import wx from "weixin-js-sdk";
import { initWX } from "../actions";
// import shareImg from "../assets/img/shareImg.jpg";

const ConfigWxShare = async (mid = 1) => {
  const { response: WxConfig } = await initWX(window.location.href);
  console.log("wtf", WxConfig);
  if (window.WEIXIN_SHARE === true) return;
  let { appId, timestamp, nonceStr, signature } = WxConfig;
  const title = `用互联网助力幼儿园运营管理升级主题论坛`;
  const desc = "专家大咖政策解读民办幼儿园新出路，用互联网赋能幼儿园。";
  const link = `${window.location.origin}/share_meeting/enroll/preindex/${mid}`;
  const imgUrl = `http://file.1d1d100.com/2019/3/21/c3c37dc4f0f84d6d80db94892171347a.jpg`;
  let jsApiList = [
    "scanQRCode",
    "chooseImage",
    "previewImage",
    "uploadImage",
    "downloadImage",
    "hideOptionMenu",
    "showOptionMenu",
    "getLocalImgData",
    "onMenuShareTimeline",
    "onMenuShareAppMessage",
    "translateVoice",
    "startRecord",
    "stopRecord",
    "onVoiceRecordEnd",
    "playVoice",
    "onVoicePlayEnd",
    "pauseVoice",
    "stopVoice",
    "uploadVoice",
    "downloadVoice",
    "getLocation"
  ];
  wx.config({
    debug: false, // turn on debug mode, call all return value of api, which will be in alert in client's end. To view the incoming parameters, this cane be opened on a pc, the parameter information will be displayed through a log, only to be printed on a pc.
    appId, // Required, the only identification of Official account.
    timestamp, // Required, generate a signed timestamp
    nonceStr, // Required, generate a signed nonceStr
    signature, // Required, signature. See Appendix 1
    jsApiList // Required, required JA interface list, all JS interface list, see Appendix 2
  });
  wx.error(function(res) {
    // config information failure will execute error function, such as expired signature to cause verification failure, the error message can be viewed via debug mode in config, also be viewed via returned res parameter. SPA can renew signature here.
    alert(JSON.stringify(res));
  });
  wx.ready(function() {
    window.WEIXIN_SHARE = true;
  });
  wx.onMenuShareTimeline({
    title, // Share title
    link, // Share link, this link domain name and path must be the same as the current page which corresponding to JS secured domain name as Official account
    imgUrl, // Share icons.
    success: function() {
      // The user confirms the callback function that was executed after sharing
    },
    cancel: function() {
      // The user cancels the callback function that was executed after sharing
    }
  });
  wx.onMenuShareAppMessage({
    title, // Share title
    desc, // Share description
    link, // Share Link,this link domain name and path must be the same as the current page which corresponding to JS secured domain name as Official account
    imgUrl, // Share Icon
    // type: "", // Share type, music, video link, not filled default link
    // dataUrl: "", // If type is music or video, provide data links, the default is empty
    success: function() {
      // The user confirms the callback function that was executed after sharing
    },
    cancel: function() {
      // The user cancels the callback function that was executed after sharing
    }
  });
};
export default ConfigWxShare;
