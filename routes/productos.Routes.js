import express from 'express';
const router = express.Router();

import{
    getAllProducts,
    getProductById,
    createProduct
} from '../controllers/products.controller.js';

router.get("/products", getAllProducts);

router.get('/products/:id',getProductById);

router.post('/products/create', createProduct);

router.delete('/products/:id', (req,res) => { 
    res.send(`Producto con id ${req.params.id}`);
});

export default router;