
//----------------------------------------------------------------------



//    ██╗░░░██╗███████╗██████╗░░██████╗██╗░█████╗░███╗░░██╗  ░░███╗░░
//    ██║░░░██║██╔════╝██╔══██╗██╔════╝██║██╔══██╗████╗░██║  ░████║░░
//    ╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░██║██║░░██║██╔██╗██║  ██╔██║░░
//    ░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗██║██║░░██║██║╚████║  ╚═╝██║░░
//    ░░╚██╔╝░░███████╗██║░░██║██████╔╝██║╚█████╔╝██║░╚███║  ███████╗
//    ░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝  ╚══════╝



//----------------------------------------------------------------------



// let preguntas_aleatorias = true;
// let mostrar_pantalla_juego_términado = true;
// let reiniciar_puntos_al_reiniciar_el_juego = true;

// window.onload = function () {
//   base_preguntas = readText("Preguntas.json");
//   interprete_bp = JSON.parse(Preguntas);
//   escogerPreguntaAleatoria();
// };

// let pregunta;
// let posibles_respuestas;
// btn_correspondiente = [
//   select_id("boton1"),
//   select_id("boton2"),
//   select_id("boton3"),
//   select_id("boton4")
// ];
// let npreguntas = [];

// let preguntas_hechas = 0;
// let preguntas_correctas = 0;

// function escogerPreguntaAleatoria() {
//   let n;
//   if (preguntas_aleatorias) {
//     n = Math.floor(Math.random() * interprete_bp.length);
//   } else {
//     n = 0;
//   }

//   while (npreguntas.includes(n)) {
//     n++;
//     if (n >= interprete_bp.length) {
//       n = 0;
//     }
//     if (npreguntas.length == interprete_bp.length) {
//       //Aquí es donde el juego se reinicia
//       if (mostrar_pantalla_juego_términado) {
//         swal.fire({
//           title: "Juego finalizado",
//           text:
//             "Puntuación: " + preguntas_correctas + "/" + (preguntas_hechas - 1),
//           icon: "success"
//         });
//       }
//       if (reiniciar_puntos_al_reiniciar_el_juego) {
//         preguntas_correctas = 0
//         preguntas_hechas = 0
//       }
//       npreguntas = [];
//     }
//   }
//   npreguntas.push(n);
//   preguntas_hechas++;

//   escogerPregunta(n);
// }

// function escogerPregunta(n) {
//   pregunta = interprete_bp[n];
//   select_id("categoria").innerHTML = pregunta.categoria;
//   select_id("pregunta").innerHTML = pregunta.pregunta;
//   select_id("numero").innerHTML = n;
//   let pc = preguntas_correctas;
//   if (preguntas_hechas > 1) {
//     select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
//   } else {
//     select_id("puntaje").innerHTML = "";
//   }

//   style("imagen").objectFit = pregunta.objectFit;
//   desordenarRespuestas(pregunta);
//   if (pregunta.imagen) {
//     select_id("imagen").setAttribute("src", pregunta.imagen);
//     style("imagen").height = "200px";
//     style("imagen").width = "100%";
//   } else {
//     style("imagen").height = "0px";
//     style("imagen").width = "0px";
//     setTimeout(() => {
//       select_id("imagen").setAttribute("src", "");
//     }, 500);
//   }
// }

// function desordenarRespuestas(pregunta) {
//   posibles_respuestas = [
//     pregunta.respuesta,
//     pregunta.incorrecta1,
//     pregunta.incorrecta2,
//     pregunta.incorrecta3,
//   ];
//   posibles_respuestas.sort(() => Math.random() - 0.5);

//   select_id("btn1").innerHTML = posibles_respuestas[0];
//   select_id("btn2").innerHTML = posibles_respuestas[1];
//   select_id("btn3").innerHTML = posibles_respuestas[2];
//   select_id("btn4").innerHTML = posibles_respuestas[3];
// }

// let suspender_botones = false;

// function oprimir_btn(i) {
//   if (suspender_botones) {
//     return;
//   }
//   suspender_botones = true;
//   if (posibles_respuestas[i] == pregunta.respuesta) {
//     preguntas_correctas++;
//     btn_correspondiente[i].style.background = "lightgreen";
//   } else {
//     btn_correspondiente[i].style.background = "pink";
//   }
//   for (let j = 0; j < 4; j++) {
//     if (posibles_respuestas[j] == pregunta.respuesta) {
//       btn_correspondiente[j].style.background = "lightgreen";
//       break;
//     }
//   }
//   setTimeout(() => {
//     reiniciar();
//     suspender_botones = false;
//   }, 3000);
// }

// // let p = prompt("numero")

// function reiniciar() {
//   for (const btn of btn_correspondiente) {
//     btn.style.background = "white";
//   }
//   escogerPreguntaAleatoria();
// }

// function select_id(id) {
//   return document.getElementById(id);
// }

// function style(id) {
//   return select_id(id).style;
// }

// function readText(ruta_local) {
//   var texto = null;
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.open("GET", ruta_local, false);
//   xmlhttp.send();
//   if (xmlhttp.status == 200) {
//     texto = xmlhttp.responseText;
//   }
//   return texto;
// }







//----------------------------------------------------------------------



//          ██╗░░░██╗███████╗██████╗░░██████╗██╗░█████╗░███╗░░██╗  ██████╗░
//          ██║░░░██║██╔════╝██╔══██╗██╔════╝██║██╔══██╗████╗░██║  ╚════██╗
//          ╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░██║██║░░██║██╔██╗██║  ░░███╔═╝
//          ░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗██║██║░░██║██║╚████║  ██╔══╝░░
//          ░░╚██╔╝░░███████╗██║░░██║██████╔╝██║╚█████╔╝██║░╚███║  ███████╗
//          ░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝  ╚══════╝



//----------------------------------------------------------------------




// fetch('Preguntas.json')
//     .then(response => response.json())
//     .then(preguntas => {
//         const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];

//         // Mostrar categoría y pregunta
//         document.getElementById('categoria').textContent = pregunta.categoria;
//         document.getElementById('pregunta').textContent = pregunta.pregunta;

//         // Mostrar la imagen
//         document.getElementById('imagen').src = pregunta.imagen;

//         // Arreglo de respuestas para mezclar
//         const respuestas = [
//             pregunta.respuesta,
//             pregunta.incorrecta1,
//             pregunta.incorrecta2,
//             pregunta.incorrecta3
//         ];

//         // Mezcla las respuestas
//         respuestas.sort(() => Math.random() - 0.5);

//         // Asignar respuestas a los botones
//         document.getElementById('boton1').textContent = respuestas[0];
//         document.getElementById('boton2').textContent = respuestas[1];
//         document.getElementById('boton3').textContent = respuestas[2];
//         document.getElementById('boton4').textContent = respuestas[3];
//     })
//     .catch(error => console.error('Error al cargar el archivo JSON:', error));





//----------------------------------------------------------------------




//                ██╗░░░██╗███████╗██████╗░░██████╗██╗░█████╗░███╗░░██╗  ██████╗░
//                ██║░░░██║██╔════╝██╔══██╗██╔════╝██║██╔══██╗████╗░██║  ╚════██╗
//                ╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░██║██║░░██║██╔██╗██║  ░█████╔╝
//                ░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗██║██║░░██║██║╚████║  ░╚═══██╗
//                ░░╚██╔╝░░███████╗██║░░██║██████╔╝██║╚█████╔╝██║░╚███║  ██████╔╝
//                ░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝  ╚═════╝░



//----------------------------------------------------------------------



// let respuestasMezcladas = [];
// let preguntas = [];

// // Cargar preguntas del JSON
// function cargarPreguntas() {
//     fetch('Preguntas.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             preguntas = data;
//             cargarNuevaPregunta();
//         })
//         .catch(error => console.error('Error al cargar el archivo JSON:', error));
// }

// // Cargar una nueva pregunta aleatoria
// function cargarNuevaPregunta() {
//     // Verificar si hay preguntas cargadas
//     if (preguntas.length === 0) {
//         console.error('No hay preguntas disponibles.');
//         return;
//     }

//     // Ocultar el botón de continuar
//     document.getElementById('continuar').style.display = 'none';

//     // Limpiar estilos de botones anteriores
//     for (let i = 0; i < 4; i++) {
//         document.getElementById(`boton${i + 1}`).style.backgroundColor = ''; // resetear el color de fondo
//     }

//     const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];

//     // Mostrar categoría, pregunta e imagen
//     document.getElementById('categoria').textContent = pregunta.categoria;
//     document.getElementById('pregunta').textContent = pregunta.pregunta;
//     if (pregunta.imagen) {
//         document.getElementById('imagen').src = pregunta.imagen;
//     } else {
//         document.getElementById('imagen').src = 'fotos_Preguntas/madelynsarah.jpg'; // Imagen por defecto
//     }

//     // Mezclar respuestas
//     respuestasMezcladas = [
//         { texto: pregunta.respuesta, correcta: true },
//         { texto: pregunta.incorrecta1, correcta: false },
//         { texto: pregunta.incorrecta2, correcta: false },
//         { texto: pregunta.incorrecta3, correcta: false }
//     ];
//     respuestasMezcladas.sort(() => Math.random() - 0.5);

//     // Asignar respuestas a los botones
//     document.getElementById('boton1').textContent = respuestasMezcladas[0].texto;
//     document.getElementById('boton2').textContent = respuestasMezcladas[1].texto;
//     document.getElementById('boton3').textContent = respuestasMezcladas[2].texto;
//     document.getElementById('boton4').textContent = respuestasMezcladas[3].texto;
// }

// // Manejar la selección de respuestas
// function seleccionarRespuesta(indice) {
//     // Resalta el botón clickeado
//     const boton = document.getElementById(`boton${indice + 1}`);
//     if (respuestasMezcladas[indice].correcta) {
//         boton.style.backgroundColor = 'green';  // respuesta correcta
//     } else {
//         boton.style.backgroundColor = 'red';    // respuesta incorrecta
//     }

//     // Mostrar el botón de continuar
//     document.getElementById('continuar').style.display = 'block';
// }

// // Inicializar la primera pregunta
// cargarPreguntas();

//----------------------------------------------------------------------




//                ██╗░░░██╗███████╗██████╗░░██████╗██╗░█████╗░███╗░░██╗  4      4
//                ██║░░░██║██╔════╝██╔══██╗██╔════╝██║██╔══██╗████╗░██║  4      4
//                ╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░██║██║░░██║██╔██╗██║  44444444
//                ░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗██║██║░░██║██║╚████║         4
//                ░░╚██╔╝░░███████╗██║░░██║██████╔╝██║╚█████╔╝██║░╚███║         4
//                ░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚═╝░░╚══╝         4



//----------------------------------------------------------------------


let respuestasMezcladas = [];
let preguntas = [];
let respuestaSeleccionada = null; // Variable para almacenar la opción seleccionada

// Cargar preguntas del JSON
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

// Cargar una nueva pregunta aleatoria
function cargarNuevaPregunta() {
    // Verificar si hay preguntas cargadas
    if (preguntas.length === 0) {
        console.error('No hay preguntas disponibles.');
        return;
    }

    // Ocultar el botón de continuar
    document.getElementById('continuar').style.display = 'none';

    // Limpiar estilos de botones anteriores
    for (let i = 0; i < 4; i++) {
        const boton = document.getElementById(`boton${i + 1}`);
        boton.style.backgroundColor = ''; // resetear el color de fondo
        boton.onclick = () => seleccionarRespuesta(i); // reactivar los botones
        boton.style.pointerEvents = 'auto'; // habilitar clics de nuevo
    }

    const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];

    // Mostrar categoría, pregunta e imagen
    document.getElementById('categoria').textContent = pregunta.categoria;
    document.getElementById('pregunta').textContent = pregunta.pregunta;
    if (pregunta.imagen) {
        document.getElementById('imagen').src = pregunta.imagen;
    } else {
        document.getElementById('imagen').src = 'fotos_Preguntas/madelynsarah.jpg'; // Imagen por defecto
    }

    // Mezclar respuestas
    respuestasMezcladas = [
        { texto: pregunta.respuesta, correcta: true },
        { texto: pregunta.incorrecta1, correcta: false },
        { texto: pregunta.incorrecta2, correcta: false },
        { texto: pregunta.incorrecta3, correcta: false }
    ];
    respuestasMezcladas.sort(() => Math.random() - 0.5);

    // Asignar respuestas a los botones
    document.getElementById('boton1').textContent = respuestasMezcladas[0].texto;
    document.getElementById('boton2').textContent = respuestasMezcladas[1].texto;
    document.getElementById('boton3').textContent = respuestasMezcladas[2].texto;
    document.getElementById('boton4').textContent = respuestasMezcladas[3].texto;

    respuestaSeleccionada = null; // Reiniciar selección de respuesta
}

// Manejar la selección de respuestas
function seleccionarRespuesta(indice) {
    if (respuestaSeleccionada !== null) {
        return; // Si ya hay una respuesta seleccionada, no permitir más selecciones
    }

    respuestaSeleccionada = indice;

    // Resalta el botón clickeado
    const boton = document.getElementById(`boton${indice + 1}`);
    if (respuestasMezcladas[indice].correcta) {
        boton.style.backgroundColor = 'green';  // respuesta correcta
    } else {
        boton.style.backgroundColor = 'red';    // respuesta incorrecta

        // Buscar y resaltar la respuesta correcta
        for (let i = 0; i < 4; i++) {
            if (respuestasMezcladas[i].correcta) {
                document.getElementById(`boton${i + 1}`).style.backgroundColor = 'green';  // marcar la correcta
                break;
            }
        }
    }

    // Deshabilitar los otros botones
    for (let i = 0; i < 4; i++) {
        const botonActual = document.getElementById(`boton${i + 1}`);
        botonActual.onclick = null; // Eliminar el evento onclick de los botones
        botonActual.style.pointerEvents = 'none'; // Deshabilitar clics
    }

    // Mostrar el botón de continuar
    document.getElementById('continuar').style.display = 'block';
}

// Inicializar la primera pregunta
cargarPreguntas();

