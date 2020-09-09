const express = require("express")
const mongodb = require("mongodb")

let {MongoClient} = mongodb

const app = express()

let usuarios

app.use(express.json())

app.post("/api/login",(req,res)=>{
    //console.log(req.body)
    //req.body.useremail = "test1" "test@test.com"
    //req.body.password
    let cursor = usuarios.find({ $or : [ 
        {username:req.body.useremail} , 
        {email:req.body.useremail} 
    ] })

    
    cursor.toArray((err,docs)=>{
        if(err){
            res.status(500).json({err:true,data:err})
        }
        if(docs.length){

            let usuario = docs[0]
            if(usuario.password === req.body.password){

                res.json({err:false,data:"Loged in!"})

            }else{
                res.status(403).json({err:true,data:"Contraseña incorrecta"})
            }

        }else{
            res.status(403).json({err:true,data:"No se encuentra el usuario"})
        }
    })
})

app.post("/api/signup",(req,res)=>{
    //console.log(req.body)
    //let {username,email,password} = req.body
    usuarios.insertOne(req.body,(err,result)=>{
        if(err){
            throw new Error("Hubo un error!")
            res.status(500).json({err:true,data:"Error en server"})
        }

        if(result.insertedCount > 0){
            res.json({err:false,data:"Se creo la cuenta!"})
        }else{
            res.status(400).json({err:true,data:"No se pudo crear la cuenta"})
        }
    })
})

MongoClient.connect("mongodb://localhost:27017",(err,cliente)=>{
    if(err) throw new Error("Hubo un error!")

    let db = cliente.db("curso_react")

    usuarios = db.collection("usuarios")

    console.log("Se levanto base de datos!")
    app.listen(8000,()=>{
        console.log("Se levanto servidor web!")
    })

})
