function aleatorios(){
    let x = Math.random() * 100;
    return Math.floor(x);
}

let x = new Array;
for(let i = 0; i < 10; i++){
    x.push(aleatorios());
}
document.write(x + "</br>");
for(let i = 0; i < x.length; i++){
    for(let j = 0; j < (x.length - i); j++){
        if(x[j] > x[j + 1]){
            let aux = x[j];
            x[j] = x[j + 1];
            x[j + 1] = aux;
        }
    }
}

document.write(x);
