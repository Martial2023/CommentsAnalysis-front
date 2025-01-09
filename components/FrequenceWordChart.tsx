import React from 'react'
import { CloudHail } from 'lucide-react'
import { WordCloudComponent } from './WordCloudComponent';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from './ui/button';


type Word = { text: string; value: number };

type Props = {
  frequenceWordsList: Word[];
};

const FrequenceWordChart = ({ frequenceWordsList }: Props) => {

  return (
    <div className='my-4 w-full p-3 flex flex-col justify-center items-center gap-3'>
      <h5 className='text-xl text-gray-800 flex items-center justify-center gap-1'>
        <CloudHail className='w-6 h-6 text-green-500' />
        Nuage de mots
      </h5>

      <div
        className='max-w-[380px] min-w-[360px] md:min-w-full md:w-full h-[360px] md:h-[400px] overflow-hidden bg-purple-400/20 rounded-xl shadow-xl cursor-pointer p-2 flex items-center justify-center'
        onClick={() => document.getElementById('popupCloud')?.click()}
      >
        <WordCloudComponent frequenceWordsList={frequenceWordsList} />
      </div>

      <AlertDialog>
        <AlertDialogTrigger id='popupCloud' className='hidden'>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className='text-xl text-gray-800 flex items-center justify-center gap-1'>
              <CloudHail className='w-6 h-6 text-green-500' />
              Nuage des Mots
            </AlertDialogTitle>
            <AlertDialogDescription className='text-center'>
              Répartition spatiale des mots les plus fréquents sur le produit
            </AlertDialogDescription>
          </AlertDialogHeader>

          <WordCloudComponent frequenceWordsList={frequenceWordsList} />

          <AlertDialogFooter>
            <AlertDialogAction asChild>
              <Button variant={"destructive"}>
                Fermer
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>


    </div>
  )
}

export default FrequenceWordChart