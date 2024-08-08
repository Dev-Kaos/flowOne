import { Route, Routes } from "react-router-dom";
import "./app.css";
import Administrador from "./components/Administrador";
import Login from "./components/Login";
import AdminUser from "./components/AdminUser";





function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin/" element={<Administrador />} >
          <Route path="Usuarios" element={<AdminUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
