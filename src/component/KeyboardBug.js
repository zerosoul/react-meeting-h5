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
  componentDidMount() {
    this.inputs = document.querySelectorAll(".swiper-slide input");
    console.log("inputs", this.inputs);

    this.inputs.forEach(input => {
      input.addEventListener("blur", this.onHandleBlur);
    });
  }
  componentWillUnmount() {
    this.inputs.forEach(input => {
      input.removeEventListener("blur", this.onHandleBlur);
      console.log("input listener removed");
    });
  }
  render() {
    return null;
  }
}
