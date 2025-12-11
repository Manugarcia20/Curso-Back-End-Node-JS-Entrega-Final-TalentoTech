import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.Routes.js';
import rutasLog from "./src/routes/auth.routes.js";
import { authentication } from './src/middlewares/authentication.js';


const app = express();
const PORT = 3000;

const corsConfig = {
    origin: ['http://localhost:3000/', 'https://midominio.com/'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}


app.use(cors(corsConfig));
app.use(express.json()); 

app.use("/api",rutasLog);
app.use(authentication);


app.use("/api",productsRouter);



app.use((req,res,next) => {
    res.status(404).send('Recurso no encontrado o ruta invalida');
})

 app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
 });