import { Product } from '../shared/Table/table.mockdata'
import http from '../utils/http'

export const getAllProducts = () =>
    http
        .get<Product[]>('http://localhost:3024/products')
        .then(res => res.data)