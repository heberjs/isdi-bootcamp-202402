import dotenv from 'dotenv'
import mongoose from 'mongoose'
import logic from './index.ts'
import { expect, use } from 'chai'
import { User, Field, Match } from '../data/index.ts'


import chaiAsPromised from 'chai-as-promised'



dotenv.config()
use(chaiAsPromised)



describe('Edit Field', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds when you edit a field', () =>
        Promise.all([
            User.deleteMany({}),
            Field.deleteMany({}),
            Match.deleteMany({})
        ])
            .then(() => User.create({ fullname: 'Lola Drones', email: 'lola@drones.com', password: '123qwe123', role: 'manager', status: '1' })
                .then(manager =>
                    Field.create({ manager: manager.id, name: 'Futbol 5', address: 'santa marta N°15' })
                        .then(field => {
                            debugger
                            return logic.editField(manager.id, field.id, 'Campo Gava', 'riviera maya 5')

                                .then(() => Field.findById({ _id: field.id }))

                                .then(updatedField => {

                                    console.log('updated', updatedField)

                                    expect(updatedField.name).to.equal('Campo Gava')
                                })
                        })
                )
            )

    )

    after(() => mongoose.disconnect())
})