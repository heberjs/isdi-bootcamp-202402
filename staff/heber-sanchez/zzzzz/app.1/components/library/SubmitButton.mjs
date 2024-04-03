import RoundButton from "./RoundButton.mjs";

class submitButton extends RoundButton {
  constructor() {
    super();

    this.addClass("submit-button");
    this.setType("submit");
  }
}

export default submitButton;
