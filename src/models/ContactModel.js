var mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({
    firstName      : String,
    lastName       : String,
    age            : String
});

var Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;