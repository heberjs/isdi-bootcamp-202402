
import { validate, errors } from 'com'
import { Field, FieldType, User, UserType } from '../data/index.ts'
import { ObjectId, Schema } from 'mongoose'
const { Types: { ObjectId } } = Schema
const { SystemError, DuplicityError, NotFoundError } = errors


function createField(managerId: string, name: string, address: string): Promise<void> {
    validate.text(managerId, 'managerId', true)
    validate.text(name)
    validate.text(address)

    return Field.findOne({ $or: [{ name }] })
        .catch(error => { throw new SystemError(error.message) })
        .then((field: FieldType) => {
            if (field) throw new DuplicityError('field already exists')

            return User.findById(managerId)
                .catch(error => { throw new SystemError(error.message) })
                .then(manager => {
                    if (!manager) throw new NotFoundError('manager not found')


                    field = {
                        manager: manager.id,
                        name: name.trim(),
                        address: address.trim(),

                    }

                    return Field.create(field)
                        .catch(error => { throw new SystemError(error.message) })
                        .then(field => { })
                })
        })
}

export default createField