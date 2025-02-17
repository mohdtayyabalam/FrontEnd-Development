import React, { useRef} from 'react'

export default function RefCounter() {
    const a = useRef(0)
    const handleUpdate = () => {
        a.current = a.current + 1
        console.log(a.current)
    }
    return (
        <div>
            The Value of a is {a.current}, created with userRef which prevents re-render<br /><br /> 
            <button onClick={handleUpdate}>Click Me</button>
        </div>
    )
}
