import express from 'express'
import * as userController from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter.post('/login', userController.login);

export default userRouter;