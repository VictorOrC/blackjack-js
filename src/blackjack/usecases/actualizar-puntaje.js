import { obtenerValorCarta } from './obtener-valor-carta.js';

export const actualizarPuntaje = ( puntos, carta, puntajes, jugador) => {
    puntos = puntos + obtenerValorCarta( carta );
    puntajes[jugador].textContent = puntos;

    return puntos;
}