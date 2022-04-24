import { Document } from 'mongoose';

export default interface xcake extends Document{
    product: string,
    name: string,
    type: string,
    size: number,
    extras: number,

}