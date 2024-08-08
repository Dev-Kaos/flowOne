
import { Link } from "react-router-dom";
import { DarkThemeToggle, Navbar } from "flowbite-react";

export function NavOne() {
    return (
        <Navbar>
            <Navbar.Brand href="#">
                <img src="/favicon.svg" className="mr-3 h-6 dark:text-white sm:h-9" alt="Inscap Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Inscap</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link href="#" >

                    <Link to='/'>Login</Link>
                </Navbar.Link>

                <Navbar.Link >
                    <Link to='/Admin'>Admin</Link>
                </Navbar.Link>
            </Navbar.Collapse>
            <div className=" ">
                <div className="">                    
                </div>
            <DarkThemeToggle className="" />
            </div>

        </Navbar>
    );
}

export default NavOne;
