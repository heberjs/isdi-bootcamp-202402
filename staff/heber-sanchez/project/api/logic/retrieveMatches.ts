import { ObjectId, Schema } from 'mongoose'
const { Types: { ObjectId } } = Schema


import { Match, User } from '../data/index.ts'
import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

function retrieveMatches(userId): Promise<any> {
    validate.text(userId, 'userId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Match.find()
                .populate<{ field: { _id: ObjectId, name: string, address: string } }>('field', '_id name address')
                .populate<{ players: [{ fullname: string }] }>('players', 'fullname')
                .lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(matches =>
                    matches.map<{ title: string, description: string, date: Date, field: { id: ObjectId, name: string, address: string }, players: [{ fullname: string }], manager: ObjectId }>(({ title, description, date, field, players, manager }) => ({
                        title,
                        description,
                        date,
                        field: {
                            id: field._id,
                            name: field.name,
                            address: field.address
                        },
                        players,
                        manager
                    }))
                )
        })
}

export default retrieveMatches
