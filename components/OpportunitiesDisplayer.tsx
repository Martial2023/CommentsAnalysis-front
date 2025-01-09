import { CircleSlash2, Crosshair, ShoppingCart } from 'lucide-react'
import React from 'react'


interface OpportunitiesDisplayerProps {
    opportunities: string[]
}

const OpportunitiesDisplayer = ({ opportunities } : OpportunitiesDisplayerProps) => {
    return (
        <div className='w-full p-3 rounded-xl shadow-xl bg-purple-400/20'>
            <h5 className="my-3 text-xl text-center to-gray-800 flex gap-1 items-center justify-center">
                <ShoppingCart className='w-6 h-6 text-destructive' />
                Opportunités de vente ({opportunities.length})
            </h5>

            <ul className='p-2 pl-3 flex flex-col gap-3'>
                {
                    opportunities.length ? (
                        opportunities.map((opportunity, index) => (
                            <li key={index} className='flex items-center gap-2 text-sm'>
                                <Crosshair className='w-4 h-4 text-orange-400 font-bold' />
                                {opportunity}
                            </li>
                        ))
                    ) : (
                        <div className='w-full items-center justify-center'>
                            <p className='text-sm justify-center flex items-center gap-1'>
                                <CircleSlash2 className='w-6 h-6 text-destructive' />
                                Aucune suggestion d'opportunité de vente pertinente
                            </p>
                        </div>
                    )
                }
            </ul>
        </div>
    )
}

export default OpportunitiesDisplayer