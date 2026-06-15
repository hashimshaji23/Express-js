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

// app.get('/user/:id',(req,res)=>{
//     res.send(params.id)
// })

// // B. req.query

// app.get('/search',(req,res)=>{
//     res.send(req.query.name)
// })


// // c. req.body

// app.use(express.json())
// app.post('/user',(req,res)=>{
//     console.log(req.body)
// })

    
// // D. req.method
// app.get('/search', (req,res)=>{
//     res.send(req.method)
// })


// // E. req.url

// app.get('/search', (req,res)=>{
//     res.send(req.url)
// })

// app.get('/search',(req,res)=>{
//     res.send(req.header)
// })




// A. res.send()

// app.get('/',(req,res)=>{
//     res.send('hello express')
// })

// B. res.json() -> sends JSON data

// app.get('/user',(req,res)=>{
//     res.json({
//         name : "hashim",
//         age:23
//     });
// });

// C. res.status() -> sets HTTP status code

// app.get('/', (req,res)=>{
//     res.status(200).send('success');
// })

// D. res.sendFile()
// const path = require('path')
// app.get('/', (req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'));
// });

// E. res.redirect () -> Redirect to another URL 

// app.get ('/home',(req,res)=>{
//     res.redirect('/about');
// });

// app.get('/about', (req,res)=>{
//     res.send('about page')
// })



// middleware
// const mymiddleware = (req,res,next)=>{
//     console.log('this is my middleware');
//     next()
// }

// app.get('/', mymiddleware, (req,res)=>{
//     res.send('hello express with middleware')
// })


// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`);
// })

// Authorized method 

const auth = (req,res,next)=>{
    const token = req.headers.token;
    
    if (token === '123456'){
        next()
    } else {
        res.status(401).send('unauthorized')
    }
}

app.get('/profile', auth, (req,res)=>{
    res.send('welcome user')
});

app.listen(PORT, ()=>{
    console.log('server is running on port ' + PORT );
})
