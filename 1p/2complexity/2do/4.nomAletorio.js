document.write(nombres())

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