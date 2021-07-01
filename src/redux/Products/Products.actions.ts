import { Product } from "../../shared/Table/table.mockdata"
import { Action } from "./Products.reducer"

export const insertNewProduct = (): Action<Product> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload: {
            _id: '1231dd',
            name: 'Cookie',
            price: 0.35,
            stock: 700
        }
    }
}