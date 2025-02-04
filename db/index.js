import mongoose from "mongoose";
import { DB_NAME } from "../src/constants.js";

const connDB = async() => {
    try {
        const connInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\nMongoDb connected, host:${connInstance.connection.host}`)
        
    } catch (error) {
        console.log("mongoDB didn't connected",error)
        process.exit(1)
    }
}
export default connDB;