document.addEventListener('DOMContentLoaded', function () {

    // Función para obtener el recordatorio correspondiente al dia ingresado
    function obtenerRecordatorio(dia) {
        dia = dia.toLowerCase().trim(); // Convertir a minúsculas y quitar espacios

        const recordatorios = {
            'lunes': "Debes antender un cliente!",
            'martes': "Tienes una visita a la agencia fuera de la ciudad!",
            'miércoles': "Debes llevar a tu retoño al ballet!",
            'miercoles': "Debes llevar a tu retoño al ballet!",
            'jueves': "Debes priorizar entregas de desarrollo!",
            'viernes': "Debes atender problemas de manera remota!",
            'sábado': "Hoy harás lo que tu señora ordene",
            'sabado': "Hoy harás lo que tu señora ordene",
            'domingo': "Toca descansar!"
        };

        return recordatorios[dia] || "Día no válido";
    }

    // Función para manejar el evento del botón
    function mostrarRecordatorio() {
        const diaIngresado = document.getElementById('diaInput').value;
        const resultadoDiv = document.getElementById('recordatorio');

        const mensaje = obtenerRecordatorio(diaIngresado);
        resultadoDiv.textContent = mensaje;
    }

    document.getElementById('button').addEventListener('click', mostrarRecordatorio);

    document.getElementById('diaInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') { // Verificar si se presiono la tecla Enter
            mostrarRecordatorio();
        }
    });


});

