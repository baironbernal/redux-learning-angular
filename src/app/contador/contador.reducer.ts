import { incrementar, decrementar } from './contador.actions';
import { Action } from "@ngrx/store";

export function contadorReducer( state = 10,  action: Action) {
      switch (action.type) {
            case incrementar.type:
                  return state + 1;

            case decrementar.type: 
                  return state - 1;
      
            default:
                  return state;
      }
}