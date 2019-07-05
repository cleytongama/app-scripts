const moment = require('./moment')

const characters = [
    { name: 'Professor', appearAt: '10/05/2017 10:10:10' },
    { name: 'Nairobi', appearAt: '10/05/2017 12:10:10' },
    { name: 'Tókyo', appearAt: '10/06/2017 07:10:10' },
    { name: 'Rio', appearAt: '10/06/2017 09:10:10' },
    { name: 'Denver', appearAt: '10/07/2018 11:10:10' },
    { name: 'Berlim', appearAt: '10/07/2018 17:10:10' },
    { name: 'Helsinque', appearAt: '15/04/2017 12:10:10' },
    { name: 'Moscou', appearAt: '15/04/2017 12:10:10' },
    { name: 'Raquel Murillo', appearAt: '10/09/2020 07:10:10' }
]

const dateFormat = 'DD/MM/YYYY HH:mm:ss'

const getCharacterByName = (name) => characters.find(character => character.name === name)

const getAllCharacterWhoAppearedAfterAnyone = (name) => {
    const mRioDate = moment(getCharacterByName(name).appearAt, dateFormat)

    return characters.filter(character => {
        const mCurrentDate = moment(character.appearAt, dateFormat)

        return mCurrentDate.isAfter(mRioDate)
    })
}

console.log(getAllCharacterWhoAppearedAfterAnyone('Rio'))