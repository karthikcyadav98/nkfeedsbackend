const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Users = require("./models/users");
const Confessions = require("./models/confessions");

router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ norecipes: "no users found" }));
});

router.post("/adduser", (req, res) => {
  const newUser = new Users({
    email: req.body.email,
  });

  newUser
    .save()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

router.post("/login", (req, res) => {
  Users.findOne({ email: req.body.email })
    .sort({ date: -1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ norecipes: "no users found" }));
});

router.get("/confessions", (req, res) => {
  Confessions.find()
    .sort({ date: -1 })
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ norecipes: "no users found" }));
});

router.post("/addConfessions", (req, res) => {
  const newConfessions = new Confessions({
    email: req.body.email,
    confession: req.body.confession,
  });

  newConfessions
    .save()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

router.delete("/deleteAll", (req, res) => {
  Confessions.deleteMany()
    .then((confessions) => res.json(confessions))
    .catch((err) => res.status(404).json({ norecipes: "no users found" }));
});

module.exports = router;
