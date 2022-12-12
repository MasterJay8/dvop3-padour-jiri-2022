import React from 'react'

const Card = (props) => {
    console.log("Props:",props)
    const {data} = props;
  return (
    <div><p>Card: {data}</p>
    </div>
    
  )
}

export const CardBlue = (props) => {
    console.log("Props: ",props)
    const {data} = props;
  return (
    <div>CardBlue: {data}</div>
  )
}

export default Card