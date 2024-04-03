import express from "express";
import logic from "./logic/index.mjs";

//index para trabajar con express,

const api = express();

const jsonBodyPaser = express.json();

//REGISTER USER CON EXPRESS
api.post("/users", jsonBodyPaser, (req, res) => {
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
api.post("/login", jsonBodyPaser, (req, res) => {
  try {
    const { username, password } = req.body;

    logic.loginUser(username, password, (error) => {
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
///método get - retrieve user CON EXPRESS
api.get("/users/:userId", jsonBodyPaser, (req, res) => {
  logic.retrieveUser(req.params.userId, (error, user) => {
    if (error) {
      res
        .status(400)
        .json({ error: error.constructor.name, message: error.message });

      return;
    }

    if (!user) {
      res.status(404);
    } else {
      res.status(201).json(user);
    }
  });
});

api.patch("/users/:userId", jsonBodyPaser, (req, res) => {
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

api.listen(8080, () => console.log("API listening on port 8080"));
