
import { Link } from "react-router-dom";
import { DarkThemeToggle, Navbar, Avatar, Dropdown, } from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";


export function NavOne() {
    return (
        <Navbar>
            <Navbar.Brand href="#">
                <img src="../../public/vite.svg" className="mr-3 h-6 dark:text-white sm:h-9" alt="Inscap Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Inscap</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link href="#" >
                    <Link to={"/Admin/Inicio"}>Inicio</Link>
                </Navbar.Link>
                <Navbar.Link >
                    <Link to={"/Admin/Usuarios"}>Usuarios</Link>
                </Navbar.Link>
                <Navbar.Link href="#" >
                    <Link to={"/Admin/Reportes"}>Reportes</Link>
                </Navbar.Link>
                <Navbar.Link>                
                    <Link to={"/Admin/Notas"}>Notas</Link>
                </Navbar.Link>                
            </Navbar.Collapse>
            <div className="flex gap-3">
                <div className="">
                </div>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Manuel V</span>
                            <span className="block truncate text-sm font-medium">manuel@gmail.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item icon={HiViewGrid}>Notificaciones</Dropdown.Item>
                        <Dropdown.Item icon={HiCog}>Ajustes</Dropdown.Item>
                        <Dropdown.Item icon={HiCurrencyDollar}>Pagos</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item icon={HiLogout}>Salir</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <DarkThemeToggle className="" />
            </div>


        </Navbar>
    );
}

export default NavOne;
