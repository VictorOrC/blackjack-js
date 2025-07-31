    /**
     * Funcion para determinar cuanto vale una carta en caso que sea de figura o As
     * @param {String} carta Ejemplo: '2H'
     * @returns {Integer} Devuelve el valor de la carta
     */

    export const obtenerValorCarta = ( carta ) => {

        if(!carta) throw new Error('carta es obligatorio no puede estar vacio');
        if( carta.length > 3 ) throw new Error('No hay ninguna carta con tantos caracterers');

        const valor = carta.substring(0, carta.length - 1 );
        
        // Opcion mas legible con if else
        let puntos;
        if( isNaN(valor) ) {
            puntos = ( valor === 'A') ? 11 : 10;
        } else {
        puntos = valor * 1;
        }

        return puntos;
    }