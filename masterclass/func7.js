// const sum = (a, b) => a + b;

// const substract = (a, b) => a - b;

// const calculator = (fn) => (a, b) => fn(a, b);

// console.log(calculator(sum)(2,2))

// for/of => pega os valores
// for/in => pega os keys 

const createPerson =  (name, city, year) => ({
        name,
        city,
        year
    
})

const person = createPerson("Cleyton", "Belém", 1989)

console.log(person)