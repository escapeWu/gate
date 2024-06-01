import { CoreMessage } from 'ai'

export type Message = CoreMessage & {
  id: string
}

export interface Example extends Record<string, any> {
  id: string
  title: string
  createdAt: Date
  userId: string
  path: string
  messages: Message[]
  sharePath?: string
}
