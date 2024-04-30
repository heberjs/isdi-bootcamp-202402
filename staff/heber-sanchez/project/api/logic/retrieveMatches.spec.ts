//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Field, Match } from '../data/index.ts'
import logic from './index.ts'
import { expect, use } from 'chai'
import { errors } from 'com'


import chaiAsPromised from 'chai-as-promised'

dotenv.config()

use(chaiAsPromised)

const { Types: { ObjectId } } = mongoose
const { NotFoundError, SystemError } = errors

describe('Retrieve Matches', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds when you retrieve matches', () =>
        Promise.all([
            User.deleteMany({}),
            Field.deleteMany({}),
            Match.deleteMany({})
        ])
            .then(() =>
                Promise.all([
                    User.create({ fullname: 'Lola Drones', email: 'lola@drones.com', password: '123qwe123', role: 'manager', status: '1' }),
                    User.create({ fullname: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123', role: 'manager', status: '1' }),
                    User.create({ fullname: 'Else Rojo', email: 'else@rojo.com', password: '123qwe123', role: 'manager', status: '1' }),

                ])

                    .then(([user1, user2, user3]) =>
                        Promise.all([
                            Field.create({ manager: user1.id, name: 'Futbol 5', address: 'santa marta N°15' }),
                            Field.create({ manager: user2.id, name: 'Futbol 6', address: 'santa marta N°16' }),
                            Field.create({ manager: user3.id, name: 'Futbol 7', address: 'santa marta N°17' })
                        ])
                            .then(([field1, field2, field3]) =>
                                Promise.all([
                                    Match.create({ field: field1._id, title: 'Sport gava', description: '5 vs 5, arquero rotativo', date: '2024-06-07T19:00:00', manager: user1.id }),
                                    Match.create({ field: field2._id, title: 'Sport castelldefels', description: '6 vs 6, arquero rotativo', date: '2024-06-08T20:00:00', manager: user2.id }),
                                    Match.create({ field: field3._id, title: 'Sport Viladecans', description: '7 vs 7, arquero rotativo', date: '2024-06-09T21:00:00', players: [user3.id, user2.id], manager: user1.id })
                                ])
                            )
                            .then(([match1, match2, match3]) =>
                                User.create({ fullname: 'juador player', email: 'juegador@player.com', password: '123qwe123', role: 'player', status: '0' })
                                    .then(user => logic.retrieveMatches(user.id))
                                    .then(matches => {

                                        expect(matches).to.be.lengthOf(3)
                                        expect(match1.title).to.equal('Sport gava')
                                        expect(match1.description).to.equal('5 vs 5, arquero rotativo')
                                        expect(match1.date).to.instanceOf(Date)

                                        expect(match2.title).to.equal('Sport castelldefels')
                                        expect(match2.description).to.equal('6 vs 6, arquero rotativo')
                                        expect(match2.date).to.instanceOf(Date)

                                        expect(match3.title).to.equal('Sport Viladecans')
                                        expect(match3.description).to.equal('7 vs 7, arquero rotativo')
                                        expect(match3.date).to.instanceOf(Date)
                                    })
                            )

                    )

            )
    )
    after(() => mongoose.disconnect())
})