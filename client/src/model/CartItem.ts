import {BookModel} from "./BookModel";


export interface CartItem {
    book: BookModel,
    itemCount: number
}