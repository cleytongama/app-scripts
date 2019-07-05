
const database = {

    createTable(comando) {
        const regex = /create table ([a-z]+) \((.+)\)/
        const parseStatement = comando.match(regex)
        const tableName = parseStatement[1]
        let columns = parseStatement[2]

        columns = columns.split(", ")

        const tables = {
            [tableName]: {
                columns: {},
                data: []
            }
        }

        for (let column of columns) {
            column = column.split(" ")
            const type = column[1]
            const name = column[0]
            tables[tableName].columns[name] = type
        }
        return tables;
    },
    execute(comando) {
       return this.createTable(comando)
    }
}


const comando = "create table author (id number, name string, age number, city string, state string, country string)"
// console.log(JSON.stringify(database.createTable(), undefined, " "))
console.log(JSON.stringify(database.execute(comando), undefined, ""))

