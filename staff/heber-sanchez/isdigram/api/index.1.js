const { log } = require("console");
const fs = require("fs");

console.log("start");

try {
  const usersJson = fs.readFileSync("./users.json", "utf-8");

  console.log(usersJson);
} catch (error) {
  console.error(error);
}

console.log("continue...");

console.log("end---");
