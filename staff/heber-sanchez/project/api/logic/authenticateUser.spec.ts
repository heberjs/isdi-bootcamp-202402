import dotenv from 'dotenv'
import mongoose from 'mongoose'

import { User } from '../data/index.ts'

import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { CredentialsError, NotFoundError } = errors

describe('authenticateUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds on existing user and correct credentials', () =>
        User.deleteMany({})
            .then(() => User.create({ fullname: 'Pepe tio', email: 'pepe@tio.com', password: '123qwe123', role: 'player', status: 0 }))
            .then(user =>
                logic.authenticateUser('pepe@tio.com', '123qwe123')
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(user.id)
                    })
            )
    )

    after(() => mongoose.disconnect())
})