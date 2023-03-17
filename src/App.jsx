import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./components/Login.jsx";
import SignIn from "./components/SignIn.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signing" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
