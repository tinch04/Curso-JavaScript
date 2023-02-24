// Bucles For

// i = i+1
// i += 1
// i ++

for (let i = 0; i < 10;  i ++) {
    // Esto es el bucle
    console.log(i);
}

let list= [1,4,6,8,10,12];

for (let i=0; i < list.length; i++) {
    console.log(list[i]*2);
}

// For ... of
for (let valor of list){
    console.log(valor);
}

// ForEach

list.forEach(valor =>{
    console.log(valor);
})


// For...in

let persona={
    nombre :"martin",
    apellido: "andreani",
    edad:19,
    isDeveloper: true,
}

let prop = "edad"

console.log(persona[prop]);

for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]
        );
}
