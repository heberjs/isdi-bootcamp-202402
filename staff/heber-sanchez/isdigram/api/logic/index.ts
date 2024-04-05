import db from "../data/index.ts";

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/;
const URL_REGEX = /^(http|https):\/\//;

// helpers

function validateText(text, explain, checkEmptySpaceInside?) {
  if (typeof text !== "string")
    throw new TypeError(`${explain} ${text} is not a string`);
  if (!text.trim().length)
    throw new Error(`${explain} >${text}< is empty or blank`);

  if (checkEmptySpaceInside)
    if (text.includes(" "))
      throw new Error(`${explain} ${text} has empty spaces`);
}

function validateDate(date, explain) {
  if (typeof date !== "string")
    throw new TypeError(`${explain} ${date} is not a string`);
  if (!DATE_REGEX.test(date))
    throw new Error(`${explain} ${date} does not have a valid format`);
}

function validateEmail(email, explain) {
  if (!EMAIL_REGEX.test(email))
    throw new Error(`${explain} ${email} is not a email`);
}

function validatePassword(password, explain?) {
  if (!PASSWORD_REGEX.test(password))
    throw new Error(explain + " " + password + " is not acceptable");
}

function validateUrl(url, explain) {
  if (!URL_REGEX.test(url)) throw new Error(`${explain} ${url} is not an url`);
}

function validateCallback(callback, explain = "callback") {
  if (typeof callback !== "function")
    throw new TypeError(`${explain} is not a function`);
}

// logic

function registerUser(name, birthdate, email, username, password, callback) {
  validateText(name, "name");
  validateDate(birthdate, "birthdate");
  validateEmail(email, "email");
  validateText(username, "username", true);
  validatePassword(password, "password");
  validateCallback(callback);

  db.users.findOne(
    (user) => user.email === email || user.username === username,
    (error, user) => {
      if (error) {
        callback(error);

        return;
      }

      if (user) {
        callback(new Error("user already exists"));

        return;
      }

      user = {
        name: name.trim(),
        birthdate: birthdate,
        email: email,
        username: username,
        password: password,
        status: "offline",
      };
      db.users.insertOne(user, (error) => {
        if (error) {
          callback(error);

          return;
        }

        callback(null);
      });
    }
  );
}

function loginUser(username, password, callback) {
  validateText(username, "username", true);
  validatePassword(password);
  validateCallback(callback);

  db.users.findOne(
    (user) => user.username === username,
    (error, user) => {
      if (error) {
        callback(error);

        return;
      }
      if (!user) {
        callback(new Error("user not found"));

        return;
      }
      if (user.password !== password) {
        callback(new Error("wrong password"));

        return;
      }
      user.status = "online";

      db.users.updateOne(
        (user2) => user2.id === user.id,
        user,
        (error) => {
          if (error) {
            callback(error);

            return;
          }

          callback(null, user.id);
        }
      );
    }
  );
}

function retrieveUser(userId, callback) {
  validateText(userId, "userId", true);
  validateCallback(callback);

  db.users.findOne(
    (user) => user.id === userId,
    (error, user) => {
      if (error) {
        callback(error);

        return;
      }

      if (!user) {
        callback(new Error("user not found"));
        return;
      }

      delete user.id;
      delete user.password;
      delete user.status;

      callback(null, user);
    }
  );
}
function logoutUser(userId, callback) {
  db.users.findOne(
    (user) => user.id === userId,
    (error, user) => {
      if (error) {
        callback(error);
        return;
      }

      if (!user) {
        callback(new Error("user not found"));

        return;
      }

      user.status = "offline";

      db.users.updateOne(
        (user2) => user2.id === userId,
        user,
        (error) => {
          if (error) {
            callback(error);
            return;
          }

          callback(null, user);
        }
      );
    }
  );
}

const logic = {
  registerUser,
  loginUser,
  retrieveUser,
  logoutUser,
};

export default logic;
