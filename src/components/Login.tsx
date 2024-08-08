"use client";

import {
    Button,
    Card,
    Checkbox,
    Label,
    TextInput,
    Footer,
} from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";
import { IoHelp } from "react-icons/io5";

export function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center gap-4 ">
            <Card className="max-w-sm">
                <form className="flex flex-col gap-4 ">
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="usuario" value="Cuenta" />
                        </div>
                        <TextInput
                            id="usuario"
                            rightIcon={FaUser}
                            placeholder="usuario123"
                            required
                        />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Contraseña" />
                        </div>
                        <TextInput
                            id="usuario"
                            type="password"
                            rightIcon={FaKey}
                            placeholder="claveFalsa123"
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="recordar" />
                        <Label htmlFor="recordar">Recordar Cuenta</Label>
                    </div>
                    <Button type="submit" gradientDuoTone="purpleToBlue" className="mt-6">Entrar</Button>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="py-3 sm:py-4">
                            </li>
                            <li className="justify-center pb-0 pt-3 sm:pt-4">
                                <div className="flex justify-center">
                                    
                                <Button outline gradientDuoTone="purpleToBlue">
                                    Necesitas Ayuda
                                    <IoHelp className="ml-2 size-5" />
                                </Button >
                                </div>
                            </li>
                        </ul>
                    </div>
                </form>
            </Card>
            <Footer container className="fixed bottom-0">
                <Footer.Copyright href="#" by="Made with ♥ and Vue" year={2024} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">
                        <Footer.Icon href="#" icon={BsFacebook} />
                    </Footer.Link>
                    <Footer.Link href="#">
                        <Footer.Icon href="#" icon={BsTwitter} />
                    </Footer.Link>
                    <Footer.Link href="#">
                        <Footer.Icon href="#" icon={BsInstagram} />
                    </Footer.Link>
                    <Footer.Link href="#">
                        <Footer.Icon href="#" icon={FaTiktok} />
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    );
}
export default Login;
