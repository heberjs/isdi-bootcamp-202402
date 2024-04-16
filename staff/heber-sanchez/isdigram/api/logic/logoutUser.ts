// import { validate, errors } from 'com'
// import { ObjectId } from 'mongodb'

// const { NotFoundError, SystemError } = errors

// function logoutUser(userId: string, callback: Function) {
//     validate.text(userId, 'userId', true)
//     validate.callback(callback)


//     this.users.findOne({ _id: new ObjectId(userId) })
//         .then(user => {
//             if (!user) {
//                 callback(new NotFoundError('user not found'))
//                 return
//             }
//             this.users.updateOne({ _id: userId }, { $set: { status: 'offline' } })
//                 .then(() => {
//                     callback(null, user)
//                 })
//                 .catch(error => callback(new SystemError(error.message)))
//         })
//         .catch(error => callback(new SystemError(error.message)))
// }



// export default logoutUser