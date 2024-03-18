import Button from "../../core/Button.mjs";
import Component from "../../core/Component.mjs";
import Input from "../../core/Input.mjs";
import Label from "../../core/Label.mjs";

class SendMessageForm extends Component {
  constructor() {
    super("form");
    this.addClass("form");

    const textLabel = new Label();
    textLabel.setFor("text");
    textLabel.setText("text");

    const textInput = new Input();
    textInput.setId("text");

    const sendButton = new Button();
    sendButton.setType("submit");
    sendButton.setText("Send");

    this.add(textLabel, textInput, sendButton);
  }
}
