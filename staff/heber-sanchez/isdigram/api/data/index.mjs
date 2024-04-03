//cambiar a manija cuando hagamos test compilation para typescript
import Collection from "./Collection.js";

const db = {
  users: new Collection("users"),
  posts: new Collection("posts"),
  chats: new Collection("chats"),
};

export default db;
