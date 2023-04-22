import { DatePipe } from "@angular/common"
import { Data } from "@angular/router"



export interface Atividade {
    id: number
    descricao: string
    concluido: boolean
    createdAt: Data
    updatedAt: Date
}