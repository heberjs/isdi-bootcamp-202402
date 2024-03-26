const fs = require("fs");

console.log("start");

try {
  fs.readFile("./users.json", "utf-8", (error, usersJson) => {
    if (error) {
      console.error(error);

      return;
    }

    console.log(usersJson);

    console.log("end.. Async");
  });
} catch (error) {
  console.error(error);
}

console.log("continue..");
