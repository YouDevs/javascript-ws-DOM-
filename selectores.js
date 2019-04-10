// Obtiene los elementos que coincidan con el nombre de la etiqueta...
console.log(document.getElementsByTagName('p'));

// ..
console.log(document.getElementsByClassName('hola'));

// ..
console.log(document.getElementById('link'));

// ..
console.log(document.querySelector('h1'));

console.log(document.querySelectorAll('h1'));

let a = document.querySelector('a').getAttribute('href');
console.log(a);

// setAttribute()