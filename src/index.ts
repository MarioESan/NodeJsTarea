import config from "./config/config";
import logger from "./config/logger";
import http from 'http';
import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import userRoutes from "./routes/user";
import mobileRoutes from "./routes/Products";
import mobileCompanyRoutes from "./routes/userstatus";
import middleware from "./controllers/middleware";
import mongoose from 'mongoose';

const router = express();

mongoose.connect(config.mongo.url).then( () =>{
    logger.info('Mongo DB connected succesfull');

}).catch((error) => {
    logger.error(error.message, error);
});



router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`METHOD: [${req.method}] - URL: [${req.url}]- IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () =>{
        logger.info(`METHOD: [${req.method}] - URL: [${req.url}]- STATUS: ${res.statusCode} IP: [${req.socket.remoteAddress}]`);
    });
    next();
});

//Routes

router.use('/api', userRoutes); 
 
router.use('/api', middleware.verifyTokens, mobileRoutes);  

router.use('/api', middleware.verifyTokens, mobileCompanyRoutes);  

router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');
    logger.error('Not Found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => {
    logger.info(`Server is running ${config.server.hostname}:${config.server.port}`)
})

