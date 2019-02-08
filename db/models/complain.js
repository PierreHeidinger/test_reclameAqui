const mongoose = require('mongoose')

const Complain = new mongoose.Schema({

    title : 
    {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    locale : {
        type : Object,
        required : false
    },
    company : {
        type : String,
        required : true
    },
});

module.exports = mongoose.model('complains',Complain)