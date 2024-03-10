//presentation
(function () {
  if (!logic.isUserLoggedIn()) {
    location.href = "../login";
    return;
  }
  //create post
  var title = document.querySelector("h1");
  var createPostSection = document.querySelector("#create-post-section");
  var createPostForm = createPostSection.querySelector("form");

  var createPostCancelButton = createPostSection.querySelector(
    "#create-post-cancel-button"
  );

  //edit post section
  var editPostSection = document.querySelector("#edit-post-section");
  var editPostForm = editPostSection.querySelector("form");
  var cancelEditButton = document.querySelector("#editExit");

  //posts
  var postListSection = document.querySelector("#post-list-section");

  //nav
  var homeButton = document.querySelector("#home-button");
  var chatButton = document.querySelector("#chat-button");
  var logoutButton = document.querySelector("#logout-button");

  //chat
  var chatSection = document.querySelector("#chat-section");

  //chat-box
  var chatBox = document.querySelector("#chat-box");

  //footer
  var footer = document.querySelector("#footer");
  var createPostButton = document.querySelector("#create-post-button");

  //saludar al usuario al entrar
  try {
    var user = logic.retrieveUser();

    title.innerText = "Hello, " + user.name + "!";
  } catch (error) {
    console.error(error);
    alert(error.message);
  }

  logoutButton.onclick = function () {
    logic.logoutUser();

    location.href = "../login";
  };

  createPostForm.onsubmit = function (event) {
    event.preventDefault();

    var imageInput = createPostForm.querySelector("#image");
    var image = imageInput.value;

    var textInput = createPostForm.querySelector("#text");
    var text = textInput.value;

    try {
      logic.createPost(image, text);

      createPostForm.reset();

      createPostSection.style.display = "none";

      renderPosts();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  createPostButton.onclick = function () {
    createPostSection.style.display = "block";
  };

  createPostCancelButton.onclick = function () {
    createPostSection.style.display = "none";
  };

  cancelEditButton.onclick = function () {
    editPostSection.style.display = "none";
  };

  function renderPosts() {
    try {
      var posts = logic.retrievePosts();
      postListSection.innerHTML = "";

      posts.forEach(function (post, index) {
        var article = document.createElement("article");

        var authorHeading = document.createElement("h3");
        authorHeading.innerText = post.author.username;

        var image = document.createElement("img");
        image.src = post.image;

        var paragraph = document.createElement("p");
        paragraph.innerText = post.text;

        var dateTime = document.createElement("time");
        dateTime.innerText = post.date;

        article.append(authorHeading, image, paragraph, dateTime);

        if (post.author.id === logic.getLoggedUserId()) {
          var deleteButton = document.createElement("button");

          deleteButton.innerText = "🗑️";

          deleteButton.onclick = function () {
            if (confirm("delete post?"))
              try {
                logic.removePost(post.id);
                renderPosts();
              } catch (error) {
                console.error(error);
                alert(error.message);
              }
          };

          var editButton = document.createElement("button");
          editButton.innerText = "Edit";

          editButton.onclick = function () {
            editPostSection.style.display = "block";
          };

          //edit text post
          editPostForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var textInput = editPostForm.querySelector("#edit-text");
            var text = textInput.value;

            try {
              logic.editPost(post.id, text);

              editPostForm.reset();

              editPostSection.style.display = "none";

              renderPosts();
            } catch (error) {
              console.error(error);
              console.log(error.message);
            }
          });

          article.append(editButton, deleteButton);
        }

        postListSection.appendChild(article);
      });
    } catch (error) {
      alert(error.message);
    }
  }

  renderPosts();

  //CHAT SECTION
  chatButton.onclick = function () {
    postListSection.style.display = "none";
    footer.style.display = "none";
    chatButton.style.display = "none";

    homeButton.style.display = "block";
    chatSection.style.display = "block";

    var userList = chatSection.querySelector("#user-list");

    userList.innerHTML = "";

    try {
      var users = logic.retrieveUsers();

      users.forEach(function (user) {
        var item = document.createElement("li");
        if (user.status === "online") {
          item.classList.add("user-list__item--online");
        } else if (user.status === "offline") {
          item.classList.add("user-list__item--offline");
        }

        item.innerText = user.username;
        userList.appendChild(item);
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  //HOME SECTION
  homeButton.onclick = function () {
    homeButton.style.display = "none";
    chatSection.style.display = "none";

    postListSection.style.display = "";
    footer.style.display = "";
    chatButton.style.display = "";
  };
})();
