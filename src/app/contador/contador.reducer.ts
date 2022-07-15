import * as actions from './contador.actions';
import { Action, createReducer, on } from "@ngrx/store";

export const initialState = 20;

const _contadorReducer = createReducer(
      initialState,
      on(actions.incrementar, (state) => state + 1),
      on(actions.decrementar, (state) => state - 1),
      on(actions.reset, (state) => state = 0),
      on(actions.multiplicar, (state, {numero}) => state * numero),
      on(actions.dividir, (state, {numero}) => state / numero),
      
);

export function contadorReducer(state:any, action:Action) {
      return _contadorReducer(state, action)
}