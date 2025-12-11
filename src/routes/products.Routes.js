import express from 'express';
const router = express.Router();

import{
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    editProduct
} from '../controllers/products.controller.js';

router.get("/products", getAllProducts);

router.get('/products/:id',getProductById);

router.post('/products/create', createProduct);

router.put("/products/:id", editProduct);

router.delete('/products/:id', deleteProduct);


export default router;