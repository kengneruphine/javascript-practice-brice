const mong = require('mongoose');
const schema = mong.Schema;

const studInfo = new schema({
    matNum: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        trim: true
    },
    uName:{
        type: String,
        required: true,
    },
    faculty: {
        type: String,
        default: 'Faculty Of Education'
    },
    p1: {
        type: String,
        required: true,
        minlength: 5,
    },
    p2: {
        type: String,
        required: true,
        minlength: 5
    }
});

module.exports = mong.model('userInfo', studInfo);