import { Action } from "..";
import { User } from "../../services/Authentication.service";


declare interface AuthenticationState{
    profile?: User
}
// eslint-disable-next-line
export default function (state: AuthenticationState = {}, action: Action){
    switch (action.type){
        case 'AUTHENTICATION_LOGIN':
            return { profile: action.payload }
            
        case 'AUTHENTICATION_LOGOUT':
            return {}
        default:
            return state
    }
}