export default class Parser {

    constructor() {
        this.initDataMap = [
            ["select", /select (.+) from ([a-z]+)(?: where (.+))?/],
            ["createTable", /create table ([a-z]+) \((.+)\)/],
            ["insert", /insert into ([a-z]+) \((.+)\) values \((.+)\)/],
            ["delete", /delete from ([a-z]+)(?: where (.+))?/]
        ]

        this.comands = new Map(this.initDataMap)
    }


    parse(statement) {
        for (let [name, value] of this.comands) {
            const parsedStatement = statement.match(value);
            if (parsedStatement) {
                return {
                    command: name,
                    parsedStatement
                }
            }
        }
    }
}