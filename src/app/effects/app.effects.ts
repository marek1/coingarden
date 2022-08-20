import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as AppActions from '../actions/';
import { CoinService } from '../services/coin.service';
import { OffersService } from '../services/offers.service';

@Injectable()
export class AppEffects {

  loadCoins$ = createEffect(() => this.actions$.pipe(
      ofType(AppActions.getCoins),
      mergeMap(() => this.coinService.getAll()
        .pipe(
          map(coins => AppActions.saveCoins({ coins })),
          catchError(() => of(AppActions.saveCoinsError({errorMessage: 'Ein Fehler beim Laden der Coins ist aufgetreten'})))
        ))
    )
  );

  loadOffers$ = createEffect(() => this.actions$.pipe(
      ofType(AppActions.getOffers),
      mergeMap(() => this.offersService.getAll()
        .pipe(
          map(offers => AppActions.saveOffers({ offers })),
          catchError(() => of(AppActions.saveOffersError({errorMessage: 'Ein Fehler beim Laden der Angebote ist aufgetreten'})))
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private coinService: CoinService,
    private offersService: OffersService
  ) {}
}
