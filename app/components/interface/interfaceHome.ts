
export interface ILinks {
    name: string,
    link: string
}

export interface IHeader {
    titleId: number,
    setTitleId: any,
    links: ILinks[],
    open: boolean
    setOpen: any
}

export interface IServiceProduct {
    icon: string
    name: string,
    description: string
}

export interface IServiceInformation {
    img: string,
    title: string,
    description: string
}