let title = 'Pán Prstenů'
title.length
title.toUpperCase
title.slice(0,5)
title.slice(title.length -5, title.length)

let email = prompt('Zadej svůj email')
let atIndex = email.indexOf('@')

let emailParts = {
	jmeno : email.slice(0,atIndex),
	 domena : email.slice(atIndex+1)
	
}

document.body.innerHTML = '<p> Jmeno a Příjmení: '+emailParts.jmeno+'</p>'
document.body.innerHTML += '<p> Název domény: ' +emailParts.domena + '</p>'


