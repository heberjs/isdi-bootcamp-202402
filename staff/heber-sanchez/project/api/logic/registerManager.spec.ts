import dotenv from 'dotenv'

import mongoose from 'mongoose'

import { User, UserRole, UserStatus } from '../data/index.ts'

import logic from './index.ts'

import { expect } from 'chai'

import { errors } from 'com'

dotenv.config()



describe('registerManager', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds a new manager', () =>
        User.deleteMany({})
            .then(() => logic.registerManager('Lobo Feroz', 'lobo@feroz.com', '123qwe123'))
            .then(() => User.findOne({ email: 'lobo@feroz.com' }))
            .then(user => {
                expect(!!user).to.be.true
                expect(user.fullname).to.equal('Lobo Feroz')
                expect(user.email).to.equal('lobo@feroz.com')
                expect(user.password).to.equal('123qwe123')
                expect(user.role).to.equal('manager')
                expect(user.status).to.equal(0)
            })

    )
    after(() => mongoose.disconnect())
})