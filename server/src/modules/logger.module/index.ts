import logger from './logger';

class Logger {
    logger: typeof logger;

    constructor() {
        this.logger = logger;
    }

    log(level: string, message?: any, data?: any) {
        this.logger.log(level, message, data);
    }

    info(message?: any, data?: any) {
        this.logger.info(message, data);
    }

    warning(message?: any, data?: any) {
        this.logger.warning(message, data);
    }
}

export default new Logger();
