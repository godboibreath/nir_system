declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        LOG_LEVEL: string;
        DB_PATH: string;
        DB_NAME: string;
    }
}
