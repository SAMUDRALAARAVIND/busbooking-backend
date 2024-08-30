const mongoose = require('mongoose')
require('dotenv').config()


const mongoConnection  = () => {
    mongoose.connect(process.env.MongoUri).then(() => {
        console.log('Connected to MongoDB')
    }).catch(err => console.log('Error connecting'));
}


module.exports = mongoConnection;