import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementar, decrementar } from './contador/contador.actions';

export interface AppState {
  contador: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  contador: number = 0;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
    });
  }

  incrementar() {
    this.store.dispatch(incrementar())
  }


  decrementar() {
    this.store.dispatch(decrementar())
  }


}
