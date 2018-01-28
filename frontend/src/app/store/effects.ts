import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as MyActions from '../store/actions';

import { PhonesService } from '../services/phones.service';

@Injectable()
export class PhoneEffects {

    constructor(private phonesService: PhonesService, private actions$: Actions) {
    }

    // Listen for the 'LOAD' action

    @Effect()load$: Observable <Action> = this.actions$.pipe(
        ofType(MyActions.LOAD),
        mergeMap(action => this.phonesService.getPhones().pipe(
        // If successful, dispatch success action with result
        map(data => (new MyActions.LoadDone(data))),
        // If request fails, dispatch failed action
        catchError(() => of(new MyActions.LoadFailed())))));
}
