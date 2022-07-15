import { incrementar, decrementar } from './contador.actions';
import { Action, createReducer, on } from "@ngrx/store";

export const initialState = 20;

const _contadorReducer = createReducer(
      initialState,
      on(incrementar, (state) => state + 1),
      on(decrementar, (state) => state - 1),
);

export function contadorReducer(state:any, action:Action) {
      return _contadorReducer(state, action)
}