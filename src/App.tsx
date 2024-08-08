import { Route, Routes } from "react-router-dom";
import "./app.css";
import Administrador from "./components/Admin/Administrador";
import Login from "./components/Login";
import AdminUser from "./components/Admin/AdminUser";
import AdminInicio from "./components/Admin/AdminInicio";
import AdminNotas from "./components/Admin/AdminNotas";
import AdminReportes from "./components/Admin/AdminReportes";





function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin/" element={<Administrador />} >
          <Route path="Inicio" element={<AdminInicio />} />
          <Route path="Usuarios" element={<AdminUser />} />
          <Route path="Reportes" element={<AdminReportes />} />
          <Route path="Notas" element={<AdminNotas />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
