import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

// Imports For Routes.
import userRouter from './routes/userRoutes.js';
import courseRouter from './routes/courseRoutes.js';

// Initialize Express App
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));
app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.set('views', 'views');


// This is Sample home Page Route.
// app.get('/', (req, res) => {
//     res.send('Welcome to the Course Selling Application');
// });


// This Is Signin And Signup Page Route.
// app.post('/users/signin', function(req, res) {
//     res.json({
//         message: 'User Sign In Page'
//     });
// });

// app.post('/users/signup', function(req, res) {
//     res.json({
//         message: 'User Sign Up Page'
//     });
// });


// This Route For User Purchase Courses Page.
// app.get('/users/purchases', function(req, res) {
//     res.json({
//         message: 'User Purchase Courses Page'
//     });
// });

// This Route For All Courses Page.
// app.post('/courses/purchase', function(req, res) {
//     res.json({
//         message: 'User Courses And Purchase Page'
//     });
// });





// Common Way Of rounting.


app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);














app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
