var element = document.getElementById("genera");
element.addEventListener('click',
function() {

  var nomeCognome = document.getElementById('nome').value;
  var kilometri = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;
  var prezzo = kilometri * 0.21

  // console.log(nomeCognome);
  // console.log(kilometri);
  // console.log(eta);

  document.getElementById('nome-pass').innerHTML = nomeCognome;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;
  document.getElementById('codice').innerHTML = Math.floor(Math.random() * (100000 - 90000 + 1)) + 90000;
}
);
