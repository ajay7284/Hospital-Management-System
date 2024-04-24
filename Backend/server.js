import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';
import cloudinary from "cloudinary"

dotenv.config({
    path: './.env'
})


cloudinary.v2.config({ 
    cloud_name: 'dh7w7jvxn', 
    api_key: '198216983213563', 
    api_secret: 'JzoR227Mef7X4yVPDku36i4SDPk'
  });






connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT }`)
    })
})
.catch((err) =>{
    console.log("mongo db connection  failed !!", err)
})

