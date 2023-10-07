const express = require("express")
const  colors =require("colors") 

const userRoutes = require('./routes/userRoutes')


// const {chats} =require("./data/data")
const dotenv = require("dotenv")
const connectDB = require('./config/db')


dotenv.config()
connectDB()
const app = express()


app.use(express.json()) ;



app.get('/', (req,res)=>{
    res.send("App is running")

})

app.use('/api/user',userRoutes)



// app.get("/api/chat" , (req,res)=>{
//     res.send(chats)
// })

// app.get("/api/chat/:id",(req , res)=>{
//     // console.log(req.params.id)
//     const singleChat = chats.find(c=>c._id === req.params.id)
//     res.send(singleChat)
// })


const PORT = process.env.PORT || 5000



app.listen(`${PORT}`,console.log(`server is started on port ${PORT}`.yellow.bold))