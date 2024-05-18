const result = document.querySelector('.result')
const humanScore = document.getElementById('human-score')
const machineScore = document.getElementById('machine-score')
const winGif = "assets/vitoria.gif"
const loseGif = "assets/derrota.gif"
const drawGif = "assets/empate.gif"

const humanChoiceDisplay = document.getElementById('human-choice')
const machineChoiceDisplay = document.getElementById('machine-choice')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    // Exibir as escolhas
    humanChoiceDisplay.innerHTML = '<span class="you-name">Você</span> escolheu: <span class="choice-' + human + '">' + human + '</span>'
    machineChoiceDisplay.innerHTML = 'A <span class="siri-name">Siri</span> escolheu: <span class="choice-' + machine + '">' + machine + '</span>'

    console.log('humano: ' + human + ' maquina: ' + machine)
    if (human === machine) {
        result.innerHTML = "Deu empate! <img src='" + drawGif + "' alt='GIF de empate' width='55' height='50' style='border-radius: 50%;' />"
    } else if ((human === 'paper' && machine === 'rock') || (human === 'rock' && machine === 'scissors') || (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "<span class='result-you'>Você</span> ganhou! <img src='" + winGif + "' alt='GIF de vitória' width='55' height='50' style='border-radius: 50%;' />"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "<span class='result-you'>Você</span> perdeu para <span class='result-siri'>Siri</span>! <img src='" + loseGif + "' alt='GIF de derrota' width='55' height='50' style='border-radius: 50%;' />"
    }
}

// Lista de imagens
const imagens = ["assets/background1.gif", "assets/background2.gif", "assets/background3.gif", "assets/background4.gif", "assets/background5.gif", "assets/background6.gif"];

// Função para escolher uma imagem aleatória e definir como plano de fundo
function escolherImagemAleatoria() {
    const num = Math.floor(Math.random() * imagens.length);
    document.body.style.backgroundImage = `url('${imagens[num]}')`;
}

// Chamar a função quando a página carregar
document.addEventListener('DOMContentLoaded', escolherImagemAleatoria);
