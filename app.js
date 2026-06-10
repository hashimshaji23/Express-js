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

// app.get('/',(req,res)=>{
//     res.send('hello Express Js')
// })

// app.get('/about',(req,res)=>{
//     res.send('About page')
// })

// app.get('/contact',(req,res)=>{
//     res.send('contact page')
// })

// app.post('/addUser',(req,res)=>{
//     res.send('user data added')
// })

// app.put('/editUser',(req,res)=>{
//     res.send('USER data updated')
// })

// app.delete('/deleteUser',(req,res)=>{
//     res.send('USER data deleted')
// })

// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`)
// })




// CRUD operation

// Request methods

// A. req.params

app.get('/user/:id',(req,res)=>{
    res.send(params.id)
})

// B. req.query

app.get('/search',(req,res)=>{
    res.send(req.query.name)
})

// c. req.body

app.use(express.json())
app.post('/user',(req,res)=>{
    console.log(req.body)
})


// req.method
app.get('/search', (req,res)=>{
    res.send(req.method)
})

// req.url

app.get('/search', (req,res)=>{
    res.send(req.url)
})

app.get('/search',(req,res)=>{
    res.send(req.header)
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})