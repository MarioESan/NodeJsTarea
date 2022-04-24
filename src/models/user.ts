import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import User from './interfaces/user';

const UserSchema: Schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
}, {
    timestamps: true
});

export default mongoose.model<User>('User', UserSchema);