// ultramaraton

const start = 15
const delka = 10
const konec = (start + delka) % 24
document.body.innerHTML = 'konec závodu v: ' + konec


// náhodná čísla

document.body.innerHTML += '<p>nahodne cislo: ' + Math.random() + '</p>'
