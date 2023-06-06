export interface ICritics {
    id: number
    name: string
    nickname: string
    photo: string
    socialMidia: {
        instagram?: string
        linkedin?: string
        github?: string
    }
    description: string
}