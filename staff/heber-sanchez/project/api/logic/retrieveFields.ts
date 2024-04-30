
import { Field, FieldType, User } from '../data/index.ts'

import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors


function retrieveFields(managerId: string): Promise<[{ name: string, address: string }] | { name: string, address: string }[]> {
    validate.text(managerId, 'managerId', true)

    return User.findById(managerId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Field.find().lean().exec()
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default retrieveFields