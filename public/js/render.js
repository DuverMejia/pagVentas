// public/js/render.js

// en esta parte se hace todo el controlador front y el render para las vistas




function cargarLogin() {
    let contenedor = document.getElementById('contenido');
     contenedor.innerHTML =`<section class="elemento">
     <h2>Iniciar sección</h2>
     <form action="">
         <input type="email" placeholder="correo" name="correo"><br>
         <input type="text" placeholder="contraseña" name="contraseña"><br>
         <input type="submit" value="ingresar" class="btn"><br>
     </form>
     <a href="/recuperar" class="link recordar" onclick="cargarRecordar()">Recordar contraseña</a>
 </section> <br>
`;
 document.title = "Bienes raices - login";
}

function cargarRegistro() {
    let contenedor = document.getElementById('contenido');
    contenedor.innerHTML =`<section class="elemento">
     <h2>Registro</h2>
     <form action="">
         <input type="text" placeholder="Usuario" name="usuario"><br>
         <input type="email" placeholder="correo" name="correo"><br>
         <input type="password" placeholder="contraseña" name="contraseña"><br>
         <input type="password" placeholder="confirmar contraseña" name="contraseña"><br>
         <input type="submit" value="registrarse" class="btn"><br>
     </form>
     <a href="/recuperar" class="link recordar" onclick="cargarRecordar()">Recordar contraseña</a>
 </section>
  </section> <br>
`;
 document.title = "Bienes raices - Registro";
}

