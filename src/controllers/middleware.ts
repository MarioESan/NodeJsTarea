import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

const verifyTokens = (req: Request, res: Response, next: NextFunction) => {
    try{
        const authorizattion = req.header('authorization');
        const token = authorizattion?.split(' ')[1];
        if(!token){
            return res.status(400).json({error: 'Invalid token'})
        }
        jwt.verify(token, config.secrets.token);
        next();
    }catch(error){
        res.status(400).json({error: 'Invalid token'})
    }


};

export default{ verifyTokens }