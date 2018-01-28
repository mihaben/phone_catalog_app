import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../store/reducer';
import * as Actions from '../../store/actions';
import { Action } from 'rxjs/scheduler/Action';

import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {

  @Input() phone: Phone;

  constructor(private store: Store <fromRoot.State>) { }

  ngOnInit() {
  }

  selectedImage(): string {
    return this.phone.versions.find(version => {
      return version.selected === true;
    }).image;
  }

  onClickColor(color: string): void {
    this.store.dispatch(new Actions.ChangeColor({id: this.phone.id, color: color}));
  }

}
