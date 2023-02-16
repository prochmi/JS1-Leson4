// tady je místo pro náš program
/*
const adresa = {
    streetName: 'Pod Kaštany' ,
    number: 19,
    city: 'Znojmo' ,
    postalCode: '123 11'
    
}

let vstupUzivatele = prompt('Zadej správné číslo adresy')
adresa.number = Number(vstupUzivatele)

const user1 = {
    fullName: 'Lubomír Větvička',
    login: 'lubos',
    adresa: {
        streetName: 'Pod Kaštany' ,
        number: 19,
        city: 'Znojmo' ,
        postalCode: '123 11'
    },


}

const product = {
	name: 'Mlýnek na kávu',
	price: 520,
	currency: 'Kč',
}
let newName = product.name
const { name, price, currency } = product

*/

const apartment = {
	type: 'rent',
	disposition: '3+1',
	area: {
		floorage: 100,
		balcony: 2,
		units: 'sqm',
	},
	city: 'Prague',
	district: 'Old Town',
	price: {
		rent: 28000,
		fees: {
			water: 1000,
			energy: 2500,
			services: 560,
		},
		currency: 'czk',
	},
	ownership: 'personal',
	condition: 'renovated',
	status: 'free',
	floor: 3,
}

let dispozice = document.querySelector (".dispozice")
dispozice = apartment.disposition

document.body.innerHTML +="<p>Dispozice:" + apartment.disposition + "</p>"
document.body.innerHTML += "<p>Čistý nájem: "+ apartment.price.rent + "</p>"
document.body.innerHTML += "<p> Výměra: "+ apartment.area.floorage + apartment.area.units + "</p>"

const city = apartment.city
const district = apartment.district

apartment.status = 'taken'
document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>"



// knihovna 

const hniha1 = {
    name: 'moje kniha',
    autor: 'já',
    pocetStranek: 121,
    vydavatel: 'kosmas',
    vydavatelAdresa: 'Praha',
}

const kniha2 = {
    name: 'ahoj',
    autor: 'on',
    pocetStranek: 221,
    vydavatel: 'petr',
    vydavatelAdresa: 'Olomouc'
}

//Očkování

let vstupJmeno = prompt("Jméno")
let vstupVek = prompt ("Věk")

const person = {
    name: vstupJmeno,
    age: vstupVek
}

let jmeno = document.querySelector(".jmeno")
jmeno.innerText = person.name

let vek = document.querySelector(".vek")
vek.innerText = person.age
vek.style.color = "Red"
vek.style.weight = "bold"

