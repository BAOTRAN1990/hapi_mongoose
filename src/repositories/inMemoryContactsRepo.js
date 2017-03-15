var Contact = require('../models/ContactModel');

const getContact = (id) => Contact.findById(id);

const getContacts = () => Contact.find();

const addContact = (newContact) => {
    const contactToAdd = Contact({
        firstName: newContact.firstName,
        lastName: newContact.lastName,
        age: newContact.age
     });
    return contactToAdd.save();
}

const updateContact = (id, updatedContact) => Contact.findByIdAndUpdate(id, updatedContact);

const removeContact = (id) => Contact.findByIdAndRemove(id);

module.exports = {
    getContact,
    getContacts,
    addContact,
    updateContact,
    removeContact
};