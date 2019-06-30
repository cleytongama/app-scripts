let comando = "create table author (id number, name string, age number, city string, state string, country string)"

function extractNameTable(stringQuery) {
    stringQuery = stringQuery.match(/create table (\w+)/)
    let tableName = stringQuery[1];
    return tableName;
}

function extractColumn(stringQuery) {
    stringQuery = stringQuery.match(/\((.+)\)/);
    return stringQuery[1].split(", ");
}

function formartColumns(stringQuery) {
    const fieldsTables = extractColumn(stringQuery);
    let columns = {}

    for (let a of fieldsTables) {
        let valueColumn = a.split(" ")
        let columnIndex = valueColumn[0]
        let columnValue = valueColumn[1]
        columns[columnIndex] = columnValue
    }
    return columns
}

function createTableObject(stringQuery) {
    const nameTable = extractNameTable(stringQuery)
    const columnsTable = formartColumns(stringQuery)
    const objectTable = {
        tables: {}
    }
    objectTable.tables[nameTable] = {
        columns: columnsTable
    }
    
    return JSON.stringify(objectTable);
}

console.log(createTableObject(comando))

