interface Mapel {
    name: string
}

interface Materi {
    name: string,
    author: string
    lesson: string
}

interface DataMateri {
    data: {
        [key: string] : Materi[]
    }
}