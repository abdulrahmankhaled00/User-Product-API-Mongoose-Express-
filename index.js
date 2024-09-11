process.on('uncaughtException', (err) => {
    console.log(err);
})


import express from 'express'
import { dbConnectoin } from './dataBase/dbConnection.js'
import { globelErorr } from './src/middleware/globelErorr.js';
import { AppError } from './src/utils/appError.js';
import mongoose from 'mongoose';
import userRouter from './src/modules/user/user.routes.js';
import dotenv from 'dotenv';
import productRouter from './src/modules/products/product.routes.js';

dotenv.config()

const app = express()
const port = 3000
dbConnectoin().catch((err) => { console.log(err); })




app.use(express.json())
app.use(userRouter)
app.use(productRouter)

app.get('/', (req, res) => res.send('Hello World!'))


app.use('*', (req, res, next) => {
    next(new AppError('this end point not existed', 404))
})
app.use(globelErorr)

process.on('unhandledRejection', (err) => {
    console.log(err);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))