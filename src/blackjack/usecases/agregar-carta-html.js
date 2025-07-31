export const mostrarCarta = (carta, oculta = false) => {
    const imgCarta = document.createElement('img');

    if (oculta) {
        imgCarta.src = './assests/cartas/red_back.png';
        imgCarta.classList.add('carta', 'carta-oculta','animacion-carta');
        imgCarta.alt = 'Carta oculta';
    } else {
        imgCarta.src = `./assests/cartas/${carta}.png`;
        imgCarta.classList.add('carta', 'animacion-carta');
        imgCarta.alt = `carta ${carta}`;
    }

    imgCarta.width = 200;
    imgCarta.height = 200;

    return imgCarta;
};
