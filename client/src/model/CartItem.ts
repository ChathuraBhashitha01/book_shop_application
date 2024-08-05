import {BookModel} from "./BookModel";


export interface CartItem {
    product: BookModel,
    itemCount: number
}