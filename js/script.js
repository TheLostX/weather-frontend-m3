// Datos (ciudades, clima actual y pronóstico)
var ciudades = [
  { id: 1, nombre: 'Santiago', pais: 'Chile', clima: 'Soleado', temp: 23, humedad: 30, viento: 12, icono: '☀️' },
  { id: 2, nombre: 'Valparaíso', pais: 'Chile', clima: 'Nublado', temp: 18, humedad: 70, viento: 20, icono: '☁️' },
  { id: 3, nombre: 'Concepción', pais: 'Chile', clima: 'Lluvia ligera', temp: 16, humedad: 82, viento: 10, icono: '🌧️' },
  { id: 4, nombre: 'La Serena', pais: 'Chile', clima: 'Parcialmente nublado', temp: 20, humedad: 55, viento: 8, icono: '⛅' },
  { id: 5, nombre: 'Antofagasta', pais: 'Chile', clima: 'Bruma', temp: 19, humedad: 60, viento: 15, icono: '🌫️' },
  { id: 6, nombre: 'Punta Arenas', pais: 'Chile', clima: 'Frío', temp: 6, humedad: 65, viento: 30, icono: '🧊' },
  { id: 7, nombre: 'Temuco', pais: 'Chile', clima: 'Lluvia', temp: 14, humedad: 88, viento: 9, icono: '🌧️' },
  { id: 8, nombre: 'Iquique', pais: 'Chile', clima: 'Soleado', temp: 24, humedad: 40, viento: 18, icono: '☀️' },
  { id: 9, nombre: 'Rancagua', pais: 'Chile', clima: 'Parcialmente nublado', temp: 21, humedad: 50, viento: 11, icono: '⛅' },
  { id: 10, nombre: 'Puerto Montt', pais: 'Chile', clima: 'Lluvia', temp: 12, humedad: 90, viento: 14, icono: '🌧️' }
];

function crearTarjeta(ciudad) {
  var col = document.createElement('div');
  col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

  var card = document.createElement('article');
  card.className = 'card h-100';
  card.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h5 class="card-title">${ciudad.nombre}, <small class="text-muted">${ciudad.pais}</small></h5>
        <p class="card-text mb-1"><span class="card-clima-icon">${ciudad.icono}</span> <span class="ms-2">${ciudad.clima}</span></p>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-3">
        <div class="card-temperatura">${ciudad.temp}°C</div>
        <button class="btn btn-primary btn-sm ver-detalle" data-id="${ciudad.id}">Ver detalle</button>
      </div>
    </div>
  `;
  col.appendChild(card);
  return col;
}

function renderizarLocalidades() {
  var contenedor = document.getElementById('localidades');
  contenedor.innerHTML = '';
  ciudades.forEach(c => contenedor.appendChild(crearTarjeta(c)));

  // listeners para botones
  document.querySelectorAll('.ver-detalle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      var id = e.currentTarget.getAttribute('data-id');
      // navegar a detalle con query param
      window.location.href = `detalle.html?id=${id}`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarLocalidades();
});
