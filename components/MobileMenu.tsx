import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Navbar from './Navbar'


const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger className=''>
                <div className='text-xl p-2 rounded-md bg-primary/50 text-white'>
                    <Menu className='text-2xl btn' />
                </div>
            </SheetTrigger>
            <SheetContent side={'left'} className='w-64'>
                <SheetHeader>
                    <SheetTitle className='hidden'></SheetTitle>
                </SheetHeader>
                <Navbar />
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu