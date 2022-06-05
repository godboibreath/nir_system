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
            case 'competitive':
                return dummyCompetitiveData;
            case 'user-rates':
                return dummyUserRatesTable;
            default:
                return;
        }
    }
    public getData = (req: Request, res: Response) => {
        try {
            const data = this.getDummyData(req.query.table as string);
            res.status(200).json(data);
            Logger.info('Send data to client', data);
        } catch (e) {
            Logger.info(`Api controller error: ${e.message}`);
        }
    };

    public collectUserRates = (req: Request, res: Response) => {
        try {
            const { company } = req.body;
            res.status(200).json({ rate: 4.9 });
            Logger.info('Send data to client', { rate: 4.9 });
        } catch (e) {
            Logger.info(`Api controller error: ${e.message}`);
        }
    };
}

export default new ApiController();
