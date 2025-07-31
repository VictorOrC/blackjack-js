import _ from 'underscore';

/**
 * Funcion para crear un nuevo deck
 * @param {Array<String>} palos Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} figuras Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Devuelve deck ya creado
 */
     export const crearDeck = ( palos, figuras ) => {

        if ( !palos || palos.length === 0 ) throw new Error('palos es obligatorio como un arreglo de string');
        if ( !figuras || figuras.length === 0 ) throw new Error('figuras es obligatorio como un arreglo de string');

        let deck = [];

        for( let i = 2; i < 11; i++ ) {
            for( let palo of palos ) {
                deck.push( i + palo );
            }
        }
        
        for( let palo of palos ) {
            for( let fig of figuras ) {
                deck.push( fig + palo );
            }
        }
        
        // metodo de libreria underscore para revolver las posiciones de un arreglo
        deck = _.shuffle(deck);
        return deck;
    }