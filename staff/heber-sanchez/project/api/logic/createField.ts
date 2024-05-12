
import { validate, errors } from 'com'
import { Field, FieldType, User, UserType } from '../data/index.ts'
import mongoose from 'mongoose'
const { Types: { ObjectId } } = mongoose
const { SystemError, DuplicityError, NotFoundError } = errors


function createField(managerId: string, name: string, address: string): Promise<void> {
    validate.text(managerId, 'managerId', true)
    validate.text(name, 'name')
    validate.text(address, 'address')

    return Field.findOne({ $or: [{ name }] })
        .catch(error => { throw new SystemError(error.message) })
        .then((field: FieldType) => {
            if (field) throw new DuplicityError('field already exists')

            return User.findById(managerId)
                .catch(error => { throw new SystemError(error.message) })
                .then(manager => {
                    if (!manager) throw new NotFoundError('manager not found')


                    const newfield = {
                        manager: new ObjectId(managerId),
                        name: name,
                        address: address
                    }

                    return Field.create(newfield)
                        .catch(error => { throw new SystemError(error.message) })

                })
                .then(field => { })
        })

}

export default createField