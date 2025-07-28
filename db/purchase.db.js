import mongoose from 'mongoose';
import { Mongoose } from 'mongoose';
import { Schema } from 'mongoose';
import ObjectId from "mongoose.Types.ObjectId";
import { type } from 'os';


const purchaseSchema = new mongoose.Schema({
    
    userId : ObjectId,
    courseId : ObjectId
    
}, { timestamps: true });

export const PurchaseModel = mongoose.model('Purchase', purchaseSchema);

