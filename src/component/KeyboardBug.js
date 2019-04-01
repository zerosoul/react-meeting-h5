import { useEffect } from "react";

const KeyboardBug = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
  const originalHeight = window.innerHeight;

  const onHandleBlur = () => {
    console.log("input blured");

    document.body.scrollTo(0, 0);
    if (isAndroid) {
      document.documentElement.classList.remove("andorid");
    }
  };
  const onHandleFocus = evt => {
    console.log("input focus", evt);
    const ele = evt.target;
    if (ele.tagName === "INPUT") {
      document.documentElement.classList.add("andorid");
    }
  };
  const onHandleAndroidDismiss = () => {
    const currHeight = window.innerHeight;
    if (currHeight < originalHeight) {
      //当软键盘弹起，在此处操作
      document.documentElement.classList.add("andorid");
    } else {
      //当软键盘收起，在此处操作
      document.documentElement.classList.remove("andorid");
    }
  };
  useEffect(() => {
    // 利用冒泡，来捕捉失焦
    document.addEventListener("focusout", onHandleBlur);
    if (isAndroid) {
      window.onresize = onHandleAndroidDismiss;

      document.addEventListener("focusin", onHandleFocus);
    }
    return () => {
      document.removeEventListener("focusout", onHandleBlur);
      if (isAndroid) {
        document.removeEventListener("focusin", onHandleFocus);
      }
    };
  });

  return null;
};
export default KeyboardBug;
