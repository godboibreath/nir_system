import { Router } from 'express';
import ApiController from '../controllers/api.controller';

const api = Router();

api.get('/get-data', ApiController.getData);

export default api;
