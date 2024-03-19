import {asyncHandler} from '../utils/asyncHandler.utils.js'
import {apiResponse} from '../utils/apiResponse.utils.js'
import {apiError} from '../utils/apiError.utils.js'
import {task} from '../model/Task.model.js'


const addnewTask = asyncHandler(async(req,res) =>{

        const {createdBy,
            description,
            priority,
            status,
            dueDate} = req.body
       

        const newTask =await task.create({
            createdBy,description,priority,status,dueDate
        })

        if(!newTask){
            throw new apiError(401,'faild to add the task')
        }

        console.log("adding new task is done !")
        res.status(201).json(new apiResponse(201,newTask,'task added successufuly'))

    })

export {addnewTask}
