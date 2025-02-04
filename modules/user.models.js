import mongoose, { Schema, SchemaType } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname: {
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar: {
        type:String, //cloudinaryyyyy url
        required:true
    },
    coverUserImage: {
        type:String, //cloudinaryyyyy url
    },
    watchHist:[{
        type:Schema.Types.ObjectId,
        ref : "Video"
    }],
    password :{
        type:String,
        required : [true, "password is req"] 
    },
    refreshToken:{
        type:String
    }
},{
        timestamps : true
    }

)
// encrypting the password
userSchema.pre("save", async function (next){
    if (!this.modified("password")) return next()
    
        else  this.password = bcrypt.hash(this.password,10)

    next()
})
// comparing the encrypted password with the user sent password
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
//acces toke jwt
userSchema.methods.generateRefreshToken = function(){
    //short lived refresh token
    return jwt.sign({
        _id : this._id,

    }
//secret
,process.env.ACCESS_TOKEN_SECRET,
//timeout
{ expiresIn:process.env.ACCESS_TOKEN_EXPIRY }
);
}

userSchema.methods.generateAccessToken = function(){
    //short lived access token
    return jwt.sign({
        _id : this._id,
        //optional below this, _id is mandatory
        email:this.email,
        username:this.username,
        fullname:this.fullname
    }
//secret
,process.env.ACCESS_TOKEN_SECRET,
//timeout
{ expiresIn:process.env.ACCESS_TOKEN_EXPIRY }
);
}


export const User = mongoose.model("User",userSchema)