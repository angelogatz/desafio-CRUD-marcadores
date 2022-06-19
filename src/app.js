const express = require('express');
const db = require('./config/dbConnect.js');
const routes = require('./routes/index.js');

db.on("error", console.log.bind(console, 'Connection failed'));
db.once("open", () => {
    console.log('Connection successful ;)')
});

const app = express();
app.use(express.json());
routes(app);

module.exports = app;