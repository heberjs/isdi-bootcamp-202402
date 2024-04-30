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

describe('Retrieve Fields', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds when you create a new match properly', () =>
        Promise.all([
            User.deleteMany({}),
            Field.deleteMany({}),
            Match.deleteMany({})
        ])
            .then(() => User.create({ fullname: 'Lola Drones', email: 'lola@drones.com', password: '123qwe123', role: 'manager', status: '1' }))
            .then(user =>
                Promise.all([
                    Field.create({ manager: user.id, name: 'Futbol 5', address: 'santa marta N°15' }),
                    Field.create({ manager: user.id, name: 'Futbol 6', address: 'santa marta N°16' }),
                    Field.create({ manager: user.id, name: 'Futbol 7', address: 'santa marta N°17' })
                ])

                    .then(([field1, field2, field3]) => logic.retrieveFields(user.id)
                        .then(fields => {
                            expect(fields).to.have.lengthOf(3)
                            // expect(field1.name).to.equal('Futbol 5')
                            // expect(field1.address).to.equal('santa marta N°15')

                        })

                    )

            )

    )
    after(() => mongoose.disconnect())
})