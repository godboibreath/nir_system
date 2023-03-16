import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

import router from './routes';
import Logger from './modules/logger.module';
import logRequestMiddleware from './middlewares/logRequest.middleware';

(async () => {
    try {
        const app = express();
        if (!process.env.DB_PATH || !process.env.DB_NAME) {
            throw new Error('Dotenv does not contain DB_PATH or DB_NAME');
        }
        await mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`);
        const port = process.env.PORT || 3000;
        app.use(express.json());
        app.use(cors());
        app.use(logRequestMiddleware);
        app.use('/', router);
        app.listen(port, () => {
            Logger.info(`Server have started on port: ${port}`);
        });
    } catch (error) {
        Logger.warning(`Server start error: ${error.message}`);
    }
})();

// (async () => {
//     const db = await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
//     const schema = new mongoose.Schema({name: String})
//     const Cat = mongoose.model('Cat', schema);

//     const kitty = new Cat({ name: 'Zildjian' });
//     kitty.save().then(() => console.log('meow'));
// })()
