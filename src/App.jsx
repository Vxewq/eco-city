import { Typography, Card } from "@material-tailwind/react";
import { Route, Router } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./component/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" element={<Home />} />
      </Router>
    </>
  );
}
