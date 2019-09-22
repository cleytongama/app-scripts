const data = require('./data')

const { childrenAge, mailList, passengers } = data


// 1- Criancas entre  2 - 11 anos
const ChildsFiltered = childrenAge.filter((element, index) => {
    return element >= 2 && element <= 11;
});

// 2- E-mails Rocktseat 
const RocktsetaEmailFiltered = mailList.filter((element, index) => {
    return element.includes("rocketseat.com")
});

// 3 - Encontre o passageiro de nome: "Enzo"

const nameEnzo =  passengers.find((element)=>{
    return element.name === "Enzo"
})

console.table(nameEnzo)