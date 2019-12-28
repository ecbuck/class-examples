const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const app = express();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const secretKey = fs.readFileSync("secret256.key");

const saltRounds = 10;

app.use(bodyParser.json());

const users = {};

app.post("/register", (req, res) => {
  const body = req.body;
  const password = body.password;
  const username = body.username;

  if (!users || !password) {
    res.status(400).send("Username or password missing!");
    return;
  }

  if (users[username]) {
    res.status(400)("Username  already exists!");
    return;
  }

  bcrypt.hash(password, saltRounds, (error, hashedPassword) => {
    users[username] = hashedPassword;

    jwt.sign({ username }, secretKey, (error, token) => {
      if (error) {
          res.send(500).send('Password failed create hash.');
          return;
        //TODO: handle failed case.
        res.send('Token failed to generate');
        return;
      }
      res.send(token);
      return;
    });
  });
});

app.post("/login", (req, res) => {
  const body = req.body;
  const username = body.username;
  const password = body.password;

  if (!users || !password) {
    res.send("Username or password missing!");
    return;
  }

  if (!users[username]) {
    res.send("Username or password missing!");
    return;
  }

  const hashedPassword = users[username];

  bcrypt.compare(password, hashedPassword, (error, isSame) => {
    if (error) {
        res.status(400).send('Password incorrect.');
        return;
    }
    if (isSame) {
      jwt.sign({ username }, secretKey, (error, token) => {
        if (error) {
            res.status(500).send('Failed to create token.');
            return;
          //TODO: handle failed case.
        }
        res.send(token);
        return;
      });
    } else {
      res.send('Failed to Login');
    }
  });
});

app.get('/authenticatedData', (req, res) => {
    const authorization  = req.headers.authorization;
    let token = '';

    if(authorization && authorization.split (' ')[0] === 'Bearer') {
        token = authorization.split(' ')[1];
    }

    jwt.verify(token, secretKey, (error, decodedToken) => {
        if(error){
            //TODO: handle failed case.
            res.send('Token not valid');
            return;
        }

        res.send('the private data');
    });

});

app.listen(3000, () => {
  console.log("Server Started!");
});
