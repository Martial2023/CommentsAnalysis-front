"use client"

import { TextAnimate } from '@/components/ui/text-animate'
import React, { useState } from 'react'
import ModalFile from '@/components/modalFile'
import ModalLink from '@/components/modalLink'
import Image from 'next/image'
import { CheckCheck, Component, Download, Meh, MessageCircleX, MessageSquareMore, RotateCw, SquareStack, TicketX, View } from 'lucide-react'
import { ChartDrawer } from '@/components/PieChart'
import { CommentsDisplayer } from '@/components/CommentsDisplayer'
import RecommandationsDisplayer from '@/components/RecommandationsDisplayer'
import CommentsChat from '@/components/CommentsChat'
import { Button } from '@/components/ui/button'
import FequenceWordTable from '@/components/FequenceWordTable'
import FrequenceWordChart from '@/components/FrequenceWordChart'
import OpportunitiesDisplayer from '@/components/OpportunitiesDisplayer'



interface CommentProps {
  id: number,
  Commentaire: string,
  nature: string
}

type messageType = {
  sender: "bot" | "user",
  text: string
}


type Word = {
  text: string;
  value: number
};


const page = () => {
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDataProcessed, setIsDataProcessed] = useState(false)
  const [nbreComments, setNbreComments] = useState(0)
  const [nbreCommentsDuplicated, setNbreCommentsDuplicated] = useState(0)
  const [nbreCommentsUnique, setNbreCommentsUnique] = useState(0)
  const [dfCommentsNature, setDfCommentsNature] = useState<CommentProps[]>([])
  const [commentsNatureCount, setCommentsNatureCount] = useState<number[]>([])
  const [recommandations, setRecommandations] = useState<string[]>([])
  const [frequenceWordsList, setFrequenceWordsList] = useState<Word[]>([])
  const [messages, setMessages] = useState<messageType[]>([
    { sender: 'bot', text: 'Bienvenue! Posez votre question.' },
  ]);
  const [opportunities, setOpportunities] = useState<string[]>([])


  return (
    <section className='mt-14'>
      {
        !isDataProcessed ? (
          <div className='flex-1'>
            <div className='flex flex-col gap-8 items-center justify-center w-full h-1/2 p-4'>
              <div className='flex items-center justify-center gap-2 w-full'>
                <Image src="/submit.svg"
                  alt="Submit"
                  width={50}
                  height={50}
                  className='dark:bg-white dark:rounded-xl dark:p-2'
                />
                <h4 className='text-4xl flex items-center font-semibold'>
                  Soumission des commentaires
                </h4>
              </div>
              {
                !isSubmitting ? (
                  <TextAnimate animation="slideLeft" by="character" className='text-xl mt-8 text-center'>
                    Soumettez vos commentaires dans un fichier .csv ou donner le lien de votre page de vente
                  </TextAnimate>
                ) : (
                  <TextAnimate animation="slideLeft" by="character" className='text-xl mt-8 text-center'>
                    Traitement des commentaires en cours...
                  </TextAnimate>
                )
              }



            </div>



            {
              isSubmitting ? (
                <div className='flex flex-col items-center justify-center w-full p-4 my-8 gap-3'>
                  <div className='p-3 bg-orange-400/10 rounded-2xl'>
                    <RotateCw className='w-8 h-8 text-orange-400 animate-spin' />
                  </div>

                  <Image src="/thinking.gif"
                    alt="Comments"
                    width={150}
                    height={150}
                    className='rounded-xl'
                  />
                </div>
              ) : (
                <div className='mt-8 flex flex-col md:flex-row gap-4 items-center justify-center w-full p-4'>
                  <ModalFile
                    file={file}
                    setFile={setFile}
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    setNbreComments={setNbreComments}
                    setNbreCommentsDuplicated={setNbreCommentsDuplicated}
                    setNbreCommentsUnique={setNbreCommentsUnique}
                    setIsDataProcessed={setIsDataProcessed}
                    setDfCommentsNature={setDfCommentsNature}
                    setCommentsNatureCount={setCommentsNatureCount}
                    setRecommandations={setRecommandations}
                    setFrequenceWordsList={setFrequenceWordsList}
                    setOpportunities={setOpportunities}
                  />

                  <ModalLink
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                    setNbreComments={setNbreComments}
                    setNbreCommentsDuplicated={setNbreCommentsDuplicated}
                    setNbreCommentsUnique={setNbreCommentsUnique}
                    setIsDataProcessed={setIsDataProcessed}
                    setDfCommentsNature={setDfCommentsNature}
                    setCommentsNatureCount={setCommentsNatureCount}
                    setRecommandations={setRecommandations}
                    setFrequenceWordsList={setFrequenceWordsList}
                    setOpportunities={setOpportunities}
                  />
                </div>
              )
            }
          </div>
        ) : (
          <div className='min-h-[100vh] w-full grid grid-cols-1 md:grid-cols-6 gap-2 p-2 bg-gray-100 dark:bg-green-50/10'>
            <div className='w-full h-full md:col-span-4 p-2'>
              <div className='flex flex-col gap-3'>
                <div className='w-full md:h-44 flex flex-col md:flex-row gap-3'>
                  <div className='h-full w-full md:w-3/5 text-xl  rounded-xl shadow-xl dark:shadow-2xl p-2 hover:translate-y-[-12px] transition-all'>
                    <div className='flex items-center gap-3 mt-2'>
                      <div className='bg-yellow-400/20 p-1 rounded-xl'>
                        <MessageSquareMore className='text-yellow-400' />
                      </div>
                      <span className='font-normal text-gray-800'>commentaires</span>: <span className='text-yellow-500'>{nbreComments}</span>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                      <div className='bg-purple-400/30 p-1 rounded-xl'>
                        <SquareStack className='text-primary' />
                      </div>
                      <span className='font-normal text-gray-800'>Doublons</span>: <span className='text-primary'>{nbreCommentsDuplicated}</span>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                      <div className='bg-green-400/30 p-1 rounded-xl'>
                        <Component className='text-green-400' />
                      </div>
                      <span className='font-normal text-gray-800'>Uniques</span>: <span className='text-green-500'>{nbreCommentsUnique}</span>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                      <div className='bg-red-400/30 p-1 rounded-xl'>
                        <TicketX className='text-destructive' />
                      </div>
                      <span className='font-normal text-gray-800'>Nan</span>: <span className='text-destructive'>{0}</span>
                    </div>
                  </div>

                  <div className='h-full w-full md:w-2/5 p-1 pl-2 rounded-xl shadow-xl dark:shadow-2xl hover:translate-y-[-12px] transition-all'>
                    <h4 className='text-center text-sm font-bold lg:text-xl md:text-nowrap my-3'>Nature des commentaires</h4>
                    <div className='space-y-2 font-semibold pl-2'>
                      <div className='flex items-center gap-2'>
                        <div className='bg-blue-600/30 p-1 rounded-xl'>
                          <CheckCheck className='text-blue-400' />
                        </div>
                        <span className='text-blue-400'>Positif</span>: <span>{commentsNatureCount && commentsNatureCount[0] ? commentsNatureCount[0]+"%" : "0%"}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='bg-red-400/30 p-1 rounded-xl'>
                          <MessageCircleX className='text-destructive' />
                        </div>
                        <span className='text-destructive'>Négatif</span>: <span>{commentsNatureCount && commentsNatureCount.length > 1 && commentsNatureCount[1] ? commentsNatureCount[1]+"%" : "0%"}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='bg-yellow-400/30 p-1 rounded-xl'>
                          <Meh className='text-yellow-400' />
                        </div>
                        <span className='text-yellow-400'>Neutre</span>: <span>{commentsNatureCount && commentsNatureCount.length > 2 && commentsNatureCount[2]? commentsNatureCount[2]+"%" : "0%"}</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='w-full flex items-center justify-center my-4 h-84'>
                  <ChartDrawer
                    positifsCount={commentsNatureCount[0]? commentsNatureCount[0] : 0}
                    negatifsCount={commentsNatureCount[1]? commentsNatureCount[1] : 0}
                    neutralCount={commentsNatureCount[2]? commentsNatureCount[2] : 0}
                  />
                </div>

                <div className='w-full max-h-[400px] overflow-y-auto flex flex-col items-center justify-center rounded-xl shadow-xl'>
                  <h4 className='text-xl text-gray-800 text-center font-semibold flex items-center gap-2'>
                    <View className='text-orange-400' />
                    Aperçu des commentaires traités
                  </h4>
                  <CommentsDisplayer
                    commentsList={dfCommentsNature}
                  />
                </div>

                <div className='w-full my-4 space-y-3 rounded-xl shadow-xl'>
                  <RecommandationsDisplayer
                    recommandations={recommandations}
                  />
                </div>

                <div className='hidden md:block'>
                  <CommentsChat
                    messages={messages}
                    setMessages={setMessages}
                  />
                </div>
              </div>
            </div>

            <div className='w-full h-full md:col-span-2  rounded-xl bg-gray-500/15'>
              <div className=' w-full p-3 bg-gray-800/20 rounded-xl'>
                <p className='text-xl'>
                  <span className='font-semibold'>Date</span>: <span className='text-primary'>{new Date().toLocaleDateString('fr-FR')}</span>
                </p>

                <Button className='w-full mt-3 flex items-center gap-2'>
                  <Download />
                  Download
                </Button>
              </div>

              <FequenceWordTable
                frequenceWordsList={frequenceWordsList}
              />

              <FrequenceWordChart
                frequenceWordsList={frequenceWordsList}
              />

              <OpportunitiesDisplayer
                opportunities={opportunities}
              />

              <div className='block md:hidden'>
                <CommentsChat
                  messages={messages}
                  setMessages={setMessages}
                />
              </div>
            </div>
          </div>
        )
      }


    </section>
  )
}

export default page