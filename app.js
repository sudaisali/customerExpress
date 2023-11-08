require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const customerRouter = require('./routes/CustomerRoute')
const {engine} = require('express-handlebars')

const dbPath = process.env.PATH_URL
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('public'))
app.use('/customer',customerRouter)
app.engine('.hbs',engine({
    extname : '.hbs',
    defaultLayout:false,
    layoutsDir:'views'
}))

app.get('/index',(req,res)=>{
    res.render('index.hbs')
})




mongoose.connect(dbPath).then(()=>{
    app.listen(3000,()=>{
        console.log("server is running")
    })
}).catch((error)=>{
    console.log(error)
})

