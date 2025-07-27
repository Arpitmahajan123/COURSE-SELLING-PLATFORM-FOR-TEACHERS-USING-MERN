import express from 'express';
import { Router } from 'express';

const adminRouter = express.Router();

adminRouter.post('/signin', function (req, res) {
    res.json({
        message: 'User Sign In Page'
    });
});

adminRouter.post('/signup', function (req, res) {
    res.json({
        message: 'User Sign Up Page'
    });
});

adminRouter.post('/create/course', function (req, res) {
    res.json({
        message: 'You Can Create A Course As Admin'
    });
});

adminRouter.put('/changes/course', function (req, res) {
    res.json({
        message: 'You Can Make Changes To Course As Admin'
    });
});


adminRouter.get('/all/course', function (req, res) {
    res.json({
        message: 'You Can Make Changes To Course As Admin'
    });
});


export { adminRouter };
