const express=require("express")
const route=express.Router()

route.get("/",async(req,res)=>
{
    res.status(200).send("server is running")
})

module.exports =route