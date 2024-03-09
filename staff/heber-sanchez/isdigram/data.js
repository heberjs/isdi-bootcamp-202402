//data layer
var data = (function () {
  //helper
  function generateId() {
    return (+parseInt(Math.random() * 10 ** 17).toString()).toString(36);
  }

  function loadUsers() {
    return JSON.parse(localStorage.users || "[]");
  }

  function loadPosts() {
    return JSON.parse(localStorage.posts || "[]");
  }

  function saveUsers(users) {
    localStorage.users = JSON.stringify(users);
  }

  function savePosts(posts) {
    localStorage.posts = JSON.stringify(posts);
  }

  //data
  function findUser(callback) {
    var users = loadUsers();

    var user = users.find(callback);

    return user;
  }

  function insertUser(user) {
    var users = loadUsers();

    user.id = generateId();

    users.push(user);

    saveUsers(users);
  }

  function printUsers() {
    var users = loadUsers();
    console.table(users);
  }

  function updateUser(user) {
    var users = loadUsers();
    var index = users.findIndex(function (userDb) {
      return userDb.id === user.id;
    });
    if (index > -1) {
      users.splice(index, 1, user);
      saveUsers(users);
    }
  }

  function getAllUsers() {
    var users = loadUsers();
    return users;
  }

  function insertPost(post) {
    var posts = loadPosts();

    post.id = generateId();

    posts.push(post);

    savePosts(posts);
  }

  function getAllPosts() {
    var posts = loadPosts();
    return posts;
  }

  function findPost(callback) {
    var posts = loadPosts();

    var post = posts.find(callback);

    return post;
  }

  function updatePost(post) {
    var posts = loadPosts();
    var index = posts.findIndex(function (postDb) {
      return postDb.id === post.id;
    });
    if (index > -1) {
      posts.splice(index, 1, post);
      savePosts(posts);
    }
  }

  function deletePost(callback) {
    var posts = loadPosts();

    var index = posts.findIndex(callback);

    posts.splice(index, 1);

    savePosts(posts);
  }

  return {
    findUser: findUser,
    insertUser: insertUser,
    printUsers: printUsers,
    updateUser: updateUser,
    getAllUsers: getAllUsers,
    insertPost: insertPost,
    getAllPosts: getAllPosts,
    findPost: findPost,
    updatePost: updatePost,
    deletePost: deletePost,
  };
})();
