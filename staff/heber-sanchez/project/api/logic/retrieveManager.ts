import { Schema } from 'mongoose'

const { Types: { ObjectId } } = Schema

import { UserType, User } from '../data/index.ts'

import { validate, errors } from 'com'

const { AuthError, SystemError } = errors


function retrieveManager(userId: string): Promise<{ fullname: string }> {
    validate.text(userId, 'userId', true)

    return User.findById(userId).select('fullname role').lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (user.role !== 'manager') throw new AuthError('Permission denied')

            return { fullname: user.fullname }
        })
}

export default retrieveManager