let a = prompt("Ingrese un numero")
let primos = new Array;

for(let i = 0; i < a; i++){
    primos[i] = true;
}
for(let i = 2; i < a; i++){   
    if(primos[i] == true)
	    for(let j = 2; i * j < a; j++){
  	        primos[i * j] = false;
   	}
}
for(i = 2; i < a; i++){
    if(primos[i])
        document.write(i + " ");
}