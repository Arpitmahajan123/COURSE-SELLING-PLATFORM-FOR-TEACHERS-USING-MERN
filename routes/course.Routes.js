import express from 'express';
import { Router } from "express";

const courseRouter = express.Router();


courseRouter.post('/purchase', function(req, res) {
    res.json({
        message: 'User Courses And Purchase Page'
    });
});

courseRouter.post('/preview', function(req, res) {
    res.json({
        message: 'Courses Preview Page'
    });
});
    



export { courseRouter };