
import { validate, errors } from 'com'
import { Field, FieldType, PointType, User, UserType } from '../data/index.ts'
import { ObjectId, Schema } from 'mongoose'
const { Types: { ObjectId } } = Schema
const { SystemError, DuplicityError, NotFoundError } = errors


function registerField(managerId: string, title: string, address: string, location: PointType): Promise<void> {
    validate.text(managerId, 'managerId', true)
    validate.text(title)
    validate.text(address)
    validate.coords(location)

    return Field.findOne({ $or: [{ title }, { location }] })
        .catch(error => { throw new SystemError(error.message) })
        .then((field: FieldType) => {
            if (field) throw new DuplicityError('field already exists')

            return User.findById(managerId)
                .catch(error => { throw new SystemError(error.message) })
                .then(manager => {
                    if (!manager) throw new NotFoundError('manager not found')

                    field = {
                        manager: manager.id,
                        title: title.trim(),
                        address: address.trim(),
                        location: location
                    }

                    return Field.create(field)
                        .catch(error => { throw new SystemError(error.message) })
                        .then(field => { })
                })
        })
}

export default registerField