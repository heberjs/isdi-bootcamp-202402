import utils from "../../utils.mjs";
import logic from "../../logic.mjs";
import Form from "../../core/Form.mjs";
import Component from "../../core/Component.mjs";
import Label from "../../core/Label.mjs";
import Input from "../../core/Input.mjs";
import Button from "../../core/Button.mjs";

class EditPost extends Component {
  constructor(post) {
    super("section");

    this.addClass("edit-post");

    const title = new Component("h2");
    title.setText("Edit Post");

    const form = new Form();

    const textLabel = new Label();
    textLabel.setFor("text");
    textLabel.setText("text");

    const textInput = new Input();
    textInput.setId("edit-text");
    textInput.setType("text");
    textInput.setValue(post.text);

    const editButton = new Button();
    editButton.setType("submit");
    editButton.setText("Edit");

    form.add(title, textLabel, textInput, editButton);

    const cancelButton = new Button();
    cancelButton.setText("Cancel");

    this._cancelButton = cancelButton;

    this.add(form, cancelButton);

    form.onSubmit((event) => {
      event.preventDefault();
      confirm("Are yo sure to edit?");

      const text = textInput.getValue();

      try {
        logic.modifyPost(post.id, text);
      } catch (error) {
        utils.showFeedback(error);
      }
    });
  }

  onCancelEditClick(callback) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");

    this._cancelButton.onClick(callback);
  }

  onPostEdited(callback) {
    if (typeof callback !== "function")
      throw new TypeError("callback is not a function");

    this._onEditPostCallback = callback;
  }
}

export default EditPost;
