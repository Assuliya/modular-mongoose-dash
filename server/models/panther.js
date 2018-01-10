var mongoose = require('mongoose');

var PantherSchema = new mongoose.Schema({
 name: String,
 color: String,
}, {timestamps: true });

var Panther = mongoose.model('Panther', PantherSchema);
