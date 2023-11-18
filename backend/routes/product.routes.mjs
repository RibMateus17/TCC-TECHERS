import express from 'express'
import * as productController from '../controller/product.controller.mjs'
import upload from '../util/multer.mjs'

const productRouter = express.Router();

productRouter.post(
  '/register',
  upload.single('image'),
  productController.register,
);

productRouter.get('/getAll', productController.getAll);
productRouter.delete('/delete/:id', productController.deleteById);

export default productRouter;