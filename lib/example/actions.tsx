import 'server-only'


import {Chat, Message} from '@/lib/types'


export type AIState = {
    chatId: string
    messages: Message[]
}

export type UIState = {
    id: string
    display: React.ReactNode
}[]

