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


// házení kostkou

let kostka = Math.round(Math.random() * 6) + 1
document.body.innerHTML += '<p>hod kostkou: ' + kostka + '</p>'


// příjem divadla

const listek = 12
const pocetNavstevniku = 174
const pocetPredstaveni = 15
const prijem = listek * pocetNavstevniku * pocetPredstaveni
document.body.innerHTML += '<p> Prijem divadla: ' + prijem + '</p>'
const listekStudent = 0.65 * listek
const pocetStudentu = 0.4 * pocetNavstevniku
const pocetDospelych = pocetNavstevniku - pocetStudentu
const prijemSeStudenty = (listek * pocetDospelych * pocetPredstaveni) + (listekStudent * pocetStudentu * pocetPredstaveni)
document.body.innerHTML += '<p> Prijem divadla se studenty: ' +  prijemSeStudenty + '</p>'