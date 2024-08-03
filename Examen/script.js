document.addEventListener('DOMContentLoaded', function() {
    const formReceta = document.getElementById('form-receta');
    const listaRecetas = document.getElementById('lista-recetas');

    formReceta.addEventListener('submit', function(event) {
        event.preventDefault();
       
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
       
        if (nombre.trim() === '' || descripcion.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }
       
        const nuevaReceta = document.createElement('li');
        nuevaReceta.innerHTML = `<strong>${nombre}:</strong> ${descripcion}`;
       
        listaRecetas.appendChild(nuevaReceta);
       
        formReceta.reset();
    });
});