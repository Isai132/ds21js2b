function aleatorios(){
    let x = Math.random() * 100;
    return Math.floor(x);
}

let x = new Array;
for(let i = 0; i < 10; i++){
    x.push(aleatorios());
}

document.write(x + "<br>");
x = x.sort((a,b) => a - b);
document.write(x);