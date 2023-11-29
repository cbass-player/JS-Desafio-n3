// Ejercicio N°2
function pintar(color, elem) {
    const ele1 = document.getElementById(elem);
    ele1.addEventListener('click', function () {
        ele1.style.backgroundColor = color
    })
}

pintar('yellow', 'ele1');