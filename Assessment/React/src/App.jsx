
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { checkCitizen, checkAge } from './AssesmentSlice'

function App() {

  const dispatch = useDispatch()
  const citizen = useSelector((state)=>state.citizen)
  const age = useSelector((state)=>state.age)

  return (
    <>
    <div>
      <p>Are you a Citizen : {citizen?"Yes":"No"}</p>
      <p>Are you over 21 : {age?"Yes":"No"}</p>
    </div> <br /><br />
      <label htmlFor="">Are you a Citizen</label>
      <input type="checkbox" onChange={()=>dispatch(checkCitizen(!citizen))} /> <br /><br />
      <label htmlFor="">Are you over 21</label>
      <input type="checkbox" onChange={()=>dispatch(checkAge(!age))} />
    </>
  )
}

export default App
