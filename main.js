
let ultimoDatoAnterior = null; 
setInterval(recibirDatos, 2000);

async function recibirDatos() {
    try {
        // Opciones de la solicitud
        const opciones = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const url = 'https://660c52433a0766e85dbdebe2.mockapi.io/examen';
        // Recibir los datos de la URL proporcionada
        const response = await fetch(url, opciones);

        if (!response.ok) {
            throw new Error('Error en la solicitud GET a la URL');
        }

        const data = await response.json();
        console.log('Datos recibidos:', data);
        // Arreglo
        datosRecibidos = data;
        // Último dígito del arreglo
        const ultimoDato = datosRecibidos.pop();
        console.log('Último dato:', ultimoDato);

        // Verifica si el último dato ha cambiado
        if (!esIgual(ultimoDato, ultimoDatoAnterior)) {
            // Sustitución en los párrafos
      
            let variable = ultimoDato.orden;
           
            manejarAccion(ultimoDato.orden);
            ultimoDatoAnterior = ultimoDato;
        }

        
        

    } catch (error) {
        console.error('Error:', error);
    }
}

function esIgual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
}

function manejarAccion(ultimoDato) {
    //switch (ultimoDato.instruccion.toLowerCase()) {
    switch (ultimoDato) {
        case 'enciende la luz de la recámara':
            document.getElementById('focoRecamara').src = 'imágenes/focoRecamaraOn.png';
            break;
        case 'apaga la luz de la recámara':
            document.getElementById('focoRecamara').src = 'imágenes/focoRecamaraOff.png';
            break;
        case 'enciende la luz de la sala':
            document.getElementById('focoSala').src = 'imágenes/focoSalaOn.png';
            break;
        case 'apaga la luz de la sala':
            document.getElementById('focoSala').src = 'imágenes/focoSalaOff.png';
            break;
        case 'enciende las luces del jardín':
            var elementos = document.getElementsByClassName('focoJardin');
            for (var i = 0; i < elementos.length; i++) {
                elementos[i].src = 'imágenes/focoJardinOn.png';
            }
            break;
        case 'apaga las luces del jardín':
            var elementos = document.getElementsByClassName('focoJardin');
            for (var i = 0; i < elementos.length; i++) {
                elementos[i].src = 'imágenes/focoJardinOff.png';
            }
            break;
        case 'enciende el ventilador':
            var imagen = document.getElementById('ventilador');
            imagen.src = 'imágenes/ventiladorEncendido.gif';

            break;
        case 'apaga el ventilador':
            var imagen = document.getElementById('ventilador');
            imagen.src = 'imágenes/ventiladorApagado.png';
            break;
        case 'abre las cortinas':
            cambiarImagenCortinas();
            break;
        case 'cierra las cortinas':
            cierraImagenCortinas();
            break;
        case 'enciende las cámaras de seguridad':
            var elementos = document.getElementsByClassName('camaras');
            for (var i = 0; i < elementos.length; i++) {
                elementos[i].src = 'imágenes/camaraOn.png';
            }
            break;
        case 'apaga las cámaras de seguridad':
            var elementos = document.getElementsByClassName('camaras');
            for (var i = 0; i < elementos.length; i++) {
                elementos[i].src = 'imágenes/camaraOff.png';
            }
            break;
        case 'enciende la alarma':
            document.getElementById('alarma').src = 'imágenes/alarmaEncendida.png';
            document.getElementById('sonidoEncendido').play(); // Reproduce el sonido de encendido
            break;
        case 'apaga la alarma':
            document.getElementById('alarma').src = 'imágenes/alarmaApagada.png';
            document.getElementById('sonidoApagado').play(); // Reproduce el sonido de apagado
            break;
        default:
            // Instrucción no reconocida
            console.log('Instrucción no reconocida');
    }
}

var cortinasAbiertas = false;

function cambiarImagenCortinas() {
    // Obtener todas las imágenes de cortinas
    var elementos = document.getElementsByClassName('cortinas');

    // Iterar sobre cada imagen de cortinas
    for (var i = 0; i < elementos.length; i++) {
        // Utilizamos una función de cierre para mantener el contexto de la variable cortina
        (function (cortina) {
            // Verificar si la imagen actual ya ha mostrado el gif de abrirCortinas.gif
            if (!cortinasAbiertas) {
                // Mostrar abrirCortinas.gif si aún no se ha mostrado
                cortina.src = 'imágenes/abrirCortinas.gif';

                // Cambiar a la imagen cortinasAbiertas.png después de 1 segundo
                setTimeout(function () {
                    cortina.src = 'imágenes/cortinasAbiertas.png';
                }, 1015); // 1000 milisegundos = 1 segundo
            }
        })(elementos[i]); // Pasamos la imagen actual como argumento a la función de cierre
    }
}



var cortinasCerradas = false;

function cierraImagenCortinas() {
    // Obtener todas las imágenes de cortinas
    var elementos = document.getElementsByClassName('cortinas');

    // Iterar sobre cada imagen de cortinas
    for (var i = 0; i < elementos.length; i++) {
        // Utilizamos una función de cierre para mantener el contexto de la variable cortina
        (function (cortina) {
            // Verificar si la imagen actual ya ha mostrado el gif de abrirCortinas.gif
            if (!cortinasCerradas) {
                // Mostrar abrirCortinas.gif si aún no se ha mostrado
                cortina.src = 'imágenes/cerrarCortinas.gif';

                // Cambiar a la imagen cortinasAbiertas.png después de 1 segundo
                setTimeout(function () {
                    cortina.src = 'imágenes/cortinasCerradas.png';
                }, 1015); // 1000 milisegundos = 1 segundo
            }
        })(elementos[i]); // Pasamos la imagen actual como argumento a la función de cierre
    }
}


