
const titulo = document.getElementById('titulo_principal');
titulo.innerText = 'Que blog bUnito!';


const segundoH2 = document.getElementById('segundo_h2');
console.log(segundoH2);


const classesNav = document.getElementsByClassName('elementos_nav');
console.log(classesNav);
console.log(classesNav[0]);
console.log(classesNav[1].childNodes);
console.log(classesNav[1].childNodes[1].innerText);


const proximoH3 = document.querySelector('section h3');
console.log(proximoH3);


const elementosNav = document.querySelectorAll('.elementos_nav');
console.log(elementosNav);


function imprimir(ListaElementos) {
    for (let i = 0; i <ListaElementos.length; i++) {
        console.log(ListaElementos[i].childNodes[1].innerText);
    }
}
imprimir(elementosNav);

const array_user = ['Viviane', 46, 'gata', 'cachorro', 'batatinha']
console.log(array_user[2]);

