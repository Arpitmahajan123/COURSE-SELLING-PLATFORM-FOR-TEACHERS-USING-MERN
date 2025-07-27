import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));
app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.set('views', 'views');


// This is Sample home Page Route.
app.get('/', (req, res) => {
    res.send('Welcome to the Course Selling Application');
});


// This Is Signin And Signup Page Route.
app.get('/users/signin', function(req, res) {
    res.json({
        message: 'User Sign In Page'
    });
});

app.get('/users/signup', function(req, res) {
    res.json({
        message: 'User Sign Up Page'
    });
});


// This Route For User Purchase Courses Page.
app.get('/users/purchases', function(req, res) {
    res.json({
        message: 'User Purchase Courses Page'
    });
});

// This Route For All Courses Page.
app.get('/courses', function(req, res) {
    res.json({
        message: 'User Courses Page'
    });
});

app.get('/users/signin', function(req, res) {
    res.json({
        message: 'User Sign In Page'
    });
});







app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
