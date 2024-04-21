import mongoose, { ObjectId } from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

type UserType = {
    fullname: string,
    email: string,
    password: string
}

const user = new Schema({
    fullname: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

type AdminType = {
    name: string,
    email: string,
    location: string,
    password: string
}

const admin = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    location: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true

    }
})

type MatchType = {
    title: string,
    description: string,
    location: string,
    date: Date,
    players: string[]
}

const match = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        require: true,
        unique: true
    },
    players: [{
        type: ObjectId,
        ref: 'User'
    }]

})



const User = model<UserType>('User', user)
const Admin = model<AdminType>('Admin', admin)
const Match = model<MatchType>('Match', match)

export {
    UserType,
    user,
    AdminType,
    admin,
    MatchType,
    match
}

