import {ApiResponse} from "../utils/ApiRespnose.js"
import {asyncHandler} from "../utils/asyncHandler.js"

// old method but we made asyncHandler for this
// const healthcheck = async (req, res) =>{
//     try {
//         res.status(200).json
//     }
// }

const healthcheck = asyncHandler( async (req, res)=>{

        return res.status(200).json(new ApiResponse(200, "ok", "health check passed"));

})

export {healthcheck}