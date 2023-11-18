import express from 'express'
import userRouter from './user.routes.mjs'
import productRouter from './product.routes.mjs';

const Router = express.Router();

Router.use('/user', userRouter);
Router.use('/product', productRouter);

export default Router;