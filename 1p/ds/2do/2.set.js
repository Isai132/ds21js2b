function aleatorios(){
    let x = Math.random() * 100;
    return Math.floor(x);
}
const mySet = new Set();
mySet.add(aleatorios());
console.log(mySet);