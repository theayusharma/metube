import mongoose, { mongo, Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentSch = new Schema({
    content:{
        type:String,
        required:true
    },
    video:{
        type:Schema.Types.ObjectId,
        ref:"Video"
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

commentSch.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.models("Comment",commentSch)