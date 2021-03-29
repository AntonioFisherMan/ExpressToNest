import {IsString} from "class-validator";


export class CreateProductDto {
    @IsString()
    readonly firstName: string
    readonly lastName: string
    readonly isActive: boolean
}