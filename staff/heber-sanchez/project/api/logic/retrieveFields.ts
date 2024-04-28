import { Schema } from 'mongoose'

const { Types: { ObjectId } } = Schema

import { Field, FieldType, User } from '../data'

import { validate, errors } from 'com'
import { Address } from 'cluster'

const { NotFoundError, SystemError } = errors


function retrieveFields(managerId: string): Promise<[{ title: string, address: Address, location: [number, number] }] | { title: string, address: Address, location: [number, number] }[]> {
    validate.text(managerId, 'managerId', true)

    return User.findById(managerId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Field.find().select('-_id title address location').lean()
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default retrieveFields