export interface IMovie {
    id: number
    name: string
    slug: string
    image: string
    date: string
    producer: string[]
    assessments: {
            name: string
            note: number
        }[]
    ,
    note: number
    avaliation: string
}