// importing
const mongoose = require("mongoose")


const colors = require("colors")

// value
const connectDB = async() => {
   try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Server running on ${mongoose.connection.host}`.bgCyan.white);
   } catch (error) {
      console.log(`${error}`.bgRed)
   }
}

// export
module.exports = connectDB