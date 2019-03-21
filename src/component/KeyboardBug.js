import React, { PureComponent } from "react";

export default class KeyboardBug extends PureComponent {
  constructor() {
    super();
    this.inputs = [];
    const u = navigator.userAgent;
    this.isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
  }
  onHandleBlur = () => {
    console.log("input blured");

    window.scrollTo(0, 0);
    if (this.isAndroid) {
      document.documentElement.classList.remove("andorid");
    }
  };
  onHandleFocus = () => {
    console.log("input blured");
    document.documentElement.classList.add("andorid");
  };
  componentDidMount() {
    if (this.isAndroid) {
      this.inputs = document.querySelectorAll(".swiper-slide input");
      console.log("inputs", this.inputs);

      this.inputs.forEach(input => {
        input.addEventListener("blur", this.onHandleBlur);
        input.addEventListener("focus", this.onHandleFocus);
      });
    }
  }
  componentWillUnmount() {
    if (this.isAndroid) {
      this.inputs.forEach(input => {
        input.removeEventListener("blur", this.onHandleBlur);
        input.removeEventListener("focus", this.onHandleFocus);
        console.log("input listener removed");
      });
    }
  }
  render() {
    return null;
  }
}
