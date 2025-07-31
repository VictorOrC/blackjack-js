import { pedirCarta, actualizarPuntaje, mostrarCarta} from './index.js'

export const repartirCarta = ( deck, puntos, puntaje, jugador, contenedor) => {
    const carta = pedirCarta( deck );
    puntos = actualizarPuntaje(puntos, carta, puntaje, jugador);
    const nuevaCarta = mostrarCarta( carta );
    contenedor.append(nuevaCarta);
    return puntos;
}