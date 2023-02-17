// importing
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const colors = require("colors")
const connectDB = require("./config/connectDB")

// config dotenv file
dotenv.config();


// database call
connectDB()


// creating rest object

const app = express()


// middlewares
app.use(morgan("dev"))
app.use(express.json())
app.use(cors())

// routes
// now remove this Hello from Server
// app.get("/",(req,res)=>{
//     res.send(`<h1>Hello from Server</h1>`)
// })
app.use("/api/v1/users",require("./routes/userRoute"))



// PORT 
const PORT = 8080 || process.env.PORT

// listen to server
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})