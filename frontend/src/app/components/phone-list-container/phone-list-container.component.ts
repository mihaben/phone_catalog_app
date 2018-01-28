import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../store/reducer';
import * as Actions from '../../store/actions';
import { Action } from 'rxjs/scheduler/Action';

import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})

export class PhoneListContainerComponent implements OnInit {

  loading: Observable<Boolean>;
  phoneList: Observable<Phone[]>;

  constructor(private store: Store <fromRoot.State>) {
    this.loading = this.store.pipe(select('phonesReducer')).pipe(select('loading'));
    this.phoneList = this.store.pipe(select('phonesReducer')).pipe(select('results'));
  }

  ngOnInit() {
    this.store.dispatch(new Actions.Load());
  }

}
