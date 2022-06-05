import { Request, Response } from 'express';
import moment from 'moment';
import Logger from '../modules/logger.module';

const dummyCompetitiveData = [
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

const dummyUserRatesTable = [
    {
        name: 'Apple',
        rate: 4.9,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
    {
        name: 'Samsung',
        rate: 4.9,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
    {
        name: 'Xiaomi',
        rate: 4.5,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
    {
        name: 'Lenovo',
        rate: 4.2,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
    {
        name: 'Huawei',
        rate: 3.9,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
    {
        name: 'Intel',
        rate: 4.6,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
    {
        name: 'Logitec',
        rate: 4.0,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
    {
        name: 'AMD',
        rate: 4.5,
        date: moment().format('DD.MM.YYYY HH:mm'),
    },
];

class ApiController {
    private getDummyData(table: string) {
        switch (table) {
            case 'comptetitive':
                return dummyCompetitiveData;
            case 'user-rates':
                return dummyUserRatesTable;
            default:
                return;
        }
    }
    public getData = (req: Request, res: Response) => {
        try {
            res.status(200).json(this.getDummyData(req.query.table as string));
            Logger.info('Send data to client', { dummyCompetitiveData });
        } catch (e) {
            Logger.info(`Api controller error: ${e.message}`);
        }
    };
}

export default new ApiController();
