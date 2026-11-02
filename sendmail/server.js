import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import { sentMail } from "./nodmailsend.js";
import multer from "multer";


const app= express();

app.use(express.json());
app.use(cors());
dotenv.config()



const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 5,
  },
});



app.get("/",async(req,res)=>{
    return res.json({working:"yes working"})
})






app.post("/sendmail", upload.array("attachments", 5),async(req,res)=>{
    let {sendto,subject}= req.body;

    if (typeof sendto === "string") {
    sendto = [sendto];
  }

     let formdata = req.body.formdata || {};
     
        if (typeof formdata === "string") {
      formdata = JSON.parse(formdata);
    }
   const keys = Object.keys(formdata);     
const values = Object.values(formdata);

    const files = req.files || [];


  await sentMail({keys,values,sendto,subject,files})

    return res.status(201).json({success:true,message:"mail send succesfuly"})
})








const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log(`APP running on PORT http://localhost:${PORT}`)
})