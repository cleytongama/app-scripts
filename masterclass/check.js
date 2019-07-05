// const listaCpfs = ["00058484230", "47532571009"]
// const check1 = (cpf) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if("00058484230" === cpf){
//                 console.log(`Promisse1 ${cpf}`)
//                 resolve(true)
//             }else{
//                 reject(true);
//             }

//         }, 1000)
//     })
// }
// const check2 = (cpf) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Promisse2 ${cpf}`)
//             resolve(true);
//         }, 3000)
//     })
// }
// const check3 = (cpf) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Promisse3 ${cpf}`)
//             resolve(true);
//         }, 3000)
//     })
// }

// const listMethodChekingCpf = (cpf) => [check1(cpf), check2(cpf), check3(cpf)]

// const listCpfCheck = async() => {
//     listaCpfs.map(async(cpf) => {
//         try{
//             await main(cpf)
//         }catch(e){
//             console.log(`Erro checking ${cpf}`)
//         }
//     })
// }

// const main = async(cpf) => {
//     const all_results = await Promise.all(
//         listMethodChekingCpf(cpf).map(async(promiseCheck, index) => {
//             try{
//                 const promiseResult = await promiseCheck  
//                 return promiseResult;
//             }catch(e){
//                 return false ;
//             }
//         })
//     )
//     console.log(`${all_results} -- ${cpf}`);    
// }

// listCpfCheck()

let check1 = (cpf) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(cpf !== "00058484230"){
            console.log(`Promise 1 reject`)
            reject(true)
        }else{
            console.log(`Promise 1`)
            resolve(true)
        }
    }, 1000)
})
let check2 = (cpf) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Promise 2`)
        resolve(true)
    }, 2000)
})
let check3 = (cpf) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Promise 3`)
        resolve(true)
    }, 3000)
})

const checking = async (cpf) => {
    try{
        const c1 = await check1(cpf)
        const c2 = await check2(cpf)
        const c3 = await check3(cpf)
    }catch(e){
        console.log(`Parou verificacao para o cpf... ${cpf}`)
    }
}

const listaCpfs = ["00058484230", "47532571009", "123456789"]

const mainChecking = async ()=>{
    listaCpfs.forEach(async (cpf)=>{
        return await checking(cpf)
    })
}
mainChecking()