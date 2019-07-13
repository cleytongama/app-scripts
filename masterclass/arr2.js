const languages = [
    {
        name: "Angular.js",
        contributors:1
    },
    {
        name: "Ember.js",
        contributors:7
    },
    {
        name: "Vue.j",
        contributors:2
    }
]

// const result =  languages.every(function(framework){
//     return framework.name.includes("js")
// })
const result =  languages.reduce(function(acc, current, index, array){
    return acc + current.contributors
}, 0)

console.log(result)