const functionalLanguagem = {
    paradigm: "Functional"
}
console.log(functionalLanguagem.__proto__)

const scheme = {
    name: "Scheme",
    year: 1975,
    __proto__: functionalLanguagem
}

const javascript = {
    name: "Scheme",
    year: 1975
}

console.log(scheme)
console.log(scheme.paradigm)
console.log(javascript)