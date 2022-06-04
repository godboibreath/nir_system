import { Request, Response } from 'express';
import moment from 'moment';
import Logger from '../modules/logger.module';

class ApiController {
    getData(req: Request, res: Response) {
        try {
            const dummyData = [
                {
                    name: 'Apple',
                    competitive: 25,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
                {
                    name: 'Samsung',
                    competitive: 24,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
                {
                    name: 'Xiaomi',
                    competitive: 23,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
                {
                    name: 'Lenovo',
                    competitive: 23,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
                {
                    name: 'Huawei',
                    competitive: 23,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
                {
                    name: 'Intel',
                    competitive: 23,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
                {
                    name: 'Logitec',
                    competitive: 23,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
                {
                    name: 'AMD',
                    competitive: 23,
                    date: moment().format('DD.MM.YYYY HH:mm'),
                },
            ];
            res.status(200).json(dummyData);
            Logger.info('Send data to client', { dummyData });
        } catch (e) {
            Logger.info(`Api controller error: ${e.message}`);
        }
    }
}

export default new ApiController();
