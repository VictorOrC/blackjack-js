import Swal from "sweetalert2";

/**
 * Funcion para determinar cual es el resultado del juego
 * @param { Integer } puntosJugador Ejemplo: 14
 * @param {Integer} puntosCrupier Ejemplo: 20
 */
export const evaluacion = ( puntosJugador, puntosCrupier) => {

    if( !puntosCrupier || !puntosJugador) throw new Error('Ambos puntajes son requeridos');
    if( puntosCrupier === 0 || puntosJugador === 0 ) throw new Error('Ninguno de los puntajes pueden estar en 0');

        setTimeout(() => {
                if( puntosJugador > 21 ) {
                    Swal.fire({
                        title: "Has Perdido",
                        text: "Te has pasado payaso!!",
                        icon: "error"
                    });
                } else if( puntosJugador > puntosCrupier || puntosCrupier > 21 ) {
                    Swal.fire({
                        title: "Has Ganado",
                        text: "Joder que bueno eres!!",
                        icon: "success"
                    });
                } else if( puntosJugador === puntosCrupier ) {
                    Swal.fire({
                        title: "Empate",
                        text: "Ni fu ni fa",
                        icon: "info"
                    });
                } else {
                    Swal.fire({
                        title: "Has Perdido",
                        text: "Esta va pa la karen .l.!!",
                        icon: "error"
                    });
                }
            }, 400);
    }