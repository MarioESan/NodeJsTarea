const getTimeStamp = (): string => {
    return new Date().toISOString();
}

const info = (message: string, object?: any): void => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${message}]`, object);
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${message}]`);
    }

}

const error = (message: string, object?: any): void => {
    if (object) {
        console.info(`[${getTimeStamp()}] [ERROR] [${message}]`, object);
    } else {
        console.info(`[${getTimeStamp()}] [ERROR] [${message}]`);
    }
}

export default { info, error }