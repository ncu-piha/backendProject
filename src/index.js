
//require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path:'./env'
})

//beacuse yeh async hai to promise return krega to we can use .then and catch method 

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port:${process.env.PORT}`);
    });
})
.catch((err)=>{
    console.log("mongodb connection failed",err);
})




//1st approach
//iife use kro 
// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error",(error)=>{
//         console.log("err:",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.error("ERROR:",error)
//     }
// })()