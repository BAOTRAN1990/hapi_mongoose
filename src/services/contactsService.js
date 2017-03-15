const toContact = (persistedContact) => {
    if(persistedContact){
        return {
            id: persistedContact._id,
            firstName: persistedContact.firstName,
            lastName: persistedContact.lastName,
            age: persistedContact.age
        };
    }else{
        throw {
            message: 'Contact cannot be null or undefined',
            code: 'NoSuchContact'
        }
    }
};

const getContact = (id, loadById) => {
    return loadById(id).then(contact => toContact(contact));
};

const getContacts = (load) => {
    return load().then(contacts => contacts.map(contact => toContact(contact)));
};

const addContact = (contact, save) => {
    const newContact = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        age: contact.age
    };
    return save(newContact).then(savedContact => toContact(savedContact));
};

const updateContact = (id, contact, update) => {
    const updatedContact = {
        firstName: contact.firstName,
        lastName: contact.lastName,
        age: contact.age
    };
    return update(id, updatedContact).then(oldContactHasBeenUpdated => toContact(oldContactHasBeenUpdated));
};

const removeContact = (id, remove) => {
    return remove(id).then(oldContactHasBeenDeleted => toContact(oldContactHasBeenDeleted));
};

module.exports = {
    getContact,
    getContacts,
    addContact,
    updateContact,
    removeContact
};