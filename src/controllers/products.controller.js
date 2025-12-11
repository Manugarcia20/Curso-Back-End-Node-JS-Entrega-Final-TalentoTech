import * as productsService from '../services/products.service.js'

export const getAllProducts = async (req,res) => {
    try{
        const products = await productsService.getAllProductsService()
        res.status(200).json(products);
    }catch(error){
        res.status(500).send();
    }
};

export const getProductById = async (req,res) => {

try{
    const id = req.params.id;
    const product = await productsService.getProductByIdService(id);

    if(id){
        if (product) {
            res.status(200).json(product);
        }else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    }else{
        res.status(400).json(product);
    }

}catch(error){
    res.status(500).send();
}
}

export const createProduct = async (req,res) => {
    try{
        const product= req.body;
        const newProduct = await productsService.createProductService(product);
        res.status(200).json(newProduct);
    }catch(error){
        res.status(500).send();
    }

};

export const deleteProduct = async (req,res) => {
    try{
    const id = req.params.id;
    if(id){
        await productsService.deleteProductService(id) 
        res.status(200).send();
    }else{
        res.status(400).json(error);
    }

    }catch(error){
         res.status(500).send();
    }
}

export const editProduct = async (req,res) => {
    try{
        const id = req.params.id;
        const product = req.body;
        // console.log("id:", id, "product:", product);
        if(id && product){
            const newProduct = await productsService.updateProductService(id,product);
            res.status(200).json(newProduct);
        }else{
            res.status(400).json(error);
        }

    }catch(error){
        res.status(500).send();
    }
}