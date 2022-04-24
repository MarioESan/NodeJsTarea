import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 3000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
}

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'MarioSanchez';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'Reichjanz1998';
const MONGO_HOST = process.env.MONGO_HOST || 'Reichnodejs.n2su2.mongodb.net/nodejs';

const MONGO = {
    host: MONGO_HOST,
    password: MONGO_PASSWORD,
    username: MONGO_USERNAME,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
}

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 4400;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}

const SECRET_TOKEN = process.env.SECRET_TOKEN || 'Reichreichpassword';

const SECRETS = {
    token: SECRET_TOKEN
}

const config = {
    server: SERVER,
    secrets: SECRETS,
    mongo: MONGO
}

export default config;