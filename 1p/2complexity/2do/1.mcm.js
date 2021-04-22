function MCM(a, b){ 
    let aux;
    while (b !== 0) {
        aux = b;
        b=a % b;
        a = aux;
    }
    return a;
}
function mcm(a, b){
    return(a * b) / MCM(a,b);
}

let a = prompt("Ingrese un numero");
let b = prompt("Ingrese un numero");
document.write(mcm(a, b));