const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL=process.env.MONGODB_URL;

const DBConnection =async()=>{
    try {
        const con= await mongoose.connect(MONGODB_URL)
        console.info(`MongoDB connected to : ${con.connection.host}`)
    }catch (error){
        console.error("error connecting to mongo db cluster: ", error)
    }
}

module.exports = DBConnection;