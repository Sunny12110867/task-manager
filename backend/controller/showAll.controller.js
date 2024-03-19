import { task } from "../model/Task.model.js"
import { apiError } from "../utils/apiError.utils.js";
import { apiResponse } from "../utils/apiResponse.utils.js";
import { asyncHandler } from "../utils/asyncHandler.utils.js"


const show_All_task = asyncHandler (async (req,res) =>{
   
    const AllData =await task.find();
    
    if(!AllData)throw new apiError(400,'error while find the all task in db')

    console.log(AllData)

    return res.status(200).json(new apiResponse(200,AllData,'all data send sucessufully'))
})

export {show_All_task}


