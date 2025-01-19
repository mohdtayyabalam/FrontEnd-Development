import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        The value of the Counter is {count} <br></br>
        <button onClick={()=>setCount(count+1)}>Click to Increase</button>
    </div>
  )
}
