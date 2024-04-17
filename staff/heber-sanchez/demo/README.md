```sh
mongo commnads

test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   72.00 KiB

test> show collections

test> db.users.insertOne({ name: 'Peter Pan', birthdate: '2000-01-01', email: 'peter@pan.com', username: 'peterpan', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('661509ee5e53c97f78a1f1de')
}

test> db.users.find()
[
  {
    _id: ObjectId('661509ee5e53c97f78a1f1de'),
    name: 'Peter Pan',
    birthdate: '2000-01-01',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
  }
]

test> db.users.insertOne({ name: 'Wendy Darling', birthdate: '2000-01-01', email: 'wendy@darling.com', username: 'wendydarling', password: '123qwe123' })
{
  acknowledged: true,
  insertedId: ObjectId('66150b525e53c97f78a1f1df')
}

test> db.users.find()
[
  {
    _id: ObjectId('661509ee5e53c97f78a1f1de'),
    name: 'Peter Pan',
    birthdate: '2000-01-01',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
  },
  {
    _id: ObjectId('66150b525e53c97f78a1f1df'),
    name: 'Wendy Darling',
    birthdate: '2000-01-01',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123qwe123'
  }
]

test> db.users.updateOne({ _id:  ObjectId('661509ee5e53c97f78a1f1de') }, { $set: { password: '123qwe123' } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

test> db.users.deleteOne({ _id:  ObjectId('661509ee5e53c97f78a1f1de') })
{ acknowledged: true, deletedCount: 1 }

test> db.users.find()
[
  {
    _id: ObjectId('66150b525e53c97f78a1f1df'),
    name: 'Wendy Darling',
    birthdate: '2000-01-01',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123qwe123'
  }
]

test> db.users.deleteMany({})
{ acknowledged: true, deletedCount: 1 }

test> db.users.deleteMany({})
{ acknowledged: true, deletedCount: 0 }

test> db.users.find()

test> db.users.find({ email: 'peter@pan.com' })
[
  {
    _id: ObjectId('66150c6b5e53c97f78a1f1e1'),
    name: 'Peter Pan',
    birthdate: '2000-01-01',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
  }
]

test> db.users.find({ email: { $regex: 'a' } })
[
  {
    _id: ObjectId('66150c635e53c97f78a1f1e0'),
    name: 'Wendy Darling',
    birthdate: '2000-01-01',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123qwe123'
  },
  {
    _id: ObjectId('66150c6b5e53c97f78a1f1e1'),
    name: 'Peter Pan',
    birthdate: '2000-01-01',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
  }
]

test> db.users.find({ email: { $regex: 'pan' } })
[
  {
    _id: ObjectId('66150c6b5e53c97f78a1f1e1'),
    name: 'Peter Pan',
    birthdate: '2000-01-01',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
  }
]

test> db.users.find()
[
  {
    _id: ObjectId('66150c635e53c97f78a1f1e0'),
    name: 'Wendy Darling',
    birthdate: '2000-01-01',
    email: 'wendy@darling.com',
    username: 'wendydarling',
    password: '123qwe123'
  },
  {
    _id: ObjectId('66150c6b5e53c97f78a1f1e1'),
    name: 'Peter Pan',
    birthdate: '2000-01-01',
    email: 'peter@pan.com',
    username: 'peterpan',
    password: '123123123'
  }
]

test> db.posts.insertOne({ owner: ObjectId('66150c6b5e53c97f78a1f1e1'), image: 'https://media.giphy.com/media/6rp7rTn3g3wEGP63V0/giphy.gif?cid=790b7611eaem0fdtnb9jatl3580dhx03g6jyqulb7oxtjp2n&ep=v1_gifs_trending&rid=giphy.gif&ct=g', text: 'me here, me here', date: new Date })
{
  acknowledged: true,
  insertedId: ObjectId('66150d3f5e53c97f78a1f1e2')
}

test> db.posts.find()
[
  {
    _id: ObjectId('66150d3f5e53c97f78a1f1e2'),
    owner: ObjectId('66150c6b5e53c97f78a1f1e1'),
    image: 'https://media.giphy.com/media/6rp7rTn3g3wEGP63V0/giphy.gif?cid=790b7611eaem0fdtnb9jatl3580dhx03g6jyqulb7oxtjp2n&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
    text: 'me here, me here',
    date: ISODate('2024-04-09T09:41:19.023Z')
  }
]

test> db.posts.find({ owner: ObjectId('66150c6b5e53c97f78a1f1e1') })
[
  {
    _id: ObjectId('66150d3f5e53c97f78a1f1e2'),
    owner: ObjectId('66150c6b5e53c97f78a1f1e1'),
    image: 'https://media.giphy.com/media/6rp7rTn3g3wEGP63V0/giphy.gif?cid=790b7611eaem0fdtnb9jatl3580dhx03g6jyqulb7oxtjp2n&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
    text: 'me here, me here',
    date: ISODate('2024-04-09T09:41:19.023Z')
  }
]

test> db.posts.drop()
true
test> db.posts.find()


test> show collections
users

test> db.posts.insertOne({ owner: ObjectId('66150c6b5e53c97f78a1f1e1'), image: 'https://media.giphy.com/media/6rp7rTn3g3wEGP63V0/giphy.gif?cid=790b7611eaem0fdtnb9jatl3580dhx03g6jyqulb7oxtjp2n&ep=v1_gifs_trending&rid=giphy.gif&ct=g', text: 'me here, me here', date: new Date })
{
  acknowledged: true,
  insertedId: ObjectId('66150dc35e53c97f78a1f1e3')
}

test> show collections
posts
users

test> db.dropDatabase()
{ ok: 1, dropped: 'test' }
test> show collections
```
