import { Document } from 'mongoose';

export default interface store extends Document{
    name: string,
    birthday_date: string,
    preferences:{
    cake: string,
    extras: number,
    avrgspending: boolean,
    },
}