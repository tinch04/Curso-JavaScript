// Comparaciones

//  Igualdad

if (5 == 5){
    console.log("5 es igual a 5");
}

if (5 === 5 ){
    console.log("5 es muy igual a 5");
}

let a= 5;
let b = "5";
if (a == b ){
    console.log("a es igual a b - Debil");
}

if (a === b ){
    console.log("a es igual a b - Fuerte");
}

// Desigualdad

let c = 4;
let d = 10;

if (c != d) {
    console.log("c es diferente a d - Debil");
}

if (c !== d ){
    console.log("c diferente a d - Fuerte");
}


// mayores menores

let max = 10;
let min = 5;

if ( max > min){
    console.log("max es mayor que min");
}


if ( max >= min){
    console.log("max es mayor o igual que min");
}


if (min < max){
    console.log("min es menor que max");
}


if (min <= max){
    console.log("min es menor o igual que max");
}

