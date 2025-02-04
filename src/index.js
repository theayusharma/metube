import connDB from '../db/index.js'
import {app} from './app.js'
import dotenv from 'dotenv'

dotenv.config({
    path:"src/.env"
})
const PORT = process.env.PORT || 5000

connDB()
.then(
    app.listen(PORT, ()=>{
        console.log(`server is running port:${PORT}`)
    })
)
.catch((err)=>{
    console.log("mondo connection error",err)
})