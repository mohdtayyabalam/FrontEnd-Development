import ClassTask from "./Components/ClassTask"
import Greeting from "./Components/Greeting"
import Para from "./Components/Para"
import Heading from "./Components/Heading"
import UserCard from "./Components/UserCard"
import Counter from "./Components/Counter"


function App() {

  return (
    <>
      <Heading/>
      <Para/>
      <Greeting name='aman'/>
      <ClassTask/>
      <UserCard name={'Aman'} age={'23'} location={'Ahmedabad'}/>
      <Counter/>
    </>
  )
}

export default App  
