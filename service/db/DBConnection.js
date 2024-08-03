const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()


const MONGODB_URL =process.env.MONGODB_URL;
const DBConnection =async()=>{
    try {
        console.log(process.env.MONGODB_URL)
        const con= await mongoose.connect("mongodb+srv://chathurabhashitha01:EVFo6iW8sM5JLH9B@ecom-bookshop.5zr1e2k.mongodb.net/?retryWrites=true&w=majority&appName=ecom-bookshop")
        console.info(`MongoDB connected to : ${con.connection.host}`)
    }catch (error){
        console.error("error connecting to mongo db cluster: ", error)
    }
}

module.exports = DBConnection;