const mongoose = require('mongoose');
const schema = mongoose.Schema;

const phone = new schema({
    name: {type: String},
    price: {type: Number},
    description: {type: String},
    image: {type: String},
    price: {type: Number},
}, {
    collection: 'phones'
});


module.exports = mongoose.model('phone', phone);