import { Product } from "../../entities/product";

export interface Contract {
    logout(): Promise<void>
    getProducts(): Product[]
    getFabActive(): boolean
    setFabActive(fabActive: boolean): void
    openModal(): void
    closeModal(): void
    getModalVisibility(): boolean

    isDelete(): boolean
    changeDelete(): void

    setName(text: string): void
    setFactory(text: string): void
    setAmount(number: number): void
    setPrice(number: number): void
    sendNewProduct(): Promise<void>
}
