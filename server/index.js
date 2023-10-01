/* DEPENDENCY IMPORTS */
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';


/* CONTROLLERS */
import { testGet } from './controllers/test.js';


/* CONFIGURATION */
dotenv.config()
const app = express();
const PORT_NUMBER = process.env.PORT || 3000
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
app.use(express.json())


/* ROUTES */
app.get('/', testGet)


app.listen(PORT_NUMBER, () => {
    console.log(`Server listening on port: ${PORT_NUMBER}`)
})