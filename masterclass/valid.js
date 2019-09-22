// function valid(passw){
//     let copyPass = passw
//     let result = false;
//     for(let charPassw  of passw){
//         const passwInvalid = `${+charPassw}${+charPassw+1}${+charPassw+2}`
//         const passwInvalidReverse = `${+charPassw}${+charPassw-1}${+charPassw-2}`
//         if(copyPass.includes(passwInvalid) || copyPass.includes(passwInvalidReverse)){
//             return true;
//         }
//     }
//     return result
// }

// console.log(valid("145"))

function createIterable(...array) {
    return {
        [Symbol.iterator]() {
            let i = 0;
            return {
                next() {
                    if (i < array.length) {
                        return {
                            value: array[i++],
                            done: false
                        }
                    } else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            }
        }
    }
}

const interables = createIterable("Fortran", "Lisp", "COBOL")

console.log([...interables])

for(let interable of interables){
    console.log(interable)
}

// const iterator = createIterable()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
