import { Action } from ".."
import Products, { Product } from "../../shared/Table/table.mockdata"
  
  export default function (state = Products, action: Action): Product[]  {
    switch (action.type) {
      case 'FETCH_PRODUCTS':
        return [...action.payload]
      default:
        return state
    }
  }