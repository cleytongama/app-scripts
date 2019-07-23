
function DatabaseError(statement, message) {
    this.statement = statement;
    this.message = message;
}


const database = {
    tables: {},
    createTable(comando) {
        const regex = /create table ([a-z]+) \((.+)\)/
        const parseStatement = comando.match(regex)
        const tableName = parseStatement[1]

        this.tables[tableName] = {
            columns: {},
            data: []
        }

        let columns = parseStatement[2]

        console.log(columns)
        return;
        columns = columns.split(", ")

        for (let column of columns) {
            column = column.split(" ")
            const type = column[1]
            const name = column[0]
            this.tables[tableName].columns[name] = type
        }
    },
    insert(comando) {
        const regex = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
        const parseStatement = comando.match(regex);
        let [, tableName, columns, values] = parseStatement
        let row = {};
        columns = columns.split(", ");
        values = values.split(", ");

        for (let i = 0; i < columns.length; i++) {
            let column = columns[i];
            let value = values[i];
            row[column] = value
        }
        this.tables[tableName].data.push(row)

    },
    select(comando) {
        const regex = /select (.+) from (.+)/;
        const regexWhere = /where (.+) = (.+)/;
        const parseStatement = comando.match(regex);
        let columnWhere = null;
        let valueWhere = null;
        let selectValues = null;

        let [, columns, tableName] = parseStatement;
        columns = columns.split(", ")

        let existWhere = tableName.includes("where");

        if (existWhere) {
            let statementWhere = tableName.match(regexWhere);

            [, columnWhere, valueWhere] = statementWhere;

            tableName = tableName.split("where")[0].trim(); // tabele Name

            selectValues = this.tables[tableName].data.filter(function (item) {
                return item[columnWhere] === valueWhere
            });
            
        }

        selectValues = (selectValues) ? selectValues : this.tables[tableName].data;

        selectValues = selectValues.map(function (item, index, array) {
            let row = {}
            columns.forEach(element => {
                row[element] = item[element];
            });
            return row
        });

        return selectValues;
    },
    execute(statement) {
        if (statement.startsWith("create table")) {
            return this.createTable(statement)
        }
        if (statement.startsWith("insert into")) {
            return this.insert(statement)
        }
        if (statement.startsWith("select")) {
            return this.select(statement)
        }
        const message = `Syntax error: "${statement}"`

        throw new DatabaseError(statement, message);
    }
}

try {
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    console.log(JSON.stringify(database.execute("select name, age from author"), undefined, " "));
    console.log(JSON.stringify(database.execute("select name, age from author where id = 1"), undefined, " "));
    // database.execute("select name, age from author where id = 1");
} catch (e) {
    console.log(e.message)
}
// console.log(JSON.stringify(database, undefined, " "))
