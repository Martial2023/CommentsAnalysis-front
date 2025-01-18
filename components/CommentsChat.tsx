'use client'

import { BotMessageSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import axios from 'axios'
import { useToast } from '@/hooks/use-toast'

type messageType = {
    sender: "bot" | "user",
    text: string
}

interface CommentChatProps {
    messages: messageType[]
    setMessages: React.Dispatch<React.SetStateAction<messageType[]>>
}

const CommentsChat = ({ messages, setMessages }: CommentChatProps) => {
    const { toast } = useToast()
    const [questions, SetQuestions] = useState<string>('')

    const handleQuestionSubmit = async () => {
        if (!questions.trim()) return;

        // Ajouter le message utilisateur
        setMessages((prev) => [
            ...prev,
            { sender: 'user', text: questions.trim() },
        ]);

        try {
            // const formData = new FormData()
            // formData.append("question", questions.trim())
            // const response = await axios.post('http://127.0.0.1:8000/api/chatbot/', formData)
            const response = await axios.post(
                'https://55cb-41-79-219-101.ngrok-free.app/api/chatbot/',
                { questions }, // envoyer l'objet JSON
                {
                    headers: {
                        'Content-Type': 'application/json', // Spécifier que c'est un JSON
                    },
                }
            );
            
            console.log("Return", response.data)
            if (response.status !== 200) {
                toast({
                    description: "Erreur lors de la génération de la réponse",
                    variant: "destructive"
                })
            }

            const data = await response.data
            setMessages((prev) => [
                ...prev,
                { sender: 'bot', text: data.reponse },
            ]);

            // Réinitialiser le champ input
            SetQuestions('');
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Traitement échoué",
                description: `Erreur durant le traitement des donées: ${error}`
            })
        }

    };

    return (
        <div className='w-full mt-4 mb-8 p-4 rounded-xl shadow-xl relative min-h-24'>
            <div className='text-xl text-gray-800 text-center font-semibold flex items-center justify-center w-full my-8'>
                <BotMessageSquare className='w-6 h-6 text-orange-400 animate-bounce' />
                <span className='mx-2'>Des questions à</span>
                Comments<span className='text-primary'>Analysis</span>?
            </div>

            <div className='flex flex-col gap-3 w-full'>
                {messages.map((message, index) => (
                    message.sender === 'bot' ? (
                        <div key={index} className='mt-3 flex gap-1 w-9/12 md:w-3/5 '>
                            <Avatar>
                                <AvatarImage src="/bot.jpg" alt="@shadcn" />
                                <AvatarFallback>CA</AvatarFallback>
                            </Avatar>
                            <div className='bg-neutral-300 p-2 rounded-2xl'>
                                {message.text}
                            </div>
                        </div>
                    ) : (
                        <div key={index} className='mt-3 w-full flex flex-row-reverse items-end'>
                            <div className='w-8/10 md:w-3/5 flex flex-row-reverse gap-1'>
                                <Avatar>
                                    <AvatarImage src="/user.jpeg" alt="@shadcn" />
                                    <AvatarFallback>US</AvatarFallback>
                                </Avatar>
                                <div className='bg-neutral-300 p-2 rounded-2xl'>
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>

            <div className='absojlute bottom-0 mt-8 left-0 flex items-center flex-col md:flex-row justify-center gap-3 p-2'>
                <Input
                    type='text'
                    placeholder='Comment accroître la vente des lampes?'
                    className='border-2 border-primary'
                    value={questions}
                    onChange={(e) => SetQuestions(e.target.value)}
                />

                <Button
                    className='w-full md:w-2/5'
                    disabled={!questions}
                    onClick={handleQuestionSubmit}
                >
                    Generate
                </Button>
            </div>
        </div>
    )
}

export default CommentsChat