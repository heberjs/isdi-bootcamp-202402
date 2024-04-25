import mongoose, { ObjectId } from 'mongoose'

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

enum UserRole {
    Player = "player",
    Manager = "manager",
    Root = "root"
}

enum UserStatus {
    Default = 0,
    Approved = 1
}

type UserType = {
    fullname: string,
    email: string,
    password: string,
    avatar?: string,
    role: UserRole,
    status: UserStatus
}

const user = new Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        required: true,
        enum: [UserRole.Player, UserRole.Manager, UserRole.Root]
    },
    status: {
        type: Number,
        required: true,
        enum: [UserStatus.Default, UserStatus.Approved]
    }
})


type PointType = {
    type: string,
    coordinates: [number, number]
}

const point = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

type FieldType = {
    manager: ObjectId,
    title: string,
    addres: string,
    location: PointType
}

const field = new Schema({

    title: {
        type: String,
        required: true
    },

    manager: {
        type: ObjectId,
        ref: 'User',
        required: true

    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: point,
        required: true
    }
})


type MatchType = {
    title: string,
    description?: string,
    location: string,
    date: Date,
    players: ObjectId[]
    field: ObjectId
}

const match = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        unique: true
    },
    players: [{
        type: ObjectId,
        ref: 'User'
    }],
    field: {
        type: ObjectId,
        ref: 'Field',
        required: true
    }

})

const User = model<UserType>('User', user)
const Field = model<FieldType>('Field', field)
const Point = model<PointType>('Point', point)
const Match = model<MatchType>('Match', match)


export {
    UserType,
    User,
    MatchType,
    Match,
    PointType,
    Point,
    FieldType,
    Field,
    UserRole,
    UserStatus,
}

