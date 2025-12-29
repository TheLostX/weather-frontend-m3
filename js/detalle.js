
// detalle del pronostico de cada ciudad.

var ciudades = [
  {
    id: '1', nombre: 'Santiago', pais: 'Chile', clima: 'Soleado', temp: 23, humedad: 30, viento: 12, icono: '☀️',
    pronostico: [
      { dia: 'Lunes', icono: '⛅', max: 25, min: 12 },
      { dia: 'Martes', icono: '☀️', max: 26, min: 13 },
      { dia: 'Miércoles', icono: '☁️', max: 22, min: 11 },
      { dia: 'Jueves', icono: '🌧️', max: 20, min: 10 },
      { dia: 'Viernes', icono: '☀️', max: 27, min: 14 },
      { dia: 'Sábado', icono: '⛅', max: 24, min: 13 },
      { dia: 'Domingo', icono: '🌧️', max: 21, min: 9 }
    ]
  },
  {
    id: '2', nombre: 'Valparaíso', pais: 'Chile', clima: 'Nublado', temp: 18, humedad: 70, viento: 20, icono: '☁️',
    pronostico: [
      { dia: 'Lunes', icono: '☁️', max: 18, min: 12 },
      { dia: 'Martes', icono: '⛅', max: 19, min: 13 },
      { dia: 'Miércoles', icono: '🌫️', max: 18, min: 12 },
      { dia: 'Jueves', icono: '🌧️', max: 17, min: 11 },
      { dia: 'Viernes', icono: '☀️', max: 20, min: 14 },
      { dia: 'Sábado', icono: '⛅', max: 19, min: 13 },
      { dia: 'Domingo', icono: '🌧️', max: 16, min: 10 }
    ]
  },
  {
    id: '3', nombre: 'Concepción', pais: 'Chile', clima: 'Lluvia ligera', temp: 16, humedad: 82, viento: 10, icono: '🌧️',
    pronostico: [
      { dia: 'Lunes', icono: '🌧️', max: 17, min: 11 },
      { dia: 'Martes', icono: '🌧️', max: 16, min: 10 },
      { dia: 'Miércoles', icono: '☁️', max: 18, min: 12 },
      { dia: 'Jueves', icono: '🌧️', max: 16, min: 9 },
      { dia: 'Viernes', icono: '⛅', max: 19, min: 12 },
      { dia: 'Sábado', icono: '🌧️', max: 15, min: 9 },
      { dia: 'Domingo', icono: '🌧️', max: 14, min: 8 }
    ]
  },
  {
    id: '4', nombre: 'La Serena', pais: 'Chile', clima: 'Parcialmente nublado', temp: 20, humedad: 55, viento: 8, icono: '⛅',
    pronostico: [
      { dia: 'Lunes', icono: '☀️', max: 21, min: 12 },
      { dia: 'Martes', icono: '☀️', max: 22, min: 13 },
      { dia: 'Miércoles', icono: '⛅', max: 23, min: 14 },
      { dia: 'Jueves', icono: '⛅', max: 22, min: 13 },
      { dia: 'Viernes', icono: '☀️', max: 24, min: 15 },
      { dia: 'Sábado', icono: '☀️', max: 23, min: 14 },
      { dia: 'Domingo', icono: '⛅', max: 22, min: 13 }
    ]
  },
  {
    id: '5', nombre: 'Antofagasta', pais: 'Chile', clima: 'Bruma', temp: 19, humedad: 60, viento: 15, icono: '🌫️',
    pronostico: [
      { dia: 'Lunes', icono: '🌫️', max: 20, min: 15 },
      { dia: 'Martes', icono: '☀️', max: 21, min: 16 },
      { dia: 'Miércoles', icono: '🌫️', max: 20, min: 15 },
      { dia: 'Jueves', icono: '☀️', max: 22, min: 16 },
      { dia: 'Viernes', icono: '☀️', max: 23, min: 17 },
      { dia: 'Sábado', icono: '🌫️', max: 21, min: 16 },
      { dia: 'Domingo', icono: '☀️', max: 22, min: 16 }
    ]
  },
  {
    id: '6', nombre: 'Punta Arenas', pais: 'Chile', clima: 'Frío', temp: 6, humedad: 65, viento: 30, icono: '🧊',
    pronostico: [
      { dia: 'Lunes', icono: '🧊', max: 8, min: 2 },
      { dia: 'Martes', icono: '🧊', max: 7, min: 1 },
      { dia: 'Miércoles', icono: '🌬️', max: 6, min: 0 },
      { dia: 'Jueves', icono: '🌬️', max: 5, min: -1 },
      { dia: 'Viernes', icono: '☁️', max: 6, min: 0 },
      { dia: 'Sábado', icono: '🧊', max: 4, min: -2 },
      { dia: 'Domingo', icono: '🧊', max: 3, min: -3 }
    ]
  },
  {
    id: '7', nombre: 'Temuco', pais: 'Chile', clima: 'Lluvia', temp: 14, humedad: 88, viento: 9, icono: '🌧️',
    pronostico: [
      { dia: 'Lunes', icono: '🌧️', max: 15, min: 9 },
      { dia: 'Martes', icono: '🌧️', max: 14, min: 8 },
      { dia: 'Miércoles', icono: '☁️', max: 16, min: 9 },
      { dia: 'Jueves', icono: '🌧️', max: 13, min: 7 },
      { dia: 'Viernes', icono: '⛅', max: 17, min: 10 },
      { dia: 'Sábado', icono: '🌧️', max: 14, min: 8 },
      { dia: 'Domingo', icono: '🌧️', max: 13, min: 7 }
    ]
  },
  {
    id: '8', nombre: 'Iquique', pais: 'Chile', clima: 'Soleado', temp: 24, humedad: 40, viento: 18, icono: '☀️',
    pronostico: [
      { dia: 'Lunes', icono: '☀️', max: 25, min: 18 },
      { dia: 'Martes', icono: '☀️', max: 26, min: 19 },
      { dia: 'Miércoles', icono: '☀️', max: 27, min: 19 },
      { dia: 'Jueves', icono: '⛅', max: 26, min: 18 },
      { dia: 'Viernes', icono: '☀️', max: 28, min: 20 },
      { dia: 'Sábado', icono: '☀️', max: 27, min: 20 },
      { dia: 'Domingo', icono: '⛅', max: 26, min: 19 }
    ]
  },
  {
    id: '9', nombre: 'Rancagua', pais: 'Chile', clima: 'Parcialmente nublado', temp: 21, humedad: 50, viento: 11, icono: '⛅',
    pronostico: [
      { dia: 'Lunes', icono: '⛅', max: 22, min: 12 },
      { dia: 'Martes', icono: '☀️', max: 23, min: 13 },
      { dia: 'Miércoles', icono: '⛅', max: 22, min: 12 },
      { dia: 'Jueves', icono: '☁️', max: 21, min: 11 },
      { dia: 'Viernes', icono: '☀️', max: 24, min: 14 },
      { dia: 'Sábado', icono: '⛅', max: 23, min: 13 },
      { dia: 'Domingo', icono: '🌧️', max: 20, min: 10 }
    ]
  },
  {
    id: '10', nombre: 'Puerto Montt', pais: 'Chile', clima: 'Lluvia', temp: 12, humedad: 90, viento: 14, icono: '🌧️',
    pronostico: [
      { dia: 'Lunes', icono: '🌧️', max: 13, min: 8 },
      { dia: 'Martes', icono: '🌧️', max: 12, min: 7 },
      { dia: 'Miércoles', icono: '🌧️', max: 14, min: 9 },
      { dia: 'Jueves', icono: '🌧️', max: 13, min: 8 },
      { dia: 'Viernes', icono: '☁️', max: 15, min: 9 },
      { dia: 'Sábado', icono: '🌧️', max: 12, min: 7 },
      { dia: 'Domingo', icono: '🌧️', max: 11, min: 6 }
    ]
  }
];


function obtenerIdDeUrl() {
  var params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Función que muestra detalle y pronóstico
function mostrarDetalle(ciudad) {
  var container = document.getElementById('detalleLocalidad');
  if (!container) {
    console.error('Elemento #detalleLocalidad no encontrado en el DOM.');
    return;
  }

  // Contenido principal (izquierda) y pronóstico (derecha)
  container.innerHTML = `
    <article class="row g-4">
      <div class="col-12 col-md-5">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">${ciudad.nombre}, <small class="text-muted">${ciudad.pais}</small></h2>
            <p class="lead"><span class="display-6">${ciudad.icono}</span> <strong class="h3 ms-2">${ciudad.temp}°C</strong></p>
            <ul class="list-group list-group-flush mb-3">
              <li class="list-group-item">Condición: ${ciudad.clima}</li>
              <li class="list-group-item">Humedad: ${ciudad.humedad}%</li>
              <li class="list-group-item">Viento: ${ciudad.viento} km/h</li>
            </ul>
            <div>
              <a class="btn btn-outline-primary" href="index.html">Volver</a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-7">
        <h3>Pronóstico semanal — ${ciudad.nombre}</h3>
        <div id="pronosticoSemana" class="row mt-2">
          <!-- cards de pronóstico se insertarán aquí -->
        </div>
      </div>
    </article>
  `;

  var containerPronostico = document.getElementById('pronosticoSemana');
  containerPronostico.innerHTML = ''; //limpiar

  // crear cards para cada día del pronóstico
  ciudad.pronostico.forEach(d => {
    var col = document.createElement('div');
    col.className = 'col-6 col-sm-4 col-md-3';
    col.innerHTML = `
      <div class="card mb-2 h-100">
        <div class="card-body text-center">
          <div class="h6">${d.dia}</div>
          <div class="display-6">${d.icono}</div>
          <div class="small text-muted">${d.clima ? d.clima : ''}</div>
          <div class="mt-2">${d.max}° / ${d.min}°</div>
        </div>
      </div>
    `;
    containerPronostico.appendChild(col);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  var id = obtenerIdDeUrl();
  if (!id) {
    var container = document.getElementById('detalleLocalidad');
    if (container) {
      container.innerHTML = `<div class="alert alert-warning">No se especificó una localidad. Vuelve al <a href="index.html">inicio</a> y selecciona una.</div>`;
    }
    return;
  }

  var ciudad = ciudades.find(c => String(c.id) === String(id));
  if (!ciudad) {
    var container = document.getElementById('detalleLocalidad');
    if (container) {
      container.innerHTML = `<div class="alert alert-danger">Localidad con id=${id} no encontrada. Vuelve al <a href="index.html">inicio</a>.</div>`;
    }
    return;
  }

  // Mostrar la ciudad encontrada
  mostrarDetalle(ciudad);
});
