import { Router } from "express";
import {show_All_task} from '../controller/showAll.controller.js'

const router = Router()

router.route('/').get(show_All_task);

export default router;