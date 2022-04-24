import { NextFunction, Request, Response } from "express";
import Userstatus from '../models/userstatus';
import mongoose from "mongoose";

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await Userstatus.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'Customers: ',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {

    const { name,  birthday_date } = req.body;

    // TODO Validate parameters

    const userstatus = new Userstatus({
        _id : new mongoose.Types.ObjectId,
        name,
        birthday_date,

    });

    const result = await userstatus.save();

    return res.status(201).json({
        messagge : 'User registered',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { name,  birthday_date } = req.body;

    // VALIDATE 
    const result = await Userstatus.findByIdAndUpdate(id, { name, birthday_date, }, { new: true});

    return res.status(200).json({
        messagge : 'User updated',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await Userstatus.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : '¡User Eliminated!',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await Userstatus.findById(id);

    return res.status(201).json({
        messagge : '¡User Found!',
        result
    });
};

export default { getAll, create, update, remove, get}