import {FC} from "react";

export interface IHeaderLinks {
    name: string,
    link: string
}

export interface IHeader {
    titleId: number,
    setTitleId: any,
    links: IHeaderLinks[],
    open: boolean
    setOpen: any
}

export interface IServiceProduct {
    icon: string
    name: string,
    description: string
}