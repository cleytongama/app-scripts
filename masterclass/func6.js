const _new = function(fn, ...params){
    const obj =  {}
    Object.setPrototypeOf(obj, fn.prototype)
    fn.apply(obj, params)
    return obj;
}

const Person = function(name, city, year){
    this.name = name;
    this.city = city;
    this.year = year;
}

Person.prototype.getDate = function(){
    return (new Date()).getFullYear() - this.year
}

const person1 = _new(Person, "Linus Torvalds", "Helsinki", 1965)
const person2 = _new(Person, "Bill Gates", "Seatle", 1955)

console.log(person1)
console.log(person1.getDate())