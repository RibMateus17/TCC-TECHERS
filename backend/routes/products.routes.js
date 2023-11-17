import express from 'express'
import * as productController from '../controller/product.controller.js'

const productRouter = express.Router();

productRouter.use('/register', productController.register);

export default productRouter;