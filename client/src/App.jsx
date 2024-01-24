import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />}  />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}
