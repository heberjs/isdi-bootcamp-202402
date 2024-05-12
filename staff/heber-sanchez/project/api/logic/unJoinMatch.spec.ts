//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Field, Match } from '../data/index.ts'
import logic from './index.ts'
import { expect, use } from 'chai'




import chaiAsPromised from 'chai-as-promised'


dotenv.config()
use(chaiAsPromised)
describe('Unjoin a Match', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds when you Unjoin a match', () =>
        Promise.all([
            User.deleteMany({}),
            Field.deleteMany({}),
            Match.deleteMany({})
        ])
            .then(() => User.create({ fullname: 'Lola Drones', email: 'lola@drones.com', password: '123qwe123', role: 'manager', status: '1' })
                .then(manager =>
                    Field.create({ manager: manager.id, name: 'Futbol 5', address: 'santa marta N°15' })
                        .then(field =>
                            Promise.all([
                                User.create({ fullname: 'Lobo Feroz', email: 'lobo@feroz.com', password: '123qwe123', role: 'player', status: 0 }),
                                User.create({ fullname: 'Andres Perez', email: 'andres@perez.com', password: '123qwe123', role: 'player', status: 0 }),

                            ])
                                .then(([user1, user2]) =>

                                    Match.create({ manager: manager.id, field: field.id, title: 'Futbol 5', description: '5 vs 5, outdoor', date: '2024-06-07T19:00:00', players: [user1._id, user2._id] })
                                        .then(match => {
                                            return logic.unJoinMatch(user2.id, match.id)
                                                .then(() => Match.findOne({ title: 'Futbol 5' }))
                                                .then(updatedMatch => {
                                                    expect(!!updatedMatch).to.be.true


                                                })
                                        })
                                )
                        )
                )
            )
    )

    after(() => mongoose.disconnect())
})