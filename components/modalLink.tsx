"use client"
import React, { useState } from "react"

import {
    Credenza,
    CredenzaBody,
    CredenzaClose,
    CredenzaContent,
    CredenzaDescription,
    CredenzaFooter,
    CredenzaHeader,
    CredenzaTitle,
} from "@/components/ui/credenza"
import { Button } from "./ui/button"
import { BookmarkX, Send, Webhook } from "lucide-react"
import { Input } from "./ui/input"
import { useToast } from "@/hooks/use-toast"
import axios from "axios"



type Word = {
    text: string;
    value: number
};

interface CommentProps {
    id: number,
    Commentaire: string,
    nature: string
}

interface ModalLinkProps {
    isSubmitting: boolean
    setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>
    setNbreComments: React.Dispatch<React.SetStateAction<number>>
    setNbreCommentsDuplicated: React.Dispatch<React.SetStateAction<number>>
    setNbreCommentsUnique: React.Dispatch<React.SetStateAction<number>>
    setIsDataProcessed: React.Dispatch<React.SetStateAction<boolean>>
    setDfCommentsNature: React.Dispatch<React.SetStateAction<CommentProps[]>>
    setCommentsNatureCount: React.Dispatch<React.SetStateAction<number[]>>
    setRecommandations: React.Dispatch<React.SetStateAction<string[]>>
    setFrequenceWordsList: React.Dispatch<React.SetStateAction<Word[]>>
    setOpportunities: React.Dispatch<React.SetStateAction<string[]>>
}


const ModalLink = ({
    isSubmitting,
    setIsSubmitting,
    setNbreComments,
    setNbreCommentsDuplicated,
    setNbreCommentsUnique,
    setIsDataProcessed,
    setDfCommentsNature,
    setCommentsNatureCount,
    setRecommandations,
    setFrequenceWordsList,
    setOpportunities
 }: ModalLinkProps) => {
    const { toast } = useToast()
    const [open, setOpen] = useState(false)
    const [productUrl, setProductUrl] = useState<string>("")


    const handleOpen = () => {
        setOpen(true)
    }

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductUrl(e.target.value)
    }

    const handleLinkSubmitAndGetResults = async () => {
        setOpen(false)
        setIsSubmitting(true)
        try {
            if (!productUrl) {
                toast({
                    description: "Aucun lien produit n'a été sélectionné",
                    variant: "destructive"
                })
            }

            const formData = new FormData()
            formData.append("productUrl", productUrl)
            //const response = await axios.post('http://127.0.0.1:8000/api/upload-product-url/', formData)
            const response = await axios.post('https://7533-197-234-221-251.ngrok-free.app/api/upload-product-url/', formData)

            console.log("Return", response.data)
            if (response.status !== 200) {
                toast({
                    description: "Erreur lors du traitement des données",
                    variant: "destructive"
                })
            }

            const data = await response.data
            setNbreComments(data.nbreComments)
            setNbreCommentsDuplicated(data.nbreCommentsDuplicated)
            setNbreCommentsUnique(data.nbreCommentsUnique)
            setDfCommentsNature(data.dfCommentsNature)
            setCommentsNatureCount(data.commentsNatureCount)
            setRecommandations(data.recommandations)
            setFrequenceWordsList(data.frequenceWordsList)
            setOpportunities(data.opportunities)

            toast({
                title: "Traitement terminé",
                description: "Les commentaires ont été traités avec succès"
            })
            setIsDataProcessed(true)
            setIsSubmitting(false)
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Traitement échoué",
                description: `Erreur durant le traitement des donées: ${error}`
            })
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Button
                onClick={handleOpen}
                className="text-xl"
                variant={"destructive"}
                disabled={isSubmitting}
            >
                <Webhook className="w-8 h-8" />Page de vente
            </Button>

            <Credenza open={open} onOpenChange={setOpen}>
                <CredenzaContent>
                    <CredenzaHeader>
                        <CredenzaTitle>Lien du produit</CredenzaTitle>
                        <CredenzaDescription>
                            Entrer le lien de votre produit
                        </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody>
                        <Input
                            type="link"
                            placeholder="www.ebay.com/produit1"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            onChange={handleLinkChange}
                        />
                    </CredenzaBody>
                    <CredenzaFooter className="flex items-center gap-4">
                        <Button
                            className="text-xl"
                            disabled={!productUrl}
                            onClick={() => { handleLinkSubmitAndGetResults() }}
                        >
                            <Send className="w-8 h-8 font-bold" />
                            Soumettre
                        </Button>
                        <CredenzaClose asChild>
                            <Button className="text-xl" variant={"destructive"}>
                                <BookmarkX className="w-8 h-8 font-bold" />
                                Fermer
                            </Button>
                        </CredenzaClose>
                    </CredenzaFooter>
                </CredenzaContent>
            </Credenza>
        </>
    )
}

export default ModalLink