export interface Iimage {
    src: string, 
    alt: string
}

export interface Ifilm {
    title: string,
    image: Iimage
}

export interface Films {
    section: string, 
    films: Ifilm
}

