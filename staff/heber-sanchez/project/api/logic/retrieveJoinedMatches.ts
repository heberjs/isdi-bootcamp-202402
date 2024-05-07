//@ts-nocheck
import { ObjectId, Schema } from 'mongoose'
const { Types: { ObjectId } } = Schema


import { Match, MatchType, User } from '../data/index.ts'
import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

// type JoinedMatchResponse = {
//     title: string,
//     description: string,
//     date: Date,
//     field: {
//         id: ObjectId,
//         name: string,
//         address: string
//     },
//     players: [{
//         id: ObjectId,
//         fullname: string
//     }],
//     manager: ObjectId
// }

function retrieveJoinedMatches(userId): Promise<any> {
    validate.text(userId, 'userId', true)

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Match.find({ players: userId }).sort({ date: 1 })
                .populate<{ field: { _id: ObjectId, name: string, address: string } }>('field', '_id name address')
                .populate<{ players: [{ id: ObjectId, fullname: string }] }>('players', '_id fullname')
                .lean()
                .catch(error => { throw new SystemError(error.message) })
                .then(matches =>
                    matches.map<MatchType>(({ _id, title, description, date, field, players, manager }) => ({
                        id: _id.toString(),
                        title,
                        description,
                        date,
                        field: {
                            id: field._id,
                            name: field.name,
                            address: field.address
                        },
                        players: players.map(player => ({

                            id: player._id.toString(),
                            fullname: player.fullname
                        })),
                        manager
                    }))
                )
        })
}

export default retrieveJoinedMatches
