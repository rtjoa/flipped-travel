const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    type: String,
    lat: Number,
    lng: Number,
    data: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);