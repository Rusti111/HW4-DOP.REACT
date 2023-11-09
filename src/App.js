import Watch from "./watch";
import { useState } from "react";


function App() {
  const [num, setNum] = useState();
  return (
    <div >
      <h1>{num}</h1>




      <Watch num={num} setNum={setNum}/>
    </div>

  );
}

export default App;
