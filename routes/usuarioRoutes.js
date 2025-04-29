// ---------------------------este archivo es el encargado de definir las rutas de la aplicacion, en este caso las rutas de usuario------------------------------------------


import express from "express"
import {  inicio,layout, recuperar,carrito,registro,registrar,productos } from '../controllers/usuarioController.js';



//  ----------------------------------------------------------------- rutas de la aplicacion-------------------------------------------------------------------
const router = express.Router(); // instanciamos express.Router() para crear las rutas,este es un objeto que nos permite definir rutas y middlewares para nuestra aplicacion


router.get('/inicio',inicio); // adm f4
router.get('/layout',layout); // ok f2 esta es la principal 
router.get('/recuperar',recuperar); // ok f3
router.get('/carrito',carrito); // ok f2

// --------------------------------------------------------------------registro usuario ---------------------------------------------------
router.get('/registro',registro); // ok f2
router.post('/registro',registrar);

//---------------------------------------------------agregar producto--------------------------------------------------
router.get('/productos',productos )

export default router;