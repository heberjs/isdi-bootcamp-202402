import utils from "../../utils.mjs";

import logic from "../../logic.mjs";

import Image from "../../core/Image.mjs";
import Component from "../../core/Component.mjs";
import EditPost from "./EditPost.mjs";

class Post extends Component {
  constructor(post) {
    super("article");

    const author = new Component("h3");
    author.setText(post.author.username);

    const picture = new Image();
    picture.setSource(post.image);

    const paragrapah = new Component("p");
    paragrapah.setText(post.text);

    const dateTime = new Component("time");
    dateTime.setText(post.date);

    this.add(author, picture, paragrapah, dateTime);

    if (post.author.id === logic.getLoggedInUserId()) {
      const deleteButton = new Component("button");
      deleteButton.setText("🗑️");

      deleteButton.onClick(() => {
        if (confirm("delete post?"))
          try {
            logic.removePost(post.id);
          } catch (error) {
            utils.showFeedback(error);
          }
      });

      const editButton = new Component("button");
      editButton.setText("📝");

      editButton.onClick(() => {
        const editPost = new EditPost(post);

        this.add(editPost);
      });

      this.add(editButton, deleteButton);
    }
  }
}

export default Post;
