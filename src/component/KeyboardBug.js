import React, { PureComponent } from "react";

export default class KeyboardBug extends PureComponent {
  constructor() {
    super();
    this.inputs = [];
  }
  onHandleBlur = () => {
    console.log("input blured");

    window.scrollTo(0, 0);
  };
  onHandleFocus = () => {
    console.log("input blured");

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  };
  componentDidMount() {
    this.inputs = document.querySelectorAll(".swiper-slide input");
    console.log("inputs", this.inputs);

    this.inputs.forEach(input => {
      input.addEventListener("blur", this.onHandleBlur);
      input.addEventListener("focus", this.onHandleFocus);
    });
  }
  componentWillUnmount() {
    this.inputs.forEach(input => {
      input.removeEventListener("blur", this.onHandleBlur);
      input.removeEventListener("focus", this.onHandleFocus);
      console.log("input listener removed");
    });
  }
  render() {
    return null;
  }
}
