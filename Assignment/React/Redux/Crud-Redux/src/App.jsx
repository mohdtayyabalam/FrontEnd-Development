import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, del, upd } from "./Action";

function App() {
  const allData = useSelector((state) => state.userinfo);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null)
  const [data, setData] = useState({
    name:'',
    age:''
  })

  const handleChange = (e)=>{
    const {name, value} = e.target
    setData({
      ...data,
      [name]:value
    })
  }

  const saveData = (e)=>{
    e.preventDefault()
    if(userId !== null){
      dispatch(upd({userId,data}))
      setUserId(null)
    }else{
      dispatch(add(data))
    }   
    setData({
      name:'',
      age:''
    })
  }

  const handleEdit = (id)=>{
    let res = allData.find((_,index)=>{
      return index === id
    })
    setData(res)
    setUserId(id)
  }

  return (
    <>
      <form action="" onSubmit={saveData}>
        <label htmlFor="">Name :: </label>
        <input type="text" name="name" value={data.name} onChange={handleChange}/> <br />
        <br />
        <label htmlFor="">Age :: </label>
        <input type="number" name="age" value={data.age} onChange={handleChange}/> <br />  
        <br />
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
            allData.map((item, index)=>{
              return <tr key={index}>  
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><button onClick={()=>dispatch(del(index))}>Delete</button></td>
                <td><button onClick={()=>handleEdit(index)}>Edit</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
