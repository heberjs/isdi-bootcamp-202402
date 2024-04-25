import { Schema } from 'mongoose'

const { Types: { ObjectId } } = Schema

import { UserType, User } from '../data/index.ts'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors


function retrieveUser(userId: string, targetUserId: string): Promise<{ fullname: string }> {
    validate.text(userId, 'userId', true)
    validate.text(targetUserId, 'targetUserId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return User.findById(targetUserId).select('-_id fullname').lean()
        })
        .then(user => {
            if (!user) throw new NotFoundError('target user not found')

            return { fullname: user.fullname }
        })
}

export default retrieveUser