import mongoose, {Schema} from "mongoose";

//mongoose aggrigate paginator

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoScehma = new Schema({
    videoFile : {
        type: String, // cloudinary url 
        required : true,
    }, 
    thumbnail : {
        type: String, // cloudinary url 
        required : true,
    }, 
    title : {
        type: String, 
        required : true,
    },
    description : {
        type :String,
        required : true
    },
    views : {
        type :Number,
        required : true
    },
    duration : {
        type :Number,
        required : true
    },
    isPublished: {
        type :Boolean,
        required : true
    },
    owner:{
        type : Schema.Types.ObjectId,
        ref : "User"
    }
},
{
    timestamps:true
})

videoScehma.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoScehma)