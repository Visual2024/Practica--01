import React, { useState } from 'react'

export const Navbar = () => {
    const [categorias, setCategoria] = useState(false)


    return (
        <>
            <header className=''>
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>


                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>


                                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>


                                </button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">


                                <div className='flex flex-row justify-between w-full'>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="flex space-x-4">
                                            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">SuperMark</a>
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center justify-center sm:flex-none'>
                                        <div className='flex flex-row flex-wrap content-center bg-white p-2'>

                                            <i className="fa-solid fa-magnifying-glass inline-block ml-1 pt-[0.5%]"></i><input type="text" className='border-spacing-72 h-full w-64 sm:w-10 md:w-96 lg:w-128 xl:w-160 outline-none px-3' />
                                        </div>
                                    </div>

                                    <div className='flex flex-row content-center items-center justify-end '>
                                        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Mi Cuenta</a>



                                    </div>
                                    <div className='flex flex-row flex-wrap content-center items-center justify-center'>
                                        <i class="fa-solid fa-cart-plus icon text-center pt-[10%]"></i>
                                    </div>
                                </div>

                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                            </div>
                        </div>
                    </div>


                </nav>
                <div className='navegacion-categoi bg-red-500 h-14 flex '>
                    <div className='flex flex-row justify-between w-full content-center'>
                        <ul className="sm:ml-6 sm:bloc flex flex-row flex-wrap content-center justify-center">
                            <button onClick={() => setCategoria(!categorias)} className='text-lg'>
                                <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium text-center px-2" aria-current="page">Categorias<i class="fa-solid fa-bars pl-2 "></i></a>
                            </button>
                            {categorias && (
                                <ul className='relative bottom-[75%] bg-black text-white w-[8%]  flex flex-col items-start'>
                                    <li>
                                        <button className='hover:underline text-sm text-center'>Oferta del Dia</button>
                                    </li>
                                    <li>
                                        <button className='hover:underline text-sm text-center'>Punto de Entrega</button>
                                    </li>
                                    <li>
                                        <button className='hover:underline text-sm text-center'>Club Panda</button>
                                    </li>

                                </ul>
                            )}
                        </ul>



                        <div className='flex flex-row content-center items-center justify-end '>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Ofertas del Dia</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Punto de Entrega</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Club Panda</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Panda Delivery</a>
                            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contacto</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
