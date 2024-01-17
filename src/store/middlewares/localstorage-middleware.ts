import {Action, Dispatch, MiddlewareAPI} from "@reduxjs/toolkit";
import {RootState} from "@/store";


export const localStorageMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => (action: Action) => {

        next(action);

        if (action.type === 'pokemons/toogleFavorite') {
            const {pokemons} = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons))
            return;
        }
    }
}