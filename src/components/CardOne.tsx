
"use client";

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function CardOne({ opcion, }) {
    return (

        <>
            <Card className='max-w-sm' imgSrc="htps://picsum.photos/200/300">
                <svg className="size-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z" />
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
                <div className="flex items-center justify-center text-gray-900 dark:text-white">
                    <span className="text-5xl font-extrabold tracking-tight">{opcion}</span>
                </div>
                <ul className="my-7 space-y-5">
                    <li className="flex space-x-3">
                        <svg className="size-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                        </svg>

                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Gestionar Usuarios</span>
                    </li>
                    <li className="flex space-x-3">
                        <svg className="size-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Matriculas</span>
                    </li>
                </ul>
                <Link to='/login'>
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                    >
                    Entrar
                </button>
                    </Link>
            </Card>
        </>

    );
}
export default CardOne;