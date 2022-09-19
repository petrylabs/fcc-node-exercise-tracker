const mongoose = require("mongoose");

const Exercise = require('../../models/exercise');

const user = require("../../models/user");
const exercise = require("../models/execise");

const user = new user({
    username: "John Doe"
})

const exercise = new Exercise({
    description: "Some Exercise",
    duration: 45,
    date: "Mon Jan 01 1990"
});

user.save((err) => {
  if (err) return handleError(err);

  // exercise now exists, so lets associate an exercise
  // assign the _id from our user John Doe. This ID is created by default!
  exercise.user = user._id

  exercise.save((err, data) => {
    if (err) return handleError(err);
    // John Doe now has his story
    announceTransaction(data);
  });
});

function handleError(err) {
    console.error('ERROR', err);
}

function announceTransaction(data) {
    console.log('Transaction Completed!, Result:', data)
}

