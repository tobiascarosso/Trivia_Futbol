const cardsJugadores = [
    { name: '1', img: './fotos_Memotest/NicolasJackson.png' },
    { name: '2', img: './fotos_Memotest/Benteke.png' },
    { name: '3', img: './fotos_Memotest/Mateta.png' },
    { name: '4', img: './fotos_Memotest/YayaToure.png' },
    { name: '5', img: './fotos_Memotest/JonathanIkone.png' },
    { name: '6', img: './fotos_Memotest/SolCampbell.png' },
    { name: '7', img: './fotos_Memotest/MamadouNiang.png' },
    { name: '8', img: './fotos_Memotest/Akinfenwa.png' }
];

const cardsClubes = [
    { name: '1', img: './fotos_Memotest/sanlorenzo.png' },
    { name: '2', img: './fotos_Memotest/chacarita.png' },
    { name: '3', img: './fotos_Memotest/river.png' },
    { name: '4', img: './fotos_Memotest/independiente.png' },
    { name: '5', img: './fotos_Memotest/sanma.png' },
    { name: '6', img: './fotos_Memotest/saca.png' },
    { name: '7', img: './fotos_Memotest/estudiantes.png' },
    { name: '8', img: './fotos_Memotest/boca.png' }
];

let gameCards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matches = 0;
let startTime = null;
let endTime = null;

const board = document.getElementById('game-board');
const message = document.getElementById('message');
const selector = document.getElementById('selector');

document.getElementById('jugadores').addEventListener('click', () => startGame(cardsJugadores));
document.getElementById('clubes').addEventListener('click', () => startGame(cardsClubes));

function startGame(selectedCards) {
    selector.style.display = 'none'; // Oculta los botones de selección
    board.style.display = 'grid'; // Muestra el tablero
    board.innerHTML = ''; // Limpia el tablero antes de agregar cartas
    gameCards = [...selectedCards, ...selectedCards].sort(() => 0.5 - Math.random());

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
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return; 

    if (matches === 0 && firstCard === null) {
        startTimer();
    }

    this.classList.add('flip'); 

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
    matches += 1;

    if (matches === cardsJugadores.length) { // Cambia según el tipo de cartas seleccionadas
        endTimer(); 
        setTimeout(() => displayWinMessage(), 500); 
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

function startTimer() {
    startTime = new Date(); 
}

function endTimer() {
    endTime = new Date(); 
}

function displayWinMessage() {
    const totalTime = Math.floor((endTime - startTime) / 1000); 
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    message.textContent = `¡Has ganado! Tu tiempo fue de ${minutes} minutos y ${seconds} segundos.`;
    document.getElementById('volverInicio').style.display = 'block';
}

function volverAlInicio() {
    window.location.href = 'Index.html';
}
