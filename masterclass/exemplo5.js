const funcionalLanguage ={
    paradigma: "funcional"
}
// const scheme ={
//     name: "Scheme",
//     year: 1975,
//     __proto__: funcionalLanguage
// }
const scheme ={
    name: "Scheme",
    year: 1975
}
Object.setPrototypeOf(scheme, funcionalLanguage)
    
const javascript={
    name: "Javascript",
    year: 1995,
    __proto__: funcionalLanguage
}

for(let key in scheme){
    console.log(key, scheme.hasOwnProperty(key))
    console.log(key)
}

console.log(scheme.paradigma)