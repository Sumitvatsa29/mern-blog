import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignUp";
import SignUp from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Home from "./pages/home";
import About from "./pages/About";
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/sign-in" element = {<SignIn />} />
        <Route path= "/sign-up" element = {<SignUp />} />
        <Route path="/dashboard" element = {<Dashboard />} />
        <Route path="/projects" element = {<Projects />} />

      </Routes>
    </BrowserRouter>
  )
}
 