const http = require("http")

const PORT = 3001;

const server = http.createServer((req,res)=>{
    res.write('hello world')
    res.end()
})
server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})