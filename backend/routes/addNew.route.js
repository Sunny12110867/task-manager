import { Router } from "express";
import {addnewTask} from '../controller/addNewTask.controller.js'

const router = Router()

router.route('/').post(addnewTask)

export default router

