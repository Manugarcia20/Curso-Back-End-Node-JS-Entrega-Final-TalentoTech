import fs, { read } from 'fs'
import path from "path"
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
// console.log("__fileName: ", __fileName);
const __dirname = path.dirname(__fileName);
const filePath = path.join(__dirname,"db.json");

async function readDB(){
    try{
        const data = fs.readFileSync(filePath, "utf-8");
        const products = await JSON.parse(data);
        return products;
    }catch(error){
        console.log(error);
    }
}

// readDB();

export async function getProducts(){
    const products = await readDB();
    return products;
}

