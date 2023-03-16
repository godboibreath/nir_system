import mongoose from 'mongoose';

import compniesMigation from './1_companies';

const migrations = [compniesMigation].sort((a, b) => a.id - b.id);

(async () => {
    await mongoose.connect(`${process.env.DB_PATH}/${process.env.DB_NAME}`);
    await Promise.all(migrations.map(({ migration }) => migration()));
})();
