import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import CreateNews from "./pages/page2/page1";
import { Card, Typography } from "@material-tailwind/react";

export default function App() {
  return (
   <>
   <img src="" alt="" />
   <Routes>
    <Route path="/create" element={<CreateNews/>}/>
     </Routes>
   
   </>
  );
}
