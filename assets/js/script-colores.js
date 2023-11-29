// Ejercicio N°3-a
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');

// Ejercicio N°3-b
const changeColor = (e) => (e.target.style.backgroundColor = 'black');

div1.addEventListener('click', changeColor);
div2.addEventListener('click', changeColor);
div3.addEventListener('click', changeColor);
div4.addEventListener('click', changeColor);

// Ejercicio N°3-c

// Creación del div vacío
const newDiv = document.createElement('div');
newDiv.setAttribute("id", "key");
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'white';
newDiv.style.marginBottom = '20px';
newDiv.style.borderColor = 'black';
newDiv.style.borderWidth = '2px';
newDiv.style.borderStyle = 'solid';
document.body.appendChild(newDiv);

// Cambio de colores div vacío
document.addEventListener('keydown', function (e) {
    if (e.key === 'a') {
        newDiv.style.backgroundColor = 'pink';
    }
    else if (e.key === 's') {
        newDiv.style.backgroundColor = 'orange';
    }
    else if (e.key === 'd') {
        newDiv.style.backgroundColor = 'deepskyblue';
    }
});

// Ejercicio N°3-d

// Función que crea un div con parámetro de entrada de color
function createDiv(color) {
    const divCreated = document.createElement('div');
    divCreated.style.width = '200px';
    divCreated.style.height = '200px';
    divCreated.style.backgroundColor = color;
    divCreated.style.marginBottom = '20px';

    // se agrega al body
    document.body.appendChild(divCreated);
}

// Añadir los div de colores al DOM, según las teclas
document.addEventListener('keydown', function (e) {
    if (e.key === 'q') {
        createDiv('purple');
    }
    else if (e.key === 'w') {
        createDiv('grey');
    }
    else if (e.key === 'e') {
        createDiv('brown');
    }
});