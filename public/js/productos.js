document.querySelector('.agregar').addEventListener('click', function () {
    const table = document.querySelector('tbody');

    // Obtener valores de inputs
    const inputs = table.querySelectorAll('tr')[0].querySelectorAll('input');
    const titulo = inputs[0].value.trim();
    const descripcion = inputs[1].value.trim();
    const imagenInput = inputs[2];

    if (!titulo || !descripcion || !imagenInput.files[0]) {
      alert('Por favor completa todos los campos e incluye una imagen.');
      return;
    }

    // Crear URL temporal para la imagen cargada
    const imagenURL = URL.createObjectURL(imagenInput.files[0]);

    // Crear nueva fila
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
      <td>${titulo}</td>
      <td>${descripcion}</td>
      <td><img src="${imagenURL}" alt="${titulo}" width="60" /></td>
      <td class="opcion">
        <a class="opc" href="">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icon-tabler-pencil-code">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
              <path d="M13.5 6.5l4 4" />
              <path d="M20 21l2 -2l-2 -2" />
              <path d="M17 17l-2 2l2 2" />
            </svg>
          </div>
        </a>
        <a class="opc" href="">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icon-tabler-square-letter-x">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M10 8l4 8" />
              <path d="M10 16l4 -8" />
            </svg>
          </div>
        </a>
      </td>
    `;

    // Insertar nueva fila debajo de los existentes
    table.appendChild(nuevaFila);

    // Limpiar los campos de entrada
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
  });