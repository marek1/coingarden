import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as AppActions from '../actions/';
import { CoinService } from '../services/coin.service';

@Injectable()
export class AppEffects {

  loadCoins$ = createEffect(() => this.actions$.pipe(
      ofType(AppActions.getCoins),
      mergeMap(() => this.coinService.getAll()
        .pipe(
          map(coins => AppActions.saveCoins({ coins })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private coinService: CoinService
  ) {}
}
