import React from 'react'

export default function UserCard({name, age, location}) {
  return (
    <div className='container'>
       <p> Name is {name} <br></br>
        Age is {age} <br></br>
        Location is {location} <br></br></p>
    </div>
  )
}
