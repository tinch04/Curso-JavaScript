
let cont = 0
let fact = 1

while (true ){
    cont ++
    if (cont > 10){
        break
    }
    if (cont < 10){
        fact= cont*fact
        
    }
}
console.log(`El factorial de 10 es : ${fact}`);

