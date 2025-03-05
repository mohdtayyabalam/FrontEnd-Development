import { useState } from 'react'
import './App.css'
import { increment, decrement } from './CounterSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.value)

  return (
    <>
      <div>The Value of Counter is {count}</div>

      <button onClick={()=>dispatch(increment())}>increase</button>
      <button onClick={()=>dispatch(decrement())}>Decrease</button>
    </>
  ) 
}

export default App
