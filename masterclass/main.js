

const database = {
    tables: {},
    createTable(comando) {
        const regex = /create table ([a-z]+) \((.+)\)/

        const parseStatement = comando.match(regex)

        const tableName = parseStatement[1]

        this.tables[tableName] ={
            columns: {},
            data: []
        }

        let columns = parseStatement[2]

        columns = columns.split(", ")

        for (let column of columns) {

            column = column.split(" ")

            const type = column[1]
            const name = column[0]

            this.tables[tableName].columns[name] = type
        }
    },
    execute(statement){
        if(statement.startsWith("create table")){
            return this.createTable(statement)
        }
    }

}

database.execute("create table author (id number, name string, age number, city string, state string, country string)")
// console.log(JSON.stringify(database, undefined, " "))
console.log(JSON.stringify(database, undefined, " "))
