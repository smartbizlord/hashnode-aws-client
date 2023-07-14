import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
scroll()

function App() {


  return (
    <>
     <Routes> 
       <Route path="/" element={<Homepage/>}/> 
      
     </Routes> 
    </>
  )
}

export default App
