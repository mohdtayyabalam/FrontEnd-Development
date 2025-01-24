import { BrowserRouter, Route, Routes } from "react-router-dom"
import List from "./Component/List"
import Home from './Component/Home'
import About from './Component/About'


function App() {

  return (
    <>

      

      <BrowserRouter>

      <List/>

      <Routes>

        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
