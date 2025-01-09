import { CircleSlash2, Crosshair, Sparkles } from 'lucide-react'
import React from 'react'

interface RecommandationsDisplayerProps {
    recommandations: string[]
}

const RecommandationsDisplayer = ({ recommandations }: RecommandationsDisplayerProps) => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <h4 className='text-xl text-gray-800 text-center font-semibold flex items-center'>
                <span><Sparkles className='w-6 h-6 text-primary animate-bounce' /></span>
                <span className='mx-2'>Recommandations de</span>
                Comments<span className='text-primary'>Analysis</span>
            </h4>

            <ul className='p-2 pl-3 flex flex-col gap-3'>
                {
                    recommandations.length ? (
                        recommandations.map((recommandation, index) => (
                            <li key={index} className='text-xl flex items-center gap-2'>
                                <Crosshair className='w-4 h-4 text-orange-400' />
                                {recommandation}
                            </li>
                        ))
                    ) : (
                        <div className='w-full items-center justify-center'>
                            <p className='text-lg flex items-center gap-1'>
                                <CircleSlash2 className='w-6 h-6 text-destructive' />
                                Aucune suggestion pertinente
                            </p>
                        </div>
                    )
                }
            </ul>
        </div>
    )
}

export default RecommandationsDisplayer