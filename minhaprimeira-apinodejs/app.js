const { response } = require("express")
const express= require("express")
const app=express()
const mysql=require("mysql")
const cors=require("cors")
app.use(express.static('build'))

const conexao=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
})

app.use(cors())
app.get("/prod",(req,res)=>{
    conexao.query("Select * from produtos",(err,result)=>{
        res.json(result)
    })
})

app.listen(8080,() => {
    console.log("Rodando em http://localhost:8080")
})

