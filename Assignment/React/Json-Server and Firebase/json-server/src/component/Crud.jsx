import React, { useEffect, useState } from "react";
import axios from "axios";

const Crud = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [allData, setAllData] = useState([]);
  const [userId, setUserId] = useState(null)

  const disp = () => {
    axios.get("http://localhost:3000/user").then((res) => setAllData(res.data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    if(userId!==null){
      axios.put(`http://localhost:3000/user/${userId}`, data).then(()=>disp())
      setUserId(null) 
    }else{
      axios.post("http://localhost:3000/user", data).then(()=>disp())
    }
    setData({
      name: "",
      age: "",
    });
  };

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:3000/user/${id}`).then(()=>disp())
  }

  const handleEdit = (id)=>{
    axios.patch(`http://localhost:3000/user/${id}`)
    let res = allData.find((item)=>{
      return item.id === id
    })
    setData(res)
    setUserId(id)
  }

  useEffect(() => {
    disp();
  }, []);

  return (
    <div>
      <form action="" onSubmit={submitData}>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Age : </label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>

      <table border={2} cellPadding={5} cellSpacing={5}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {allData.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={()=>handleDelete(item.id)}>Delete</button>
                  <button onClick={()=>handleEdit(item.id)}>Edit</button>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
