import express from 'express'
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import router from "./router.js"


const PORT = 5000
const DB_URL ='mongodb+srv://user:user1@cluster0.cdzhd.mongodb.net/backend-project?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api', router)

async function startUp(){
    try{
        await mongoose.connect(DB_URL,{useUnifiedTopology: true , useNewUrlParser: true})
        app.listen(PORT,() => console.log('SERVER STARTED ON PORT' + PORT))
    }catch (e){
        console.log("Error is :" + e);
    }
}

startUp();



