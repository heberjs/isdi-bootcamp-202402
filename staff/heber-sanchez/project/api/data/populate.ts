import mongoose from 'mongoose'
import { Field, Match, User } from '.'



mongoose.connect('mongodb://localhost:27017/test')
    .then(() => User.deleteMany())
    .then(() => Field.deleteMany())
    .then(() => Match.deleteMany())

    .then(() => User.create({ fullname: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123', role: 'manager', status: 1 }))
    .then(user => Field.create({ manager: user._id, name: 'Sport Gava', address: 'santa marta N°15' })
        .then(field => Match.create({ manager: user._id, field: field._id, title: 'Futbol 5', description: '5 vs 5, arquero rotativo', date: '2024-06-05' }))
    )
    .then(() => User.create({ fullname: 'Rona Castro', email: 'rona@castro.com', password: '123qwe123', role: 'manager', status: 1 }))
    .then(user => Field.create({ manager: user._id, name: 'Sport castelldefels', address: 'santa marta N°16' })
        .then(field => Match.create({ manager: user.id, field: field._id, title: 'Futbol 6', description: '6 vs 6, arquero rotativo', date: '2024-06-06' }))
    )
    .then(() => User.create({ fullname: 'Juan Alvarez', email: 'juan@alvarez.com', password: '123qwe123', role: 'manager', status: 1 }))
    .then(user1 => Field.create({ manager: user1._id, name: ' Sport Viladecans', address: 'santa marta N°17' })
        .then(field => Match.create({ manager: user1._id, field: field._id, title: 'Futbol 7', description: '7 vs 7, arquero rotativo', date: '2024-06-07' }))
    )
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)