// -----------------------este archivo es el encargado de definir las rutas de la aplicacion, en este caso las rutas de usuario ------------------------------------------

//------------------------------validación de datos--------------------------------------------------
import {check, validationResult} from 'express-validator'; // importamos express-validator para validar los datos del formulario




//---------------------------------------------------------------------------------------


import path from 'path'; // importamos path para poder usar la funcion join y obtener la ruta absoluta de los archivos
import { fileURLToPath } from 'url';// importamos fileURLToPath para obtener la ruta absoluta del archivo actual
import Usuario from '../models/Usuario.js'

// usar dirname para obtener la ruta absoluta de la carpeta actual

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// const formularioLogin = (req, res) => {
//     res.render('auth/login', {

//     });
// }

// const formularioRegistro = (req, res) => {
//     res.render('auth/registro', {
//     });
// }

const inicio = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/auth/inicio.html"))
}

const layout = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/layout/index.html"))
}
const recuperar = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/Recuperar.html"))
}
const carrito = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/indexCar.html"))
}
const productos = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/layout/pag.html"))
}

//----------------------------------------------------------------------registrarse----------------------------------------------------

const registro = (req, res) => {
    res.sendFile(path.join(__dirname, "../views/registro.html"))
}



const registrar = async (req, res) => {
    // validamos los datos del formulario
    await check('nombres').notEmpty().withMessage('nombres, no puede estar vacio ').run(req)// validamos que el campo nombres no este vacio
    await check('apellidos').notEmpty().withMessage(' apellidos, no puede estar vacio').run(req) 
    await check('cedula').notEmpty().withMessage('ingrese una cedula valida').run(req)
    await check('nacimiento').notEmpty().withMessage('ingrese su fecha de nacimiento').run(req)
    await check('correo').isEmail().withMessage('ingrese un email valido').run(req)
    await check('password').isLength({min: 6}).withMessage('debe etener minimo 6 caracteres').run(req)

    let resultado = validationResult(req); // obtenemos el resultado de la validacion

//                                             verificar que el resultado no este vacio  
if(!resultado.isEmpty()){ 
    //errores 
    return res.sendFile(path.join(__dirname, "../views/registro.html"),{
        pagina: 'crear cuenta',
        errores: resultado.array(), // mostramos los errores en el formulario
    }) // si hay errores, mostramos el formulario de registro con los errores

}



    const usuario =  await Usuario.create(req.body); // creamos el usuario en la base de datos con los datos del formulario
    console.log(usuario);
}


export {

    inicio,
    layout,
    recuperar,
    carrito,
    registro,
    registrar, 
    productos
}