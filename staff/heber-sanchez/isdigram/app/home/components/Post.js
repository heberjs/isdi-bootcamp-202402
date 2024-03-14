function Post(post) {
  Component.call(this, "article");

  var author = new Component("h3");
  author.setText(post.author.username);

  var picture = new Image();
  picture.setSource(post.image);

  var paragrapah = new Component("p");
  paragrapah.setText(post.text);

  var dateTime = new Component("time");
  dateTime.setText(post.date);

  this.add(author, picture, paragrapah, dateTime);

  if (post.author.id === logic.getLoggedInUserId()) {
    var deleteButton = new Component("button");
    deleteButton.setText("🗑️");

    deleteButton.onClick(function () {
      if (confirm("delete post?"))
        try {
          logic.removePost(post.id);

          //TODO renderPOSTs()?
        } catch (error) {
          showFeedback(error);
        }
    });

    var editButton = new Component("button");
    editButton.setText("📝");

    editButton.onClick(function () {
      //TODO open edit panel
    });

    this.add(editButton, deleteButton);
  }
}
Post.prototype = Object.create(Component.prototype);
Post.prototype.constructor = Post;
