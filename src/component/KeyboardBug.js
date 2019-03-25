import React, { PureComponent } from "react";

export default class KeyboardBug extends PureComponent {
  constructor() {
    super();
    const u = navigator.userAgent;
    this.isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
    this.originalHeight = window.innerHeight;
    this.timeVal = 0;
  }
  onHandleBlur = () => {
    console.log("input blured");
    this.timeVal = setTimeout(() => {
      window.body.scrollTo(0, 0);
    }, 300);
    if (this.isAndroid) {
      document.documentElement.classList.remove("andorid");
    }
  };
  onHandleFocus = evt => {
    console.log("input focus", evt);
    clearTimeout(this.timeVal);
    if (this.isAndroid) {
      let ele = evt.target;
      if (ele.tagName === "INPUT") {
        document.documentElement.classList.add("andorid");
      }
    }
  };
  onHandleAndroidDismiss = () => {
    const currHeight = window.innerHeight;
    if (currHeight < this.originalHeight) {
      //当软键盘弹起，在此处操作
      document.documentElement.classList.add("andorid");
    } else {
      //当软键盘收起，在此处操作
      document.documentElement.classList.remove("andorid");
    }
  };
  componentDidMount() {
    console.log("inputs", this.inputs);
    // 利用冒泡，来捕捉失焦
    document.addEventListener("focusout", this.onHandleBlur);
    document.addEventListener("focusin", this.onHandleFocus);
    if (this.isAndroid) {
      window.onresize = this.onHandleAndroidDismiss;
    }
  }
  componentWillUnmount() {
    document.removeEventListener("focusout", this.onHandleBlur);
    document.removeEventListener("focusin", this.onHandleFocus);
    if (this.isAndroid) {
      window.onresize = null;
    }
  }
  render() {
    return null;
  }
}
