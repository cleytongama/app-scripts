import React from 'react'

const MostraTempo = (props)=>{
    const { tempo } = props
    const minuto = Math.floor(tempo / 60)
    const segundo = tempo % 60
    const segundoStr = segundo < 10 ? `${0}` + segundo : segundo
    const minutoStr = minuto < 10 ? `${0}` + minuto : minuto
    return (<p> {`${minutoStr}:${segundoStr}`} <br /> Tempo médio por volta</p>)
}

export default MostraTempo