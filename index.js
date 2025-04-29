
//---------------------------archivo principal del proyecto, aqui se inicializa el servidor y se configuran las rutas y la base de datos--------------------------------


import express from "express"; // importamos express
import usuarioRoutes from "./routes/usuarioRoutes.js";// importamos las rutas de usuario
import db from "./config/db.js"; // importamos la base de datos

//-------------------------------------------------crear la app---------------------------------------------------------------------------


const app = express();// instanciamos express para crear la app


//--------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------conexion a la base de datos--------------------------------------------------------------------------------------------

app.use(express.urlencoded({extended:true})); // esta linea es para poder recibir los datos del formulario


//------------------------------------------------------------------------------

//---------------------------------------------configuracion de la base de datos--------------------------------------------------------------------------------------------
try {
    await db.authenticate(); // autenticamos la base de datos
    console.log('Base de datos conectada') // verificamos la conexion
    db.sync() // sincroniza los modelos con la base de datos, crea las tablas si no existen
}
catch (error) {
    console.log('Error al conectar a la base de datos',error) // si hay un error lo mostramos en consola
}

//--------------------------------------------------------------------------------------------------------------------------------------
// // habilitar pug    esto era para usar pug como motor de plantillas, pero no lo estamos usando por ahora
// app.set('view engine','pug');
// app.set('views','./views');



//------------------------------------------------------------------- Carpeta publica--------------------------------------------------------------

app.use(express.static('public'));// habilitamos la carpeta public para que se puedan servir archivos estaticos como css, js, imagenes, etc.


//--------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------routing--------------------------------------------------------------------------
app.use('/',usuarioRoutes);

//----------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------Definir un puerto y arrancar el proyecto-------------------------------------------------------
const port = 3000;

app.listen(port,()=>{ 
    console.log(`el servidor esta funcionando en el puerto ${port}`) // mostramos en consola el puerto en el que esta funcionando el servidor
});
//-----------------------------------------------------------------------------------------------------------------------------------------------