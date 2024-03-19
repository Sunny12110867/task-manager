import { app } from './index.js';
import dotenv from 'dotenv';
import connectDb from './db/index.js';

dotenv.config({
    path: './.env'
});

connectDb()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error while connecting to MongoDB:', err);
    });
