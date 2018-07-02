const express = require('express');
const router = express.Router();

const phone = require('../models/phone');

//Returns name and price of the phones
router.get('/', (req, res) => {
    phone.find({}, {_id: 0, name : 1 , price: 1 }, function(err,phones) {
        if (err){
            throw err;
        } else{
            res.json(phones);
        }
    })
});


module.exports = router;