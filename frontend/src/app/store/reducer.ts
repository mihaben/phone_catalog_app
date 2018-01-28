import {Phone} from '../models/phone.model';
import * as PhoneActions from './actions';

export interface State {
    loading: boolean;
    filterTerms: string;
    results: Phone[];
    filteredResults: Phone[];
}

const initialState: State = {
    loading: false,
    filterTerms: '',
    results: [],
    filteredResults: [],
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
                results: action.payload,
                filteredResults: action.payload,
            };

        case PhoneActions.LOAD_FAILED:
            return {
                ...state,
                loading: false,
                results: []
            };

        case PhoneActions.FILTER:
            return {
                ...state,
                filterTerms: action.payload,
                filteredResults: state.results.filter(phone => {

                    const model = phone.model.toLowerCase();
                    const filterTerms = action.payload.toLowerCase();

                    return (model.indexOf(filterTerms) > -1) ? true : false;

                })
            };

        case PhoneActions.CHANGE_COLOR:
            return {
                ...state,
                filteredResults: state.filteredResults.map(phone => {
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
