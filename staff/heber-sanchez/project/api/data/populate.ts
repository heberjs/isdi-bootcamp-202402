import mongoose from 'mongoose'
import { Field, Match, User } from '.'



mongoose.connect('mongodb://localhost:27017/project')
    .then(() => User.deleteMany())
    .then(() => Field.deleteMany())
    .then(() => Match.deleteMany())

    .then(() => User.create({ fullname: 'Pepe Roni', email: 'pepe@roni.com', password: '123qwe123', role: 'manager', status: 1 }))
    .then(user1 => Field.create({ manager: user1._id, name: 'Sport Gava', address: 'santa marta N°15' })
        .then(field => {
            Promise.all([
                User.create({ fullname: 'Lobo Feroz', email: 'lobo@feroz.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Andres Perez', email: 'andres@perez.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Pere Hernandez', email: 'pere@hernandez.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Juan Chota', email: 'juan@chota.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Xavi Gonzalez', email: 'xavi@gonzalez.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'David House', email: 'david@house.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Miquel Guevara', email: 'miquel@guevara.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Pau Julian', email: 'pau@julian.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Adrian Sosa', email: 'adrian@sosa.com', password: '123qwe123', role: 'player', status: 0 }),
                User.create({ fullname: 'Lola Mento', email: 'lola@mento.com', password: '123qwe123', role: 'player', status: 0 }),
            ])
                .then(([user3, user4, user5, user6, user7, user8, user9, user10, user11, user12]) => {
                    Match.create({ manager: user1._id, field: field._id, title: 'Futbol 5', description: '5 vs 5, arquero rotativo', date: '2024-06-05', players: [user3.id, user4.id, user5.id, user6.id, user7.id, user8.id, user9.id, user10.id, user11.id, user12.id] })
                })
        })
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