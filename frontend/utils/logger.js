class Logger {
    static info(message){
        if (Config.PROFILE !== "DEV") {
            return;
        }
        console.info(`[DEV_LOG]: ${message}`);
    }

    static error(message){
        if (Config.PROFILE !== "DEV") {
            return;
        }
        console.error(`[DEV_ERROR]: ${message}`);
    }
}