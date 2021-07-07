import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import Products from './Products/Products.reducer'
import thunk, { ThunkAction} from 'redux-thunk'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Authentication from "./Authentication/Authentication.reducer";

const reducers = combineReducers({
    products: Products,
    authentication: Authentication
})

const persistedReducer = persistReducer({
    key: 'algastock',
    storage,
    // lista de reducers que não serão persistidos local
    blacklist: ['products']
}, reducers)

// filtra apenas os enhacers que existirem (quando a extensão não estiver instalado no browser)
const enhancers = [
    applyMiddleware(thunk),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
].filter(e => e)

const store = createStore(
    persistedReducer,
    compose(...enhancers)
)

const persistor = persistStore(store)

export interface Action<T = any> {
    type: string
    payload?: T
}

export type RootState = ReturnType<typeof reducers>

export type Thunk<T = any> =
    ThunkAction<void, RootState, unknown, Action<T>>

export type ThunkDispatch = (thunk: Thunk) => Promise<Thunk>

export { store, persistor} 