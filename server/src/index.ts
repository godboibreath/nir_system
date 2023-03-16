import cluster from 'cluster';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';

import router from './routes';
import Logger from './modules/logger.module';
import logRequestMiddleware from './middlewares/logRequest.middleware';


// if (cluster.isMaster) {
//     const app = express();
//     const port = process.env.PORT || 3000;
//     app.use(express.json());
//     app.use(cors());
//     app.use(logRequestMiddleware);
//     app.use('/', router);
//     app.listen(port, () => {
//         Logger.info(`Server have started on port: ${port}`);
//     });
// } else {
//     Logger.info(`Worker have started`);
// }

import mongoose from 'mongoose';

(async () => {
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
    const schema = new mongoose.Schema({name: String})
    const Cat = mongoose.model('Cat', schema);

    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
})()
