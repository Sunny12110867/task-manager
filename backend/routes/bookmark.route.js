import { Router } from "express";
import {bookmarkController} from '../controller/bookmark.controller.js'

const router = Router()

router.route('/').post(bookmarkController)

export default router

