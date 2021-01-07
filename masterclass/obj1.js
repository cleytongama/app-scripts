const book1 = {
    title: "Clean Code",
    author: "Robert Martin",
    pages: 465,
    languagem: "English",
    avaliable: true
}
const book2 = {}
for (let key1 in book1) {
    book2[key1] = book1[key1]
}

console.log(book2)

// null => ausencia de valor
// undefined => propriedade inexistente

// forma literal
// const book ={}

// Por meu da funcao construtora
// const book  = new Object()

// Por meio da Object API
// const book = Object.create(null)