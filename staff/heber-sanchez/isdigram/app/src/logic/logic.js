import loginUser from "./loginUser"
import registerUser from "./registerUser"
import retrieveUser from "./retrieveUser"
import logoutUser from "./logoutUser"

import cleanUpLoggedInUserId from "./cleanUpLoggedInUserId"
import getLoggedInUserId from "./getLoggedInUserId"
import isUserLoggedIn from "./isUserLoggedInUserId"

import modifyPost from "./modifyPost"
import createPost from './createPost'
import retrievePosts from './retrievePosts'
import removePost from './removePost'











// function retrieveUsersWithStatus() {
//   const users = db.users.getAll()

//   const index = users.findIndex((user) => user.id === sessionStorage.userId)

//   users.splice(index, 1)

//   users.forEach(function (user) {
//     delete user.name
//     delete user.email
//     delete user.password
//     delete user.birthdate
//   })

//   users
//     .sort((a, b) => (a.username < b.username ? -1 : 1))
//     .sort((a, b) => (a.status > b.status ? -1 : 1))

//   return users
// }

// function sendMessageToUser(userId, text) {
//   validate.text(userId, "userId", true)
//   validate.text(text, "text")

//   // { id, users: [id, id], messages: [{ from: id, text, date }, { from: id, text, date }, ...] }

//   // find chat in chats (by user ids)
//   // if no chat yet, then create it
//   // add message in chat
//   // update or insert chat in chats
//   // save chats

//   let chat = db.chats.findOne(
//     (chat) =>
//       chat.users.includes(userId) && chat.users.includes(sessionStorage.userId)
//   )

//   if (!chat) chat = { users: [userId, sessionStorage.userId], messages: [] }

//   const message = {
//     from: sessionStorage.userId,
//     text: text,
//     date: new Date().toISOString(),
//   }

//   chat.messages.push(message)

//   if (!chat.id) db.chats.insertOne(chat)
//   else db.chats.updateOne(chat)
// }

// function retrieveMessagesWithUser(userId) {
//   validate.text(userId, "userId", true)

//   const chat = db.chats.findOne(function (chat) {
//     return (
//       chat.users.includes(userId) && chat.users.includes(sessionStorage.userId)
//     )
//   })

//   if (chat) return chat.messages

//   return []
// }


const logic = {
  registerUser,
  loginUser,
  retrieveUser,
  logoutUser,
  getLoggedInUserId,
  isUserLoggedIn,
  cleanUpLoggedInUserId,

  // retrieveUsersWithStatus,
  // sendMessageToUser,
  // retrieveMessagesWithUser,

  createPost,
  retrievePosts,
  removePost,
  modifyPost,
}

export default logic
