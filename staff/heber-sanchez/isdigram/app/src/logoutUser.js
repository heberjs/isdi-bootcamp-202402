import { validate, errors } from 'com'

const { NotfoundError } = errors

function logoutUser() {

    const user = db.users.findOne(user => user.id === sessionStorage.userId)

    if (!user) throw new NotfoundError("user not found")

    user.status = "offline"

    db.users.updateOne(user)

    delete sessionStorage.userId
}

export default logoutUser