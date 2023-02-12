const express=require('express')
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
//setting up server on port 5000
app.post("/",(req,res)=>{
   console.log(req.body);
   const {num1,num2}=req.body
   let result=num1+num2
   res.json({addition:result})
})
app.listen(5000,()=>{
    console.log('server is ready on port 5000');
})

