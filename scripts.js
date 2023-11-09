// Obtén una referencia al elemento de encabezado por su ID
    const header = document.getElementById('cabecera');

    // Agrega un event listener para cambiar el color de fondo al hacer clic en el encabezado
    header.addEventListener('click', function() {
        // Genera un color hexadecimal aleatorio
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Cambia el color de fondo del encabezado al color generado aleatoriamente
        header.style.backgroundColor = randomColor;
    });

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
    
            if (nombre === '' || email === '' || mensaje === '') {
                alert('Por favor, complete todos los campos.');
            } else {
                // Aquí podrías hacer una llamada AJAX para enviar los datos al servidor
                alert('¡Formulario enviado con éxito!');
            }
        });
    });
