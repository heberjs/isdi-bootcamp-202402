import dotenv from 'dotenv'
import { errors } from 'com'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { User, Field, Match } from '../data/index.ts'



import chaiAsPromised from 'chai-as-promised'

dotenv.config()
use(chaiAsPromised)

const { Types: { ObjectId } } = mongoose

describe('Create Match', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds when you create a new match properly', () =>
        Promise.all([
            User.deleteMany({}),
            Field.deleteMany({}),
            Match.deleteMany({})
        ])
            .then(() => User.create({ fullname: 'Lola Drones', email: 'lola@drones.com', password: '123qwe123', role: 'manager', status: '1' })
                .then(user =>
                    Field.create({ manager: user.id, name: 'Futbol 5', address: 'santa marta N°15' })
                        .then(field =>
                            logic.createMatch(user.id, field.id, 'Futbol 5', '5 vs 5, outdoor', '2024-06-07T19:00:00')
                        )
                )
                .then(() => Match.findOne({ title: 'Futbol 5' }))
                .then(match => {
                    expect(match.title).to.equal('Futbol 5')
                    expect(match.description).to.equal('5 vs 5, outdoor')

                })

            )

    )

    after(() => mongoose.disconnect())
})