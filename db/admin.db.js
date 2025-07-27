import mongoose from 'mongoose';
import { type } from 'os';

const adminSchema = new mongoose.Schema({

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

const Admin = mongoose.model('Admin', adminSchema);
