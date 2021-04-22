function aleatorios(){
    let x = Math.random() * 100;
    return Math.floor(x);
}

let map = new Map();
map.set(aleatorios(),aleatorios());
console.log(map);