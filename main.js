const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const result = document.getElementById('res')

const OPTIONS = ['rock','paper','scissors']

const RULES = {
    rock: { scissors: true },
    paper: { rock: true },
    scissors: { paper: true }
}

function GAME(type) {
    const op = type;
    const pc = OPTIONS[ Math.floor( Math.random() * 3 ) ];
    if (op === pc) result.innerHTML = 'Empate :O';
    else result.innerHTML = RULES[op][pc] ? 'Ganaste :D' : 'Perdiste D:';
}

rock.addEventListener('click',() => GAME('rock') )
paper.addEventListener('click',() => GAME('paper') )
scissors.addEventListener('click',() => GAME('scissors') )