const express=require("express")
const app=express()
const ejs=require("ejs")

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index.ejs")
})

app.get("/name/:name",(req,res)=>{
    let name = req.params.name
    console.log(name)
    res.render("getname.ejs",{name:name})
})

app.listen(3101, ()=>{
    console.log("running")
})