import { Router } from 'express';

const api = Router();

api.get('/get-data', (req, res) => {
    res.status(200).json(['Hello', ' World', ' !!!']).end();
});

export default api;
