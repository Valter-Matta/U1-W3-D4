const section = document.getElementById('griglia')
const arrayGriglia = []
//creo bottone e classe
const divButton = document.getElementById('buttonContainer')
const button = document.createElement('button')
button.classList.add('button')
button.innerText = 'Tenta la Fortuna'
divButton.appendChild(button)

const pushInGriglia = function () {
  for (let i = 1; i < 77; i++) {
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    div.classList.add('contNumber')
    div.appendChild(h2)
    section.appendChild(div)
    h2.innerText = i
    arrayGriglia.push(i)
  }

  button.addEventListener('click', () => {
    extractNum = Math.ceil(Math.random() * 76)
    const div = document.querySelectorAll('div')
    const numLucky = document.querySelectorAll('h2')
    console.log(extractNum)
    const numeroEstratto = extractNum
    const numeriEstratti = []
    numeriEstratti.push(extractNum)
    for (let i = 0; i < numLucky.length; i++) {
      //   const numeroPrec = extractNum
      for (let j = 0; j < numeriEstratti.length; j++) {
        if (extractNum === parseInt(numLucky[i].innerText)) {
          div[i].classList.add('extract')
          // console.log(div[i])
        }
      }
      //   div[i].classList.remove('extract')
    }
  })
}

pushInGriglia()
console.log(arrayGriglia)
const playerSec = document.getElementById('player-section')

const creoGiocatore = function () {
  for (let i = 0; i < 24; i++) {
    const tabellinaPlayer = document.createElement('div')
    const h3 = document.createElement('h3')
    tabellinaPlayer.classList.add('tabellina')
    h3.classList.add('number-tabellina')
    tabellinaPlayer.appendChild(h3)
    playerSec.appendChild(tabellinaPlayer)
    h3.innerText = Math.ceil(Math.random() * 76)
    const numPlayerExit = h3.innerHTML
  }
}
creoGiocatore()

//creo un cont. per il numero estratto

// button.addEventListener('click', () => {
//   const numLucky = Math.ceil(Math.random() * 76)
//   if (numLucky === h2.innerText) {
//     div.classList.add('extract')
//   }
// })
