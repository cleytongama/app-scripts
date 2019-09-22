const Calc = function (num1, num2) {
    return {
        out(){
            console.log(num1, num2)
        }
    }
}

const a = new Calc(1, 2)

a.out.bind({ num1: 2, num2: 2 })()