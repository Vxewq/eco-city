import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import CreateNews from "./pages/page2/page1";
import Landing from "./pages/landing";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/invest" element={<Home />} />

        <Route path="/more" element={<CreateNews />} />
      </Routes>
    </>
  );
}
