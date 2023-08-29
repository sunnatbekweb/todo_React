import React from 'react'
import { NavLink } from 'react-router-dom'

const index = () => {
    return (
        <header className='w-full border-b-2 border-black'>
            <div className="container">
                <nav className='flex items-center justify-between py-5'>
                    <a href="#" className='text-3xl font-bold'>LOGO</a>

                    <ul className='flex items-center gap-10'>
                        <li>
                            <NavLink to='' className='text-xl font-medium'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='' className='text-xl font-medium'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='' className='text-xl font-medium'>Service</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default index