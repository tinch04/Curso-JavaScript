// break continue
//labels --> Etiquetas


let unidades = 0
let decenas = 0


bucleDecenas: while (true){
    bucleUnidades: while (true){
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades ++
        if (unidades === 10 ){
            unidades = 0
            break bucleUnidades
        }
    }
    decenas ++
    if (decenas === 2){
        break bucleDecenas
    }
}

console.log("ya hemos terminado");

