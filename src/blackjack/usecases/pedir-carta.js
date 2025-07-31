/**
 * Funcion para sacar la ultima carta del deck y la elimina de este
 * @param {Array<String>} deck Deck ya creado
 * @returns {string} Devuelve la ultima carta del deck
 */
export const pedirCarta = ( deck ) => {
    
        if( !deck || deck.length === 0 ) {
            Swal.fire({
                title: 'Se acabo el deck!',
                text: 'Como es posible esto',
                icon: 'question',
                confirmButtonText: 'Ok'
            })
            throw 'Se nos acabaron las cartas';
        }

        return deck.pop();
    }