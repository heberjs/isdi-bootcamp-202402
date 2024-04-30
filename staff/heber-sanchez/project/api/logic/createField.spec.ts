import dotenv from 'dotenv'
import { errors } from 'com'

import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { User, Field } from '../data/index.ts'

import chaiAsPromised from 'chai-as-promised'

dotenv.config()
use(chaiAsPromised)

const { Types: { ObjectId } } = mongoose




describe('Create a Field', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds a new field', () =>
        Promise.all([
            User.deleteMany({}),
            Field.deleteMany({})
        ])
            .then(() => User.create({ fullname: 'Lola Drones', email: 'lola@drones.com', password: '123qwe123', role: 'manager', status: '1' }))

            .then(manager => logic.createField(manager.id, 'Futbol 5', 'santa marta N°15'))

            .then(() => Field.findOne({}))

            .then(field => {
                expect(!!field).to.be.true
                expect(field.manager).to.be.instanceOf(ObjectId)
                expect(field.name).to.equal('Futbol 5')
                expect(field.address).to.equal('santa marta N°15')
            })
    )

    after(() => mongoose.disconnect())
})