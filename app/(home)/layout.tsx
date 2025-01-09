import MobileMenu from '@/components/MobileMenu'
import Navbar from '@/components/Navbar'
import { ToggleTheme } from '@/components/toggle-theme'
import ScrollProgress from '@/components/ui/scroll-progress'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className='lg:pl-64 min-h-[100vh] w-full'>
            <ScrollProgress className="top-0" />
            <div className='hidden lg:block'>
                <Navbar />
            </div>
            <div className='fixed top-0 left-0 w-full flex items-center justify-between p-2 bg-transparent'>
                <MobileMenu />
                <ToggleTheme />
            </div>
            <main>
                <Toaster />
                {children}
            </main>
        </div>
    )
}

export default layout