const cards = [
    { name: '1', img: './fotos_Memotest/NicolasJackson.png' },
    { name: '2', img: './fotos_Memotest/Benteke.png' },
    { name: '3', img: './fotos_Memotest/Mateta.png' },
    { name: '4', img: './fotos_Memotest/YayaToure.png' },
    { name: '5', img: './fotos_Memotest/LassDiarra.png' },
    { name: '6', img: './fotos_Memotest/SolCampbell.png' },
    { name: '7', img: './fotos_Memotest/MamadouNiang.png' },
    { name: '8', img: './fotos_Memotest/Akinfenwa.png' }
];

// Duplicar las cartas para tener pares
let gameCards = [...cards, ...cards];

// Barajar las cartas
gameCards = gameCards.sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;

const board = document.getElementById('game-board');

// Crear el tablero de juego
gameCards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.dataset.name = card.name;

    const frontFace = document.createElement('img');
    frontFace.src = card.img;
    cardElement.appendChild(frontFace);

    cardElement.addEventListener('click', flipCard);
    board.appendChild(cardElement);
});

function flipCard() {
    if (lockBoard) return; // Evitar que se pueda clicar mientras se comparan cartas
    if (this === firstCard) return; // Evitar que se haga clic dos veces en la misma carta

    this.classList.add('flip'); // Se activa la animación de rotación

    if (!firstCard) {
        // Primera carta clicada
        firstCard = this;
        return;
    }

    // Segunda carta clicada
    secondCard = this;
    checkForMatch();
}


function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    // Las cartas son iguales
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    matches += 1;

    if (matches === cards.length) {
        setTimeout(() => alert('¡Ganaste!'), 500);
    }
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}
