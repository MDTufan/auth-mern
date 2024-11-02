import express from "express"
import 'dotenv/config'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB.js";
import router from "./router/auth.router.js";
import morgan from 'morgan'
const SERVER_PORT=process.env.SERVER_PORT || 5000;
const app = express()

//middlewer
app.use(morgan("dev")); 
app.use(express.json()); 
app.use(cookieParser()); 



// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api/auth", router);

app.listen(SERVER_PORT,async()=>{
    console.log(`Server is Runing At http://localhost:${SERVER_PORT}`);
    await connectDB();
    
})