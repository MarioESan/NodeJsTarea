import { cakes } from "mongoose";
import mongoose from "mongoose";
import  xcake  from "./interfaces/products";
import store from "./interfaces/userstatus";

const Products: cakes = new cakes({
    name: {type: String, required: true},
    size: {type: String, required: true},
    birthdaydate: {type: Number, required: true},
    },{
        timestamps: true
    })

export default mongoose.model<store>('cakes', Products);
