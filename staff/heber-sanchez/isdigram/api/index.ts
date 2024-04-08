import express from "express";
import logic from "./logic/index.ts";

//index para trabajar con express,

//SERVIDOR QUE SE LEVANTA CON EXPRESS USANDO NODE JS
//el servidor q levanta servicio en un puerto lo hace node

const api = express();

const jsonBodyParser = express.json();

//se utiliza antes para solicitar los headers
api.use((_, res, next)=>{
  debugger
  res.setHeader('Access-control-Allow-Origin', '*')
  res.setHeader('Access-control-Allow-Methods', '*')
  res.setHeader('Access-control-Allow-Headers', '*')

  next()
})

//REGISTER USER CON EXPRESS
api.post("/users", jsonBodyParser, (req, res) => {
  try {
    const { name, birthdate, email, username, password } = req.body;

    logic.registerUser(name, birthdate, email, username, password, (error) => {
      if (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message });

        return;
      }
      res.status(201).send();
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});
/// LOGIN CON EXPRESS.JS
api.post("/users/auth", jsonBodyParser, (req, res) => {
  try {
    const { username, password } = req.body;

    logic.loginUser(username, password, (error, userId) => {
      if (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message });

        return;
      }

      res.json(userId)
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});
///método get - retrieve user CON EXPRESS
api.get("/users/:userId", (req, res) => {

  try {
    const {userId} = req.params

    logic.retrieveUser(userId, (error, user)=>{
      if (error) {
        res.status(400).json({error: error.constructor.name, message: error.message})
        return
      }

      res.json(user)
    })
  } catch (error) {
    res.status(400).json({error: error.constructor.name, message: error.message})
  }
});

//retrieve post con express

api.get('/posts', (req, res)=>{
  try {
    const { authorization: userId} = req.headers

    logic.retrievePosts(userId, (error, posts)=>{
      if (error) {
        res.status(400).json({error: error.constructor.name, message: error.message})

        return
      }

      res.json(posts)
    })
  } catch (error) {
    res.status(400).json({error: error.constructor.name, message: error.message})
  }

})


//logout user express
api.patch("/users/:userId", jsonBodyParser, (req, res) => {
  logic.logoutUser(req.params.userId, (error, user) => {
    if (error) {
      res
        .status(400)
        .json({ error: error.constructor.name, message: error.message });

      return;
    }
    if (!user) {
      res.status(404);
    } else {
      res.status(200).json(user.status);
    }
  });
});

api.listen(8080, ()=>console.log('API listening on port 8080'))
