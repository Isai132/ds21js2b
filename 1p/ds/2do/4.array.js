function aleatorios(){
    let x = Math.random() * 100;
    return Math.floor(x);
}
let array = [];
for(let i = 0; i < 5; i++){
    array.push(aleatorios());
}
document.write(array);