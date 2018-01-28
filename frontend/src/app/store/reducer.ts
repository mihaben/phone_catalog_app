import {Phone} from '../models/phone.model';
import * as PhoneActions from './actions';

export interface State {
    loading: boolean;
    searchTerms: string;
    results: Phone[];
}

const initialState: State = {
    loading: false,
    searchTerms: '',
    results: []
};

export function reducer(state = initialState, action: PhoneActions.Actions): State {

    switch (action.type) {

        case PhoneActions.LOAD:
            return {
                ...state,
                loading: true
            };

        case PhoneActions.LOAD_DONE:
            return {
                ...state,
                loading: false,
                results: action.payload
            };

        case PhoneActions.LOAD_FAILED:
            return {
                ...state,
                loading: false,
                results: []
            };

        default:
            return state;

    }
}
