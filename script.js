let respuestasMezcladas = [];
let preguntas = [];
let preguntasVistas = []; 
let respuestaSeleccionada = null;
let preguntasAcertadas = 0; 
let preguntasErradas = 0; 

function cargarPreguntas() {
    fetch('Preguntas.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            preguntas = data;
            cargarNuevaPregunta();
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

function actualizarContador() {
    const totalPreguntas = preguntas.length;
    const vistas = preguntasVistas.length;
    const noVistas = totalPreguntas - vistas;
    document.getElementById('contador').textContent = `${vistas}/${totalPreguntas}`;
}

function cargarNuevaPregunta() {
   
    if (preguntasVistas.length >= 60) {
        mostrarResultadosFinales();
        return;
    }

    let pregunta;
    if (preguntas.length === preguntasVistas.length) {
        console.log('Todas las preguntas han sido vistas.');
        return; 
    }

    do {
        pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
    } while (preguntasVistas.includes(pregunta));

    preguntasVistas.push(pregunta);

    document.getElementById('continuar').style.display = 'none';

    for (let i = 0; i < 4; i++) {
        const boton = document.getElementById(`boton${i + 1}`);
        boton.style.backgroundColor = '';
        boton.onclick = () => seleccionarRespuesta(i); 
        boton.style.pointerEvents = 'auto'; 
    }

    document.getElementById('categoria').textContent = pregunta.categoria;
    document.getElementById('pregunta').textContent = pregunta.pregunta;
    if (pregunta.imagen) {
        document.getElementById('imagen').src = pregunta.imagen;
    } else {
        document.getElementById('imagen').src = 'fotos_Preguntas/imagenxdefecto.jpg';
    }

    respuestasMezcladas = [
        { texto: pregunta.respuesta, correcta: true },
        { texto: pregunta.incorrecta1, correcta: false },
        { texto: pregunta.incorrecta2, correcta: false },
        { texto: pregunta.incorrecta3, correcta: false }
    ];
    respuestasMezcladas.sort(() => Math.random() - 0.5);

    document.getElementById('boton1').textContent = respuestasMezcladas[0].texto;
    document.getElementById('boton2').textContent = respuestasMezcladas[1].texto;
    document.getElementById('boton3').textContent = respuestasMezcladas[2].texto;
    document.getElementById('boton4').textContent = respuestasMezcladas[3].texto;

    respuestaSeleccionada = null;
 
    actualizarContador();
}

function seleccionarRespuesta(indice) {
    if (respuestaSeleccionada !== null) {
        return; 
    }

    respuestaSeleccionada = indice;

    const boton = document.getElementById(`boton${indice + 1}`);
    if (respuestasMezcladas[indice].correcta) {
        boton.style.backgroundColor = 'green'; 
        preguntasAcertadas++;
    } else {
        boton.style.backgroundColor = 'red'; 
        preguntasErradas++;

        for (let i = 0; i < 4; i++) {
            if (respuestasMezcladas[i].correcta) {
                document.getElementById(`boton${i + 1}`).style.backgroundColor = 'green'; 
                break;
            }
        }
    }

    for (let i = 0; i < 4; i++) {
        if (i !== indice) {
            document.getElementById(`boton${i + 1}`).style.pointerEvents = 'none'; 
        }
    }

    document.getElementById('continuar').style.display = 'block';
}

function mostrarResultadosFinales() {
    document.getElementById('contenido').style.display = 'none';
    document.getElementById('finalizado').style.display = 'block';
    document.getElementById('boton-ver-resultados').style.display = 'block';

}

function verResultado() {
    document.getElementById('finalizado').style.display = 'none';
    document.getElementById('resultados').style.display = 'block';
    document.getElementById('resultado-correctas').textContent = `Respuestas Correctas: ${preguntasAcertadas}`;
    document.getElementById('resultado-incorrectas').textContent = `Respuestas Incorrectas: ${preguntasErradas}`;
    document.getElementById('boton-volver-inicio').style.display = 'block'; 
}


function volverAlInicio() {
    location.href = 'index.html';
}


cargarPreguntas();
