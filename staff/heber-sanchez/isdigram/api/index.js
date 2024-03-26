const fs = require("fs");

console.log("Start");

try {
  fs.readFile("./users.json", "utf-8", (error, usersJson) => {
    if (error) {
      console.error(error);

      return;
    }

    const users = JSON.parse(usersJson);

    const user = {
      name: "As pirina",
      birthdate: "2004-01-01",
      email: "as@pirina.com",
      username: "aspirina",
      password: "123qwe123",
      status: "offline",
      id: "3gfscipd0c",
    };

    users.push(user);

    const usersJson2 = JSON.stringify(users);

    fs.writeFile("./users.json", usersJson2, (error) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("end");
    });
  });
} catch (error) {
  console.error(error);
}

console.log("continue ...");
