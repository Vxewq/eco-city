import { Route, Routes } from "react-router-dom";
import CreateNews from "./page/page2/more";

export default function App() {
  return (
  <>
  
  <Routes>
    <Route path="/"  element={<CreateNews/>}/>
  </Routes>
 
  
  
  </>
  );
}
