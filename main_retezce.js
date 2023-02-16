let delka = 'ahoj'.length // počet znaku
let velka = 'Nějaky muj delši text'.toUpperCase() // všechna velká písmena
let malá = 'MARETI'.toLowerCase() // všechna malá písmena
let mezery = 'nejaky muj text'.trim() // odstraní mezery
let kus = 'nejaky muj text'.slice(0,6) // vypiš rozmezí textu od 0-6

let text1 = 'nejaky muj text cz'.indexOf('cz') // vypíše na kterém místě je umístěno cz = 16.misto

let text2 = '20'.padStart(4,'0') // o počet míst posunuta doprava a vyplněna 0
let text3 = '20'.padEnd(4,'0') //	zbylý počet míst vyplní 0

const order = {
	id: 37214,
	product: 'pěnová matrace',
	delivery: '21.8.2023',
  };
  
  const { id, product, delivery } = order;

  let text_order = 'id: ' + id + 'Produkt: ' + product + 'Delivery: '+ delivery // varianta prvního zápisu
  let text_order2 = `<p>Zboží ${product} bude doručeno ${delivery}.</p>` // '' vs `` je rozdíl

  let delsiHtml = 
  '<header> </header> ' +
'<p> </p>' +
'<main> </main>'


let delsiHtml2 =
`
<header>
  <h1>Objednávka: ${String(id).padStart(8, '0')}</h1>
</header>
<main>
  <p>Zboží ${product} bude doručeno ${delivery}.</p>
</main>
<footer>www.matrace-a-syn.cz</footer>
`

document.body.innerHTML = delsiHtml2

