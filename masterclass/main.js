const comando = "create table author (id number, name string, age number, city string, state string, country string)"

const regex = /create table ([a-z]+) \((.+)\)/

const parseStatement = comando.match(regex)

const tableName = parseStatement[1]

let columns = parseStatement[2]

columns = columns.split(", ")
console.log(columns)

const database = {
    tables: {
        [tableName]: {
            columns: {},
            data:[]
        }
    }
}
for (let column of columns) {

    column = column.split(" ")

    const type = column[1]
    const name = column[0]

    database.tables[tableName].columns[name] = type
}

console.log(JSON.stringify(database, undefined, " "))