
import React from "react"
import axios from "axios"

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
import { BookmarkX, FileText, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Input } from "./ui/input"


type Word = {
    text: string;
    value: number
};

interface CommentProps {
    id: number,
    Commentaire: string,
    nature: string
}

interface ModalFileProps {
    file: File | null
    setFile: React.Dispatch<React.SetStateAction<File | null>>
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

const ModalFile = ({
    file,
    setFile,
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
}: ModalFileProps) => {
    const [open, setOpen] = React.useState(false)
    const [isFileSelected, setIsFileSelected] = React.useState(false)
    const { toast } = useToast()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file && file?.name.endsWith(".csv")) {
            setIsFileSelected(true)
            setFile(file)
        }
    }

    const handleFileSubmit = () => {

        setIsFileSelected(false)
        setOpen(false)
        setIsSubmitting(true)
        handleFileSubmitAndGetResults()
    }

    const handleFileSubmitAndGetResults = async () => {
        try {
            if (!file) {
                toast({
                    description: "Aucun fichier n'a été sélectionné",
                    variant: "destructive"
                })
            }

            const formData = new FormData()
            formData.append("file", file as Blob)
            //const response = await axios.post('http://127.0.0.1:8000/api/upload-csv/', formData, {
            const response = await axios.post('https://9611-197-234-221-251.ngrok-free.app/api/upload-csv/', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
            )
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
                disabled={isSubmitting}
            >
                <FileText className="w-8 h-8" />Fichier <span className="font-bold">.csv</span>
            </Button>

            <Credenza open={open} onOpenChange={setOpen}>
                <CredenzaContent>
                    <CredenzaHeader>
                        <CredenzaTitle>Fichier .csv</CredenzaTitle>
                        <CredenzaDescription>
                            Fournissez uniquement un fichier .csv ayant une colonne de commentaires nommée <span className="text-destructive">Comments</span>
                        </CredenzaDescription>
                    </CredenzaHeader>
                    <CredenzaBody>
                        <Input
                            type="file"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            accept=".csv"
                            onChange={handleFileChange}
                        />
                    </CredenzaBody>
                    <CredenzaFooter className="flex items-center gap-4">
                        <Button
                            className="text-xl"
                            disabled={!isFileSelected}
                            onClick={() => { handleFileSubmit() }}
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

export default ModalFile