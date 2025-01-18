'use client'

import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Bot, ChartScatter, FileSpreadsheet, FileText, LayoutGrid, Link2, SquareArrowOutUpRight, Webhook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import Link from 'next/link'

const page = () => {
    return (
        <section className='pt-14 w-full min-h-screen'>
            <h2 className='text-4xl text-center font-semibold mb-4'>FAQ</h2>

            <div className='my-8 w-full p-4 h-full flex justify-center'>
                <Accordion type="single" collapsible className="w-7/10">
                    <AccordionItem value="item-1" className="p-4 rounded-xl w-7/10">
                        <AccordionTrigger className="text-2xl text-primary font-semibold">
                            <div className="flex items-center justify-start gap-2">
                                <LayoutGrid className="w-6 h-6 text-blue-500" />
                                <p className="text-lg md:text-xl">
                                    Comment utiliser la plateforme ?
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-xl p-4 bg-base-100 rounded-2xl w-7/10">
                            Pour commencer, cliquez sur le bouton <RainbowButton className="text-sm">Commencer</RainbowButton> en bas de la page <span className="font-semibold">Accueil</span>  <br /> ou sur le bouton <span className="text-primary">Analyse</span> dans la barre de navigation. <br />
                            Vous serez redirigé vers une nouvelle page où vous pourrez effectuer vos analyses.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="p-4 rounded-xl">
                        <AccordionTrigger className="text-2xl text-primary font-semibold">
                            <div className="flex items-center justify-start gap-2">
                                <FileSpreadsheet className="w-6 h-6 text-green-500" />
                                <p className="text-lg md:text-xl">
                                    Comment importer le fichier des commentaires ?
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-xl p-4 bg-base-100 rounded-2xl">
                            Accédez à la page <span className="font-semibold">Analyse</span>, puis cliquez sur le bouton
                            <Button className="mx-2">
                                <FileText className="w-8 h-8" />Fichier <span className="font-bold">.csv</span>
                            </Button>. <br />
                            Une fenêtre apparaîtra pour sélectionner et soumettre votre fichier.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="p-4 rounded-xl">
                        <AccordionTrigger className="text-2xl text-primary font-semibold">
                            <div className="flex items-center justify-start gap-2">
                                <SquareArrowOutUpRight className="w-6 h-6 text-red-500" />
                                <p className="text-lg md:text-xl">
                                    Quel type de fichier commentaire peut-on importer ?
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-xl p-4 bg-base-100 rounded-2xl">
                            Vous pouvez importer des fichiers au format <span className="text-red-500 text-xl">.csv</span> contenant une colonne nommée <br /> <span className="text-primary">Commentaire</span>, où tous les commentaires sont répertoriés.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="p-4 rounded-xl">
                        <AccordionTrigger className="text-2xl text-primary font-semibold">
                            <div className="flex items-center justify-start gap-2">
                                <Link2 className="w-6 h-6 text-yellow-500" />
                                <p className="text-lg md:text-xl">
                                    Comment analyser directement les commentaires d&apos;un produit ?
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-xl p-4 bg-base-100 rounded-2xl">
                            Sur la page <span className="font-semibold">Analyse</span>, cliquez sur le bouton
                            <Button className="text-sm mx-2" variant="destructive">
                                <Webhook className="w-8 h-8" />Page de vente
                            </Button>. <br />
                            Une fenêtre s&apos;ouvrira pour coller le lien du produit que vous souhaitez analyser.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="p-4 rounded-xl">
                        <AccordionTrigger className="text-2xl text-primary font-semibold">
                            <div className="flex items-center justify-start gap-2">
                                <SquareArrowOutUpRight className="w-6 h-6 text-purple-500" />
                                <p className="text-lg md:text-xl">
                                    Quels types de liens produits peut-on soumettre ?
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-xl p-4 bg-base-100 rounded-2xl">
                            Actuellement, seuls les liens produits de <Link href="https://ebay.fr" className="text-primary font-semibold">ebay.fr</Link> sont supportés. Rendez-vous sur <br /> la page d&apos;un produit, copiez le lien visible dans le navigateur, puis soumettez-le sur <br /> <strong className="text-amber-500 ml-2">CommentsAnalysis</strong>.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="p-4 rounded-xl">
                        <AccordionTrigger className="text-2xl text-primary font-semibold">
                            <div className="flex items-center justify-start gap-2">
                                <ChartScatter className="w-6 h-6 text-teal-500" />
                                <p className="text-lg md:text-xl">
                                    Comment voir les résultats de l&apos;analyse ?
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-xl p-4 bg-base-100 rounded-2xl">
                            Une fois les commentaires soumis, l&apos;analyse commencera automatiquement. <br /> Cela peut prendre du temps selon le nombre de commentaires. Pour les liens produits, <br /> l&apos;analyse inclut également le traitement de la page et est limitée aux <span className="text-red-500">25 premières pages</span>.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="p-4 rounded-xl">
                        <AccordionTrigger className="text-2xl text-primary font-semibold">
                            <div className="flex items-center justify-start gap-2">
                                <Bot className="w-6 h-6 text-cyan-500" />
                                <p className="text-lg md:text-xl">
                                    Comment utiliser le bot intégré ?
                                </p>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-xl p-4 bg-base-100 rounded-2xl">
                            Une fois l&apos;analyse terminée, vous pouvez interagir avec le chatbot intégré à <br /> <span className="text-xl font-bold">Comments<span className="text-primary">Analysis</span></span> pour poser des questions spécifiques sur le produit analysé.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default page