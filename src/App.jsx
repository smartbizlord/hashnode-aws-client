import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Homepage from "./Pages/Homepage/Homepage";
import NotFound from "./Pages/NotFound/NotFound";
scroll()

function App() {


  return (
    <>
     <Routes> 
       <Route path="/" element={<Homepage/>}/> 
       <Route path="*" element={<NotFound/>}/>
      
     </Routes> 
    </>
  )
}

export default App
