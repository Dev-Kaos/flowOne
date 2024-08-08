import { Avatar, Badge, Button, Card } from "flowbite-react";
import { GrEdit } from "react-icons/gr";

export function AdminInicio() {
    return (
        <>
            <div className="mt-6 grid min-h-screen min-w-full grid-cols-3 justify-items-center gap-1">

                <section className="col-span-2">
                    <div className="flex">
                        <Card
                            className="max-w-3xl"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="https://picsum.photos/400/200"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Evento (Noteworthy technology acquisitions 2024)
                            </h5>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">1 de Agosto 2024 10:23:00</p>
                            
                            

                            <div className="flex flex-wrap gap-2">
                                <Badge color="info">Default</Badge>
                                <Badge color="gray">Dark</Badge>
                                <Badge color="failure">Failure</Badge>
                                <Badge color="success">Success</Badge>
                                <Badge color="warning">Warning</Badge>
                                <Badge color="indigo">Indigo</Badge>
                                <Badge color="purple">Purple</Badge>
                                <Badge color="pink">Pink</Badge>
                            </div>
                            <p className="mt-3 font-normal text-gray-700 dark:text-gray-400">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus delectus quia voluptas corporis, molestiae id, atque repellendus molestias nihil aliquam accusamus voluptates alias cupiditate deleniti iusto repellat nam. Officiis perferendis, deleniti facilis reiciendis voluptatum tenetur quod doloribus cum! Odit dignissimos qui temporibus dolorum necessitatibus iusto veritatis velit, nesciunt rerum? Aliquam.
                            </p>
                            <div className="flow-root">
                                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li className="py-3 sm:py-4" onClick={() => alert('Profile clicked!')}>
                                        
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="shrink-0">
                                            </div>
                                            <div className="flex min-w-0 flex-1 justify-start">
                                                <Avatar img="https://unavatar.io/midudev" rounded>
                                                    <div className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                                        <div>Michael Gough</div>
                                                        <div className="truncate text-sm font-normal text-gray-500 dark:text-gray-400">email@windster.com</div>
                                                    </div>
                                                </Avatar>
                                            </div>
                                            <div className="inline-flex items-center text-base font-normal text-gray-900 dark:text-white"> 
                                            <Button gradientDuoTone="purpleToBlue" className="font-normal">
                                                
                                                <GrEdit className="mr-2 size-4 font-light" />
                                                Editar
                                            </Button>                                           
                                            </div>
                                        </div>
                                    </li>                                                                       
                                </ul>
                            </div>
                        </Card>
                    </div>
                </section>
                <aside className="">
                    <Card className="min-w-80 max-w-96">
                        <div className="mb-4 flex items-center justify-between">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Historial</h5>
                            <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Ver Todo
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4" onClick={() => alert('Profile clicked!')}>
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">

                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Evento (Noteworthy technology acquisitions 2024)</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">1 de Agosto 2024 10:23:00</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <Avatar img="https://unavatar.io/midudev" rounded>                                                    
                                        </Avatar>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="shrink-0">
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis nesciunt unde laborum expedita numquam harum officia! Quod, rerum sint!</p>
                                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </Card>

                </aside>
            </div>
        </>
    );
}
export default AdminInicio;