const mongoose = require('mongoose');

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const marcadorSchema = new mongoose.Schema({
    id: {type: String},
    latlng: {type: Object, required: true},
    createdAt: {type: String, default: today},
    updatedAt: {type: String, default: today},
}, {timestamps: true});



const marcadores = mongoose.model('marcadores', marcadorSchema);

module.exports = marcadores;