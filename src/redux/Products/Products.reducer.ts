import { Action } from ".."
import { Product } from "../../shared/Table/table.mockdata"
  
// eslint-disable-next-line
  export default function (state: Product[] = [], action: Action): Product[]  {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return [...action.payload]
      default:
        return state
    }
  }