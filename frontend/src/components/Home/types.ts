import React from "react";

export interface ISectionWithEffect {
    children: React.ReactNode
}

export interface ILogoP {
    img: string  
}

export interface IPLogos {
    images: ILogoP[]
}

export type Tlogo = {
    img: string
    type: 'logo' | 'logoWithLink' | 'logoWithTextToCopy'
    link?: string
    textToCopy: string
}

export interface IPLogoProxy {
    logos: Tlogo[]
}