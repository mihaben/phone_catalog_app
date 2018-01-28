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

        case PhoneActions.CHANGE_COLOR:
            return {
                ...state,
                results: state.results.map(phone => {
                    return {
                        ...phone,
                        versions: phone.versions.map(version => {
                            if (phone.id === action.payload.id) {
                                if (version.color === action.payload.color) {
                                    return {
                                        ...version,
                                        selected: true
                                    };
                                } else {
                                    return {
                                        ...version,
                                        selected: false
                                    };
                                }
                            } else {
                                return version;
                            }
                        })
                    };
                })
            };

        default:
            return state;

    }
}
