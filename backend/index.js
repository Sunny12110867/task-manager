import express from 'express'
import cors from "cors"
const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//importing the routes
import addNewRote from './routes/addNew.route.js'
import allTaskRoute from './routes/allTask.route.js'
import bookmarkRoute from './routes/bookmark.route.js'
import privateRoute from './routes/private.route.js'


// using the routes
app.use('/addnew',addNewRote);
app.use('/allTask',allTaskRoute);
app.use('/bookmark',bookmarkRoute)
app.use('/private',privateRoute)

export {app}
