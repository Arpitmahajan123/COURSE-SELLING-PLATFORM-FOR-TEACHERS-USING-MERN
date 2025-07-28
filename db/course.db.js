import mongoose from 'mongoose';
import { Mongoose } from 'mongoose';
import { Schema } from 'mongoose';
import ObjectId from "mongoose.Types.ObjectId";
import { type } from 'os';


const courseSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    creatorID: ObjectId,
    creatorName: String,
    creatorEmail: String,
    creatorPhone: String,
    creatorAddress: String,
    creatorImage: String,

    
}, { timestamps: true });

export const CourseModel = mongoose.model('Course', courseSchema);


