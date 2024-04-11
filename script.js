// ultramaraton

const start = 15
const delka = 10
const konec = (start + delka) % 24
document.body.innerHTML = 'konec závodu v: ' + konec


// náhodná čísla

document.body.innerHTML += '<p>nahodne cislo: ' + Math.random() + '</p>'


// převod měny

const wageInEur = 20
const exchangeRate = 24.55
const wageInCzk = Math.round(wageInEur * exchangeRate)
document.body.innerHTML += '<h1> Mzda v korunách: ' + wageInCzk + '</h1>'