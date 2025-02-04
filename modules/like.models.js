import mongoose, { mongo, Schema } from "mongoose";

const likeSch = new Schema({
    video:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    comment:{
        type:Schema.Types.ObjectId,
        ref:"Comment"
    },
    tweet:{
        type:Schema.Types.ObjectId,
        ref:"Tweet"
    },
    likedByPerson:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

export const Like = mongoose.models("Like",likeSch)