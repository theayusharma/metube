import mongoose, { mongo, Schema } from "mongoose";

const subscriptionSch = new Schema({
    suscriber:{
        type:Schema.Types.ObjectId, // the one who is subscribing
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId, // to whom you are subscribing
        ref:"User"
    }
},{
    timestamps:true
})

export const Subscription = mongoose.models("Subscription",subscriptionSch)