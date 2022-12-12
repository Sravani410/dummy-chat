

const mongoose = require("mongoose");

require("dotenv").config();

// const MONGODB_URL = process.env.MONGODB_URL;

const ConnectDb = () => {
    return mongoose.connect("mongodb+srv://chatapp:Chatapp4@chatapp.bhzvt6r.mongodb.net/chat")
    .then(() => console.log("MongoDb has connected successfully"))
    .catch((error) => console.log(error.message+" "+"There might be some issues with MongoDb URL"));
}

module.exports = ConnectDb;