// var temp = "cafe_-.ti.ria@#    !";
// temp = temp.replace(/[^a-zA-Z0-9]+/g,'');

// console.log(temp)
let comando = "create table author (id number, name string, age number, city string, state string, country string)"

function extractNameTable(comando){
    comando = comando.match(/create table (\w+)/)
    let tableName = comando[1];
    return tableName;
}

function extractColumn(comando){
    // comando = comando.match(/[^\(][\w\s\,]+\)$/g);
    comando = comando.match(/\((.+)\)/);
    // let tableColumn = comando[0].replace(/\)+/g, "").split(",");
    return comando[1].split(", ");
}


// console.log(extractNameTable(comando))
console.log(extractColumn(comando))
