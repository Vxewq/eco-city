import { Route, Routes } from "react-router-dom";
import CreateNews from "./page/page2/more";
import Navbar from "./component/navbar";
 




export default function App() {
  return (
  <>
  
  <Routes>
  <Route path="/"  element={<Navbar/>}/>
  
    <Route path="/more"  element={<CreateNews/>}/>
  </Routes>
 
  
  
  </>
  );
}
