let max = prompt("Ingrese un numero");

function aleatorio(num){
    let x = Math.random() * num;
    return Math.floor(1 + x);
}

document.write("El numero aleatorio entre [1 - " + max + "] es: " + aleatorio(max))