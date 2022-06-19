const mongoose = require('mongoose');
const USER_PASSWORD = require('../../USER_CONNECT.js')

mongoose.connect(
    `mongodb+srv://${USER_PASSWORD}@cursoalura.ho3jlza.mongodb.net/desafio-nodejs`
);

let db = mongoose.connection;

module.exports = db;