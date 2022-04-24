import { NextFunction, Request, Response } from "express";
import products from '../models/product';
import mongoose from "mongoose";

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await products.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'All products: ',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {
    const {  name, birthday_date, cake,  avrgspending,  extras} = req.body;

    // TODO Validate parameters

    const mobile = new products({
        _id : new mongoose.Types.ObjectId,
        name:
        birthday_date:
        preferences:
        cake:
        extras:
        avrgspending: 
  
    });

    const result = await mobile.save();

    return res.status(201).json({
        messagge : '¡User Registered !',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { company, name, size, camera_pixels, memory, op_system, aux_port, ctype_port } = req.body;

    // VALIDATE 
    const result = await products.findByIdAndUpdate(id, {   name, birthday_date, cake,  avrgspending,  extras }, { new: true});

    return res.status(200).json({
        messagge : 'User Updated ',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await products.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : '¡User deleted!',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await products.findById(id);

    return res.status(201).json({
        messagge : '¡Mobile Found!',
        result
    });
};

export default { getAll, create, update, remove, get}