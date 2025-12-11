
import{addProduct, deleteProduct, getProduct, getProducts, updateProduct} from "../models/products.model.js"


export const getAllProductsService = async () =>{
    return(
        new Promise(async (res,rej) =>{
        try{
            const products = await getProducts();
            res(products);
        }catch(error){
            rej(error);
        }
        })
    )
}


export const getProductByIdService = async (id) => {
    return(
        new Promise(async (res,rej) => {

            try{
                const products = await getProduct(id);
                res(products);
            }catch(error){
                rej(error);
            }
        })
    )
};

export const createProductService = async (productData) => {
    return(
        new Promise(async (res,rej) => {
            try{
                const newProduct = await addProduct(productData);
                res(newProduct);
            }catch(error){
                rej(error);
            }
        })
    )
};


export const deleteProductService = async (id) => {
    return(
        new Promise(async (res,rej) => {
            try{
                await deleteProduct(id);
                res();
            }catch(error){
                rej(error);
            }
        })
    )
}

export const updateProductService = async (id,product) => {
 return(
        new Promise(async (res,rej) => {
            try{
                const newProduct = await updateProduct(id,product);
                res(newProduct);
            }catch(error){
                rej(error);
            }
        })
    )
}


