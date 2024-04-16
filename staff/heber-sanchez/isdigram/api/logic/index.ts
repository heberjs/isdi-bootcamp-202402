//@ts-nocheck

import registerUser from './registerUser.ts'
import retrieveUser from './retrievetUser.ts'
import authenticateUser from './authenticateUser.ts'

// import logoutUser from './logoutUser.ts'

import createPost from './createPost.ts'
import retrievePosts from './retrievePosts.ts'
// import removePost from './removePost.ts'
// import modifyPost from './modifyPost.ts'






// TODO next ...




// function retrieveUsersWithStatus() {
//   const users = this.users.getAll()

//   const index = users.findIndex(user => user.id === sessionStorage.userId)

//   users.splice(index, 1)

//   users.forEach(function (user) {
//       delete user.name
//       delete user.email
//       delete user.password
//       delete user.birthdate
//   })

//   users.sort(function (a, b) {
//       return a.username < b.username ? -1 : 1
//   }).sort(function (a, b) {
//       return a.status > b.status ? -1 : 1
//   })

//   return users
// }

// function sendMessageToUser(userId, text) {
//   validateText(userId, 'userId', true)
//   validateText(text, 'text')

// { id, users: [id, id], messages: [{ from: id, text, date }, { from: id, text, date }, ...] }

// find chat in chats (by user ids)
// if no chat yet, then create it
// add message in chat
// update or insert chat in chats
// save chats

//   let chat = this.chats.findOne(chat => chat.users.includes(userId) && chat.users.includes(sessionStorage.userId))

//   if (!chat)
//       chat = { users: [userId, sessionStorage.userId], messages: [] }

//   const message = { from: sessionStorage.userId, text: text, date: new Date().toISOString() }

//   chat.messages.push(message)

//   if (!chat.id)
//       this.chats.insertOne(chat)
//   else
//       this.chats.updateOne(chat)
// }

// function retrieveMessagesWithUser(userId) {
//   validateText(userId, 'userId', true)

//   const chat = this.chats.findOne(chat => chat.users.includes(userId) && chat.users.includes(sessionStorage.userId))

//   if (chat)
//       return chat.messages

//   return []
// }



const logic = {

  users: null,
  posts: null,

  registerUser,
  authenticateUser,
  retrieveUser,
  // logoutUser,

  // retrieveUsersWithStatus,
  // sendMessageToUser,
  // retrieveMessagesWithUser,

  createPost,
  retrievePosts,
  // removePost,
  // modifyPost,
};

export default logic
