import { randomUUID } from 'crypto'
import { Replace } from '../../helpers/Replace'

interface IToDO {
    mes: string
    dia: string
    titulo: string
    descricao: string
    createdAt: Date
}

export class Todo {
    private _id: string
    private props: IToDO

    constructor(props: Replace<IToDO, { createdAt?: Date }>) {
        this._id = randomUUID()
        this.props = {
            ...props,
            createdAt: props.createdAt instanceof Date ? props.createdAt : new Date()
        }
    }

    public get id() {
        return this._id
    }

    public set mes(mes: string){
        this.props.mes = mes
    }

    public get mes(): string {
        return this.props.mes
    }

    public set dia(dia: string){
        this.props.dia = dia
    }

    public get dia(): string {
        return this.props.dia
    }

    public set titulo(titulo: string){
        this.props.titulo = titulo
    }

    public get titulo(): string {
        return this.props.titulo
    }

    public set descricao(descricao: string){
        this.props.descricao = descricao
    }

    public get descricao(): string {
        return this.props.descricao
    }

    public get createdAt(): Date {
        return this.props.createdAt
    }
}