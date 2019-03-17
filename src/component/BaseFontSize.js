import React, { PureComponent } from "react";

export default class BaseFontSize extends PureComponent {
  constructor() {
    super();
    this.baseSize = 0;
    this.timer = null;
  }
  setBaseSize = () => {
    this.baseSize = (document.documentElement.clientWidth / 750) * 40;
    this.baseSize = this.baseSize > 40 ? 40 : this.baseSize;
    document.documentElement.style.fontSize = this.baseSize + "px";
  };
  componentDidMount() {
    let t = this.timer;
    window.addEventListener(
      "resize",
      () => {
        t && clearTimeout(t);
        this.timer = setTimeout(this.setBaseSize, 300);
      },
      false
    );
    this.setBaseSize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize");
  }
  render() {
    return null;
  }
}
