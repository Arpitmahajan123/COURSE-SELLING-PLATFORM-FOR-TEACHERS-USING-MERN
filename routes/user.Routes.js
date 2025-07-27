import express from 'express';
import { Router } from "express";

const userRouter = express.Router();

    
userRouter.post('/signin', function (req, res) {
    res.json({
        message: 'User Sign In Page'
    });
});

userRouter.post('/signup', function (req, res) {
    res.json({
        message: 'User Sign Up Page'
    });
});

userRouter.get('/purchases', function (req, res) {
    res.json({
        message: 'User Purchase Courses Page'
    });
});


export { userRouter };