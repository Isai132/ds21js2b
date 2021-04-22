function nombres(){
    let nom = "";
    for(let i = 0; i < 7; i++){
        let num = Math.random() * 25;
        num = Math.floor(num + 97);
        let letra = String.fromCharCode(num);
        nom += letra;    
    }
    return nom
}

function borbuja(a){
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < (a.length - i); j++){
            if(a[j] > a[j + 1]){
                let aux = a[j];
                a[j] = a[j + 1];
                a[j + 1] = aux;
            }
        }
    }
    return a;
}

let lista = new Array;
for(let i = 0; i < 10; i++){
    lista.push(nombres());
}
document.write(lista + "<br>");
document.write(borbuja(lista));