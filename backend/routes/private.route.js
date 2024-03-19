import { Router } from "express";
import {privateRoute} from '../controller/private.controller.js'

const router = Router()

router.route('/').post(privateRoute)

export default router

