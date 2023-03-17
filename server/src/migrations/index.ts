import mongoose from 'mongoose';
import 'dotenv/config';

import compniesMigation from './1_companies';
import Logger from '../modules/logger.module';

const migrations = [compniesMigation].sort((a, b) => a.id - b.id);

(async () => {
    try {
        await mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`);
        await Promise.all(migrations.map(({ migration }) => migration()));
        Logger.info('Migrations have passed');
    } catch (error) {
        Logger.warning(error.message);
    } finally {
        process.exit(200);
    }
})();
