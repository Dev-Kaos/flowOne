import { Link, Outlet } from "react-router-dom";
import NavOne from "./NavOne";

export function Administrador() {
    return (
        <>
            <NavOne />
            <Outlet/>
            <Link to={"/Admin/Usuarios"}>
            aver que pasa
            </Link>
        </>
    );
}
export default Administrador;