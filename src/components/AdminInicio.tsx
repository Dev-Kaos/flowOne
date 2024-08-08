import NavOne from "./NavOne";
import CardOne from "./CardOne";

export function AdminInicio() {
    return (
        <>
            <NavOne />
            <div className="flex min-h-screen items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-6">
                    <CardOne opcion="Usuarios" />
                    <CardOne opcion="Notas" />
                    <CardOne opcion="Reportes" />
                </div>

            </div>
        </>
    );
}
export default AdminInicio;