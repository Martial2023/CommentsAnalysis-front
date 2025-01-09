import { Activity, ChartScatter, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='top-0 left-0 fixed w-64 h-full bg-gray-800 text-white z-50'>
            <h2 className='text-xl font-bold p-4 flex items-center'>
                <Activity className='h-6 w-6' />
                Comments<span className='text-primary'>Analysis</span>
            </h2>

            <nav className='space-y-4 p-2 overflow-x-hidden'>	
                <div className='p-4 flex items-center space-x-2 text-xl hover:translate-x-4 hover:bg-gray-50/5 rounded-md transition-all'>
                    <Link href='/' className='flex items-center gap-3'>
                        <span className='p-2 rounded-md bg-gray-600/10'>
                            <Home className='h-6 w-6 text-blue-600' />
                        </span>
                        Home
                    </Link>
                </div>
                
                <div className='p-4 flex items-center space-x-2 text-xl hover:translate-x-4 hover:bg-gray-50/5 rounded-md transition-all'>
                    <Link href='/analyse' className='flex items-center gap-3'>
                        <span className='p-2 rounded-md bg-orange-600/10'>
                            <ChartScatter className='h-6 w-6 text-orange-600' />
                        </span>
                        Analyse
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar