import axios from "axios";
const APIDomain = "http://wechatapi.1d1d100.net";

const request = options => {
  const {
    type = "get", //请求方式
    data, //数据体
    url, //请求地址
    end, //请求结束事件
    origin = APIDomain
  } = options;

  let status = "error";
  let response;
  let cancel;
  // const config = {
  //   headers: {
  //     'content-type': 'application/json',
  //     Authorization: `${Cookie.get('Authorization')}`
  //   },
  //   cancelToken: new CancelToken(c => {
  //     cancel = c;
  //   })
  // };
  axios({
    method: type,
    url: `${origin}/${url}`,
    data,
    cache: false,
    withCredentials: true,
    crossDomain: true,
    //   ...config,
    timeout: 60000
  })
    .then(res => {
      console.log("then", res);

      switch (res.data.code) {
        case 0:
          status = "success";
          response = res.data.data;
          break;
        case 10004:
          status = "fail";
          response = res.data.data;
          break;

        default:
          if (res.status == 200) {
            // 接口只有200 响应的情况
            status = "success";
          } else {
            alert("接口错误！");
            response = { msg: "接口错误" };
          }
          break;
      }
    })
    .catch(err => {
      if (!axios.isCancel(err)) {
        alert(err.toString().substring(0, 400));
      }
    })
    .then(() => {
      end(status, response);
    });
  return cancel;
};

// 获取微信Token
export const getWxToken = () =>
  new Promise(resolve => {
    request({
      url: `wx/token`,
      end: (status, response) => {
        resolve({ status, response });
      }
    });
  });

// 发送验证码
export const getSMSCode = mobile =>
  new Promise(resolve => {
    request({
      url: `enroll/sendsms/${mobile}`,
      end: (status, response) => {
        resolve({ status, response });
      }
    });
  });
// 获取会议详情
export const getMeetingDetail = (id = 1) =>
  new Promise(resolve => {
    request({
      url: `meeting/getone/${id}/1`,
      end: (status, response) => {
        resolve({ status, response });
      }
    });
  });
// 获取报名列表
export const getSubmitList = (id = 1) =>
  new Promise(resolve => {
    request({
      url: `enroll/list_for_school/${id}`,
      end: (status, response) => {
        resolve({ status, response });
      }
    });
  });
// 提交申请
export const postMeetingInfo = data =>
  new Promise(resolve => {
    const { meetingid, ...rest } = data;
    request({
      type: "post",
      url: `enroll/index/${meetingid}`,
      data: rest,
      end: (status, response) => {
        resolve({ status, response });
      }
    });
  });
