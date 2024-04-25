import { validate, errors } from 'com'
import { Field, FieldType, PointType } from '../data/index.ts'

const { SystemError, DuplicityError } = errors


function registerField(title: string, manager: , address: string, location: PointType): Promise<FieldType> {
    validate.text(manager, 'manager', true)
    validate.text(title)
    validate.text(address)
    validate.location(location, 'location')

    return Field.findOne({ $or: [{ title }, { location }] })
        .catch(error => { throw new SystemError(error.message) })
        .then((field: FieldType) => {
            if (field) throw new DuplicityError('field already exists')

            field = {
                manager: manager,
                title: title.trim(),
                address: address.trim(),
                location: location
            }
        })


}