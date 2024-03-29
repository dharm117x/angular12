export interface Iform {
    title: string
    saveBtnLevel?: string
    resetBtnLevel?: string
    formControlls?: IformControl[]
}

export interface IformControl {
    name: string
    value?: string
    level?: string
    class?: string
    type: string
    placeholder?: string
    validators?: Ivalidator[]
    radioOptions?:string[]
    options?: Ioption[]
}

export interface Ivalidator {
    vName?:string
    message?:string
    required?:boolean
    minlength?:number
    email?:string
}

export interface Ioption {
    id?:string
    value?:string
}