//@ts-nocheck
import { ObjectId, Schema } from 'mongoose'
const { Types: { ObjectId } } = Schema
import { Field, FieldType, User } from '../data/index.ts'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors


function retrieveFields(managerId: string): Promise<[{ _id: ObjectId, manager: ObjectId, name: string, address: string }] | [{ _id: ObjectId, manager: ObjectId, name: string, address: string }][]> {
    validate.text(managerId, 'managerId', true)

    return User.findById(managerId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Field.find({ manager: managerId }).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(fields =>
                    fields.map<FieldType>(({ _id, manager, name, address }) => ({
                        id: _id.toString(),
                        manager,
                        name,
                        address
                    }))
                )
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default retrieveFields