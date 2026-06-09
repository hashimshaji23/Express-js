// const http = require("http")

// const PORT = 3001;

// const server = http.createServer((req,res)=>{
//     res.write('hello world')
//     res.end()
// })
// server.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`)
// })


const express = require("express")
const app = express()

const PORT = 3001;

app.get('/',(req,res)=>{
    res.send('hello Express Js')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})

app.get('/contact',(req,res)=>{
    res.send('contact page')
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})