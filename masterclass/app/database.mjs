import Parser from './parser'
import DatabaseError from './database-error'

export default class Database {
    constructor() {
        this.tables = {};
        this.parser = new Parser()
    }

    createTable(parseStatement) {
        const tableName = parseStatement[1]

        this.tables[tableName] = {
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
    }

    insert(parseStatement) {
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
    }

    select(parseStatement) {
        let [, columns, tableName, whereClause] = parseStatement;
        columns = columns.split(", ")
        let rows = this.tables[tableName].data;
        if (whereClause) {
            const [columnWhere, valueWhere] = whereClause.split(" = ")
            rows = rows.filter(function (row) {
                return row[columnWhere] === valueWhere
            })
        }

        rows = rows.map(function (row) {
            let selectedRow = {};
            columns.forEach(column => {
                selectedRow[column] = row[column]
            });
            return selectedRow;
        })
        return rows;
    }
    delete(parseStatement) {

        let [, tableName, whereClause] = parseStatement;

        if (whereClause) {

            whereClause = whereClause.split(" = ")

            let rows = this.tables[tableName].data;

            const [columnWhere, valueWhere] = whereClause

            rows = rows.filter(function (row) {
                return row[columnWhere] !== valueWhere
            })

            this.tables[tableName].data = rows;
        } else {
            this.tables[tableName].data = [];
        }
    }

    execute(statement) {

        const { command, parsedStatement } = this.parser.parse(statement);

        if (command) {
            return this[command](parsedStatement);
        }

        const message = `Syntax error: "${statement}"`
        throw new DatabaseError(statement, message);
    }
}