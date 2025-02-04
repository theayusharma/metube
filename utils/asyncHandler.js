const asyncHandler = (reqHandler)  =>{

    // return (req,res,next,error) 4 possible
    return (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next))
        .catch((err)=> next(err))
    }
}

export {asyncHandler}


//same thing can be done in a try catch block