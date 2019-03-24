import React, { PureComponent } from "react";

export default class KeyboardBug extends PureComponent {
  constructor() {
    super();
    const u = navigator.userAgent;
    this.isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
    this.originalHeight = window.innerHeight;
  }
  onHandleBlur = () => {
    console.log("input blured");

    window.body.scrollTo(0, 0);
    if (this.isAndroid) {
      document.documentElement.classList.remove("andorid");
    }
  };
  onHandleFocus = () => {
    console.log("input focus");
    document.documentElement.classList.add("andorid");
  };
  onHandleAndroidDismiss = () => {
    const currHeight = window.innerHeight;
    if (currHeight < this.originalHeight) {
      //当软键盘弹起，在此处操作
    } else {
      //当软键盘收起，在此处操作
      document.documentElement.classList.remove("andorid");
    }
  };
  componentDidMount() {
    console.log("inputs", this.inputs);
    // 利用冒泡，来捕捉失焦
    document.addEventListener("focusout", this.onHandleBlur);
    if (this.isAndroid) {
      window.onresize = this.onHandleAndroidDismiss;

      document.addEventListener("focusin", this.onHandleFocus);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("focusout", this.onHandleBlur);
    if (this.isAndroid) {
      document.removeEventListener("focusin", this.onHandleFocus);
    }
  }
  render() {
    return null;
  }
}
