import express from 'express'
import * as userController from '../controller/user.controller.mjs'

const userRouter = express.Router();

userRouter.get('/getAll', userController.getAllUsers);
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);

export default userRouter;