import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
// import { errorHandler } from './middlewares/error-handler';
// import { NotFoundError } from './errors/not-found-error';
import { errorHandler, NotFoundError } from '@sgtickets-v1/common';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        // secure: true
        secure: process.env.NODE_ENV !== 'test' // para los test debe ser false (porque no es https)
    })
);

// app.get('/api/users/currentuser', (req, res) => {
//     res.send('Hi there!');
// });
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);



// app.all('*', async (req, res,next) => {
//     next (new NotFoundError())
// });

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

// atrapa todos los errores
app.use(errorHandler);

export { app };

