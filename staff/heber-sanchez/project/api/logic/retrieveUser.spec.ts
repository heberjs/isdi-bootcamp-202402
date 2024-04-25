import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

describe('retrieveUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves existing user', () =>
        User.deleteMany({})
            .then(() => User.create({ fullname: 'Pepe tio', email: 'pepe@tio.com', password: '123qwe123', role: 'player', status: 0 }))
            .then(user =>
                User.create({ fullname: 'Papa nicolao', email: 'papa@nicolao.com', password: '123qwe123', role: 'player', status: 0 })
                    .then(user2 => logic.retrieveUser(user.id, user2.id))
                    .then(user => {
                        expect(user.fullname).to.equal('Papa nicolao')
                    })
            )

    )

    after(() => mongoose.disconnect())
})