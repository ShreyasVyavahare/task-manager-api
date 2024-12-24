const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

//DB connection

const connectDB =  async()=>{
    try{

const dbUri = process.env.MONGO_URI;
await mongoose.connect(dbUri ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
})
console.log('DB connected')

    }
    catch(err){
        console.error('Database connection error:', err.message);
        process.exit(1);
        }

}

module.exports = { connectDB };