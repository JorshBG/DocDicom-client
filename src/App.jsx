// import Form from "./componentes/Form";
// import Log from "./componentes/Log";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
