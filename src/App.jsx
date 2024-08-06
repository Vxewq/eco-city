import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import CreateNews from "./pages/page2/page1";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/more" element={<CreateNews />} />
      </Routes>
      
    </>
  );
}
