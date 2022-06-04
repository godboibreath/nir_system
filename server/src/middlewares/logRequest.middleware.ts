import { NextFunction, Request, Response } from 'express';
import Logger from '../modules/logger.module';

export default (req: Request, res: Response, next: NextFunction) => {
    Logger.info(`Recived request from ${req.ip} to ${req.path}`, req.body);
    next();
};
