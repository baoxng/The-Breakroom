const mongoose = require("mongoose");
const db = require("../models");

// seeds db with users

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/thebreakroom");

const userSeed = [
  {
    _id: 1,
    username: "no1frycook",
    password: "krustykrab1"
  },
  {
    _id: 2,
    username: "tinab",
    password: "deardiary"
  },
  {
    _id: 3,
    username: "goldy",
    password: "goldfish"
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});
