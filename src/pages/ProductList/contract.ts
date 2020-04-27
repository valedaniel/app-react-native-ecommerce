import { Product } from "../../entities/product";

export interface Contract {
    logout(): Promise<void>
    getProducts(): Product[]
}
