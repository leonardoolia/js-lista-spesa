/* Data una lista della spesa (inventatela), stampare sulla pagina (anche brutalmente, basta che si vedano) 
gli elementi della lista individualmente con un ciclo while. */

//? 1. Recuperare l'elemento dall'html
const targetElement = document.getElementById('lista-spesa');

//? 2. Creare array con elementi all'interno
const listaSpesa = ['Pane', 'Latte', 'Farina', 'Uova', 'Sale', 'Zucchero', 'Frutta', 'Verdura', 'Patate'];

//? 3. Stampare in pagina la lista della spesa
let listItems = '<ul>';

//! Versione con il for
/* for (let i = 0; i < listaSpesa.length; i++) {
    listItems += `<li>${listaSpesa[i]}</li>`
}; */

//! Versione con il while
let i = 0;

while (i < listaSpesa.length) {
    listItems += `<li>${listaSpesa[i]}</li>`
    i++;
};


listItems += '</ul>';

targetElement.innerHTML = listItems;