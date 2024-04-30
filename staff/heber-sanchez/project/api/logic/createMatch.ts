
import { validate, errors } from 'com'
import { User, Field, Match, MatchType } from '../data/index.ts'
import mongoose from 'mongoose'

const { DuplicityError, NotFoundError, SystemError, AuthError } = errors

const { Types: { ObjectId } } = mongoose


function createMatch(managerId: string, fieldId: string, title: string, description: string, date: string): Promise<void> {
    validate.text(managerId, 'managerId', true)
    validate.text(fieldId, 'fieldId', true)
    validate.text(title)
    validate.text(description)

    return User.findById(managerId)
        .catch(error => { throw new SystemError(error.message) })
        .then(manager => {
            if (manager.role !== 'manager') throw new NotFoundError('manager not found')
            return Field.findById(fieldId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(field => {
            if (!field) throw new NotFoundError('field not found')

            if (field.manager.toString() !== managerId) throw new AuthError('field does not belong to manager')

            const matchDate = new Date(date)

            return Match.findOne({ date: matchDate }).lean()
                .catch(error => { throw new SystemError(error.message) })
                .then((match) => {
                    if (match) throw new DuplicityError('match already exists')

                    const newMatch = {
                        title: title,
                        description: description,
                        date: matchDate,
                        field: new ObjectId(fieldId),
                        manager: new ObjectId(managerId)
                    }

                    return Match.create(newMatch)
                        .catch(error => { throw new SystemError(error.message) })
                })
        })
        .then(() => { })

}

export default createMatch