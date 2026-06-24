import express from 'express'
const app = express()

import dotenv from 'dotenv'
import connection from  './config/db.js'
import userRoute from './routes/userRoute.js'
import productRoute from './routes/productRoutes.js'

dotenv.config()


const port = process.env.PORT 

connection()




app.use(express.json())
app.use('/user', userRoute)
app.use('/product',productRoute)


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

