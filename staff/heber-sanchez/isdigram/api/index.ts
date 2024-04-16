import mongoose from 'mongoose'
import express from 'express'
import logic from './logic/index.ts'
import { errors } from 'com'
import tracer from 'tracer'
import colors from 'colors'

const logger = tracer.colorConsole({
  filters: {
    debug: colors.green,
    info: colors.blue,
    warn: colors.yellow,
    error: colors.red
  }
})



const { ContentError, SystemError, DuplicityError, NotFoundError, CredentialsError } = errors

//index para trabajar con express,
//estás creando un servidor web que proporciona una API para registrar nuevos usuarios en una base de datos MongoDB utilizando Express y Node.js.

//SERVIDOR QUE SE LEVANTA CON EXPRESS USANDO NODE JS
//el servidor q levanta servicio en un puerto lo hace node
//cuando haga cambios hay q matar el server y volver a levantar

mongoose.connect('mongodb://localhost:27017/isdigram')
  .then(() => {
    const db = mongoose.connection.db

    const users = db.collection('users')
    const posts = db.collection('posts')

    logic.users = users
    logic.posts = posts

    const api = express()

    const jsonBodyParser = express.json()

    //se utiliza para solicitar los headers
    api.use((req, res, next) => {
      res.setHeader('Access-control-Allow-Origin', '*')
      res.setHeader('Access-control-Allow-Methods', '*')
      res.setHeader('Access-control-Allow-Headers', '*')

      next()
    })



    //REGISTER USER CON EXPRESS// endpoint combinacion de ruta y metodo get post patch
    api.post('/users', jsonBodyParser, (req, res) => {
      try {
        const { name, birthdate, email, username, password } = req.body

        logic.registerUser(name, birthdate, email, username, password)
          .then(() => res.status(201).send())

          .catch(error => {
            if (error instanceof SystemError) {
              logger.error(error.message)

              res.status(500).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof DuplicityError) {
              logger.warn(error.message)

              res.status(409).json({ error: error.constructor.name, message: error.message })
            }
          })
      } catch (error) {
        if (error instanceof TypeError || error instanceof ContentError) {
          logger.warn(error.message)

          res.status(406).json({ error: error.constructor.name, message: error.message })
        } else {
          logger.warn(error.message)

          res.status(500).json({ error: error.constructor.name, message: error.message })
        }
      }
    })

    /// LOGIN CON EXPRESS.JS
    api.post('/users/auth', jsonBodyParser, (req, res) => {
      try {
        const { username, password } = req.body

        logic.authenticateUser(username, password)
          .then(userId => res.json(userId))
          .catch(error => {
            if (error instanceof SystemError) {
              logger.error(error.message)


              res.status(500).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof CredentialsError) {
              logger.warn(error.message)

              res.status(401).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof NotFoundError) {
              logger.warn(error.message)

              res.status(404).json({ error: error.constructor.name, message: error.message })
            }
          })
      } catch (error) {
        if (error instanceof TypeError || error instanceof ContentError) {
          logger.warn(error.message)

          res.status(406).json({ error: error.constructor.name, message: error.message })
        } else {
          logger.warn(error.message)

          res.status(500).json({ error: error.constructor.name, message: error.message })
        }
      }

    })

    ///método get - retrieve user CON EXPRESS
    api.get('/users/:targetUserId', (req, res) => {
      try {
        const { authorization: userId } = req.headers

        const { targetUserId } = req.params

        logic.retrieveUser(userId, targetUserId)
          .then(user => res.json(user))
          .catch(error => {
            if (error instanceof SystemError) {
              logger.error(error.message)

              res.status(500).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof NotFoundError) {
              logger.warn(error.message)

              res.status(404).json({ error: error.constructor.name, message: error.message })
            }
          })
      } catch (error) {
        if (error instanceof TypeError || error instanceof ContentError) {
          logger.warn(error.message)

          res.status(406).json({ error: error.constructor.name, message: error.message })
        } else {
          logger.warn(error.message)

          res.status(500).json({ error: error.constructor.name, message: error.message })
        }
      }
    })

    //retrieve post con express

    api.get('/posts', (req, res) => {
      try {
        const { authorization: userId } = req.headers

        logic.retrievePosts(userId, (error, posts) => {
          if (error) {
            res
              .status(400)
              .json({ error: error.constructor.name, message: error.message })

            return
          }

          res.json(posts)
        })
      } catch (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message })
      }
    })

    //Create post con express

    api.post('/posts', jsonBodyParser, (req, res) => {
      try {
        const { authorization: userId } = req.headers

        const { image, text } = req.body

        logic.createPost(userId, image, text, (error) => {
          if (error) {
            res
              .status(400)
              .json({ error: error.constructor.name, message: error.message })

            return
          }

          res.status(201).send()
        })
      } catch (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message })
      }
    })

    //logout user express
    // api.patch('/users/:userId', jsonBodyParser, (req, res) => {
    //   logic.logoutUser(req.params.userId, (error, user) => {
    //     if (error) {
    //       res
    //         .status(400)
    //         .json({ error: error.constructor.name, message: error.message })

    //       return
    //     }
    //     if (!user) {
    //       res.status(404)
    //     } else {
    //       res.status(200).json(user.status)
    //     }
    //   })
    // })

    api.listen(8080, () => console.log('API listening on port 8080'))

  })
  .catch(error => console.error(error))


