function aleatorios(){
    let x = Math.random() * 4;
    return Math.floor(x);
}

let object =  [ {name: "Roberto", position: "ux designer"}, {name: "Isaí", position: "strategist"},{name: "Martha", position: "developer"},{name: "Alicia", position: "manager"},{name: "Fernanda", position: "developer" }];
console.log(object[aleatorios()]);