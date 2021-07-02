import { Action, Thunk } from ".."
import { ProductCreator } from "../../components/Products/ProductForm"
import { getAllProducts } from "../../services/Products.service"
import { Product } from "../../shared/Table/table.mockdata"

export const getProducts = (): Thunk<Product[]> => async (dispatch: any) => {
    const products = await getAllProducts()
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products
    })
}

export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload
    }
}