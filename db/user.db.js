import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);
