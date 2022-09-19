const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

app.use('/', indexRouter);

app.use('/api/users', usersRouter);

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})