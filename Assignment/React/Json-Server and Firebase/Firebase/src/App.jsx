import { useEffect, useState } from 'react'
import { db } from '../Firebase'
import { collection, addDoc, query, onSnapshot, deleteDoc, getDoc, updateDoc, doc } from 'firebase/firestore'
import './App.css'

function App() {

  const [userId, setUserId] = useState(null)
  const [data, setData] = useState({
    name:'',
    age:''
  })
  const [allData, setAllData] = useState([])

  const handleChange = (e)=>{
    const {name, value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const saveData = async(e)=>{
    e.preventDefault()

    if(userId!==null){
      const docRef = doc(db, "userinfo", userId)
      await updateDoc(docRef, data)
      setUserId(null)
    }
    else{
      await addDoc(collection(db, "userinfo"), data)
    }
    
    setData({
       name:'',
       age:''
    })
  }

  useEffect(()=>{
    const q = query(collection(db, "userinfo"))
    const sub = onSnapshot(q, (item)=>{
      let temp = []
      item.forEach((i)=>{
        temp.push({...i.data(), id:i.id})
      })
      setAllData(temp)
    })
    return ()=>sub()
    
  },[])

  const handleDelete = async(id)=>{
    await deleteDoc(doc(db, "userinfo", id))
  }

  const handleEdit = async(id)=>{
    const a = await getDoc(doc(db, "userinfo", id))
    setData(a.data())
    setUserId(id)
  }

  return (
    <>
      <form action="" onSubmit={saveData}>
        <label htmlFor="">Name :: </label>
        <input type="text" name='name' value={data.name} onChange={handleChange}/> <br /><br />
        <label htmlFor="">Age :: </label>
        <input type="number" name="age" value={data.age} onChange={handleChange}/> <br /><br />
        <input type="submit" />
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {
            allData.map((item)=>{
              return(
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><button onClick={()=>handleDelete(item.id)}>Delete</button></td>
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
