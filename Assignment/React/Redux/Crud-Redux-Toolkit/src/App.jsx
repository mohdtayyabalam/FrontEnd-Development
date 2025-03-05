import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { add, del, upd } from './CrudSlice'
 
function App() {

  const [data, setData] = useState({
    name:'',
    age:''
  })
  const [userId, setUserId] = useState(null)
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.crud.userinfo) // this goto store then from there reducers 

  const handleChange = (e)=>{
    const {name, value} = e.target
    setData({
      ...data, 
      [name]: value
    })
  }                                                                     

  const saveData = (e)=>{
    e.preventDefault()
    if(userId !== null){
      dispatch(upd({userId, data}))
      setUserId(null)
    }
    else{
      dispatch(add(data))
    } 
    setData({
      name:'',
      age:''
    })
  }

  const handleEdit = (id)=>{
    let res = userData.find((item)=>{
      return item.id === id
    })
    setData(res)
    setUserId(id)
  }

  return (
    <>
      <form action="" onSubmit={saveData}>
        <label htmlFor="">Name :: </label>
        <input type="text" name='name' value={data.name} onChange={handleChange}/> <br /><br />
        <label htmlFor="">Age :: </label>
        <input type="number" name='age' value={data.age} onChange={handleChange}/> <br /><br />
        <input type="submit" />
      </form>
      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        {
          userData.map((item)=>{
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><button onClick={()=>dispatch(del(item.id))}>Delete</button></td>
                <td><button onClick={()=>handleEdit(item.id)}>Edit</button></td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </>
  )
}

export default App
