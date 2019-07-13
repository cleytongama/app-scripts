const language  = {
    name: "C",
    author: "Deins Ritchie",
    year: 10,
    company:{
        name: "Bell Labs"
    }
}

const {name:n, year, company:{name:nc}} = language

console.log(n, year, nc) 