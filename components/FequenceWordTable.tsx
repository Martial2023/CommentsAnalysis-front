import { WholeWord } from 'lucide-react'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'


type Word = { text: string; value: number };

type Props = {
    frequenceWordsList: Word[];
};

const FequenceWordTable = ({ frequenceWordsList }: Props) => {
    return (
        <div className='w-full p-3'>
            <h5 className='text-xl text-gray-800 my-3 flex items-center justify-center gap-1'>
                <WholeWord className='w-6 h-6 text-orange-500' />
                Mots Fréquents <span className='ml-2'>({ frequenceWordsList?.length? frequenceWordsList.length : '' })</span>
            </h5>

            <div className='w-full max-h-56 bg-purple-400/20 overflow-y-auto rounded-xl shadow-xl'>
                <Table className="rounded-xl shadow-xl p-3">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-sm text-center text-primary w-12">Idx</TableHead>
                            <TableHead className="text-xl text-center text-primary">Mots</TableHead>
                            <TableHead className="text-xl text-center text-primary w-fit">Fréquence</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {frequenceWordsList?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-sm">{index + 1}</TableCell>
                                <TableCell className="font-medium text-center">{item.text}</TableCell>
                                <TableCell className={`font-medium text-center`}>
                                    <p className={`p-1 rounded-xl`}>
                                        {item.value}
                                    </p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default FequenceWordTable