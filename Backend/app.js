import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express()

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))




app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}))

//route

import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js" 

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user",userRouter)
app.use("/api/v1/appointment",appointmentRouter)


app.use(errorMiddleware)
export {app}