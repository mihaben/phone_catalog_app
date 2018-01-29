import { Phone } from '../models/phone.model';
import * as PhoneActions from './actions';
import { reducer } from './reducer';

const initialState = {
    loading: false,
    filterTerms: '',
    results: [],
    filteredResults: [],
};

const phones: Phone[] = [
    new Phone(
        {
            id: 1,
            model: 'test',
            versions: [
                {
                    color: 'black',
                    selected: true
                },
                {
                    color: 'white',
                    selected: false
                }
            ]
        })
];

describe('Reducers', () => {
  it('Loading is true when load', () => {
    expect(reducer(initialState, new PhoneActions.Load()).loading).toEqual(true);
  });
  it('Load data', () => {
    expect(reducer(initialState, new PhoneActions.LoadDone(phones)).results[0].model).toEqual('test');
  });
  it('Change color', () => {
    const state = reducer(initialState, new PhoneActions.LoadDone(phones));
    expect(reducer(state, new PhoneActions.ChangeColor({id: 1, color: 'white'})).filteredResults[0].versions[1].selected).toEqual(true);
  });
  it('Filter phone', () => {
    const state = reducer(initialState, new PhoneActions.LoadDone(phones));
    expect(reducer(state, new PhoneActions.Filter('test')).filteredResults).toEqual(phones);
  });
});
