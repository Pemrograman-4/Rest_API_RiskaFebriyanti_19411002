const mongoose = require('mongoose')
const mongooURL = 'mongodb://localhost:27017/latihan';
mongoose.connect(mongooURL,
    err => {
        if(err) throw err;
        console.log('Berhasil Konek ke database')
    });