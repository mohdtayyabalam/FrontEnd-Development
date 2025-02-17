import React from 'react'

export default function Fruit() {

    const fruits = ["apple", "banana", "orange", "mango"]

  return (
    <div>
        The name of the fruits are :: 
        <ul>
            {
                fruits.map((i)=>{
                    return <li>{i}</li>
                })
            }
        </ul>
    </div>
  )
}
