import winston from 'winston';
import moment from 'moment';

const logLevels = {
    levels: {
        notice: 0,
        warning: 1,
        info: 2,
    },
    colors: {
        notice: 'green',
        info: 'blue',
        warning: 'yellow',
    },
};

winston.addColors(logLevels.colors);

const logger = winston.createLogger({
    levels: logLevels.levels,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize({
            all: true,
        }),
        winston.format.printf(({ level, message, timestamp, ...data }) => {
            const jsonData = Object.keys(data).length > 0 ? JSON.stringify(data) : '';
            return `${moment(timestamp).format('YYYY.MM.DD HH:mm:ss')} [${level}]: ${message}${
                jsonData ? ` ,data: ${jsonData}` : ''
            }`;
        }),
    ),
    transports: [new winston.transports.Console()],
});

export default logger;
