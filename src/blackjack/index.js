import _ from 'underscore';

import { crearDeck, evaluacion, mostrarCarta, pedirCarta, actualizarPuntaje, repartirCarta } from './usecases/index.js'

    let deck = [];
    const palos = ['C', 'D', 'H', 'S'],
        figuras = ['A', 'J', 'Q', 'K'];
    let puntosJugador = 0,
        puntosCrupier = 0;

    // Referencia
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugador = document.querySelector('#cartas-jugador'),
          divCartasCrupier = document.querySelector('#cartas-crupier'),
          puntajes = document.querySelectorAll('small');

    

    const inicializarJuego = () => {
        deck = crearDeck( palos, figuras );

        puntajes[0].textContent = 0;
        puntajes[1].textContent = 0;

        puntosJugador = 0;
        puntosCrupier = 0;

        divCartasCrupier.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        
        puntosJugador = repartirCarta(deck, puntosJugador, puntajes, 0, divCartasJugador);
        setTimeout(() => {
            puntosCrupier = repartirCarta(deck, puntosCrupier, puntajes, 1, divCartasCrupier);
        }, 100);
        setTimeout(() => {
             puntosJugador = repartirCarta(deck, puntosJugador, puntajes, 0, divCartasJugador);
        }, 200);
        setTimeout(() => {
            let cartaOculta = mostrarCarta( 'Carta Oculta' ,true );
            divCartasCrupier.append(cartaOculta);
            if( puntosJugador === 21 ){
                btnPedir.disabled = true;
                btnDetener.click();
            }
        }, 300);
        
        // Agregar carta oculta (boca abajo)
        

        
    };

    // Eventos
    btnPedir.addEventListener('click', () => {

        puntosJugador = repartirCarta(deck, puntosJugador, puntajes, 0, divCartasJugador);
    
        if( puntosJugador >= 21 ){
            btnPedir.disabled = true;
            btnDetener.click();
        } else if ( puntosJugador === 21 ) {
            btnPedir.disabled = true;
            btnDetener.click();
        }

    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;

        // Remover la carta oculta
        const cartaOculta = divCartasCrupier.querySelector('.carta-oculta');
        cartaOculta.classList.add('animacion-voltear');
        setTimeout(() => {
            if (cartaOculta) cartaOculta.remove();
        }, 150);
        

        // Dar una segunda carta real al crupier (la oculta que se revela)
        puntosCrupier = repartirCarta(deck, puntosCrupier, puntajes, 1, divCartasCrupier);

        while (puntosCrupier < 17 && puntosJugador < 22) {
            puntosCrupier = repartirCarta(deck, puntosCrupier, puntajes, 1, divCartasCrupier);
        }

        evaluacion( puntosJugador, puntosCrupier);
    })

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    })
