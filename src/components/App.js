
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  
  const [num, setNum] = useState(0);

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {num} times</p>
        <button onClick={()=>setNum(num+1)}>Click me</button>
    </div>
  )
}

export default App
