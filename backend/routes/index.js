import express from 'express'
import userRouter from './user.routes.js';
import productRouter from './products.routes.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/product', productRouter)

export default router;