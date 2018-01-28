import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Phone} from '../models/phone.model';

// True while fetching data from API
export const LOADING = 'Loading';

// Loading phones from API
export const LOAD = 'Phone list loading';
export const LOAD_DONE = 'Phone list loading done';
export const LOAD_FAILED = 'Phone list loading failed';

// Change color
export const CHANGE_COLOR = "Change color";

export class Load implements Action {
    readonly type = LOAD;
    constructor() {}
}

export class LoadDone implements Action {
    readonly type = LOAD_DONE;
    constructor(public payload: Phone[]) {}
}

export class LoadFailed implements Action {
    readonly type = LOAD_FAILED;
    constructor() {}
}

export class ChangeColor implements Action {
    readonly type = CHANGE_COLOR;
    constructor(public payload: any) {}
}

export type Actions = Load | LoadDone | LoadFailed | ChangeColor;
