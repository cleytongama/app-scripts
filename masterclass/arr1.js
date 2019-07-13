const languages = ["Python", "C", "Java"]

languages.fill("programacao")

console.log(languages)
// console.log(languages.unshift("JavaScript"))

// console.log(languages)

// console.log(languages.shift())

// console.log(languages)

// Splice =-> Remove, substitui ou adiciona um ou mais  elementos em uma determinada posicao

// console.log(languages)

// console.log(languages.splice(1,0, "C#", "Go"))

// console.log(languages)

// console.log(languages.splice(1,1))

// console.log(languages)

// console.log(languages.splice(1,1, "C#"))

// console.log(languages)

// sort => Ordena os elementos  de acordo com a funcao  de ordenacao

const languagesYear = [
    {
        name: "Python",
        year: 3
    },
    {
        name: "C",
        year: 1
    },
    {
        name: "Java",
        year: 2
    }
]

console.log(languagesYear.sort(function(a,b){
        return (a.name > b.name) ? -1 : 1
}))

