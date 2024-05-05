import { validate, errors } from "com"
import { User, Field } from '../data/index.ts'
const { AuthError, NotFoundError, SystemError } = errors

function editField(userId: string, fieldId: string, name: string, address: string) {
    validate.text(userId, 'userId', true)
    validate.text(fieldId, 'fieldId', true)
    validate.text(name, 'name')
    validate.text(address, 'address')

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(manager => {

            if (!manager) throw new NotFoundError('manager not found')
            if (manager.role !== 'manager') throw new AuthError('manager not allowed')

            return Field.updateOne({ _id: fieldId, manager: userId }, {
                $set: {
                    name: name,
                    address: address
                }
            })
                .catch(error => { throw new SystemError(error.message) })

        })
        .then(() => { })

}

export default editField