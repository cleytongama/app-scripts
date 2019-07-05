// const obj1 = {
//     p1: 10,
//     getP1: function(){
//         // const that = this;
//         const fn1 = ()=>{
//             return this.p1
//         }
//         return fn1()
//     }
// }
// console.log(obj1.getP1())

// const fn1 = function () {
//     let v1 = 10 
//     return {
//         m1() {
//             console.log(++v1)
//         },
//         m2() {
//             console.log(--v1)

//         }
//     }
// }

// const obj = fn1()

// // obj.m1()
// obj.m2()

const obj = {}

// for (var v1 = 0; v1 < 3; v1++) {
//     obj[v1] = (function(v2){
//        return function(){
//            console.log(v2)
//        } 
//     })(v1)
    
// }
for (var v1 = 0; v1 < 3; v1++) {
    obj[v1] = (function(){
           console.log(this.v2)
    }).bind({v2:v1})
    
}
console.log(obj[0]())
console.log(obj[1]())
