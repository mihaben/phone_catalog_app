import { Component, OnInit, Input } from '@angular/core';

import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-phone-detail-component',
  templateUrl: './phone-detail-component.component.html',
  styleUrls: ['./phone-detail-component.component.scss']
})
export class PhoneDetailComponentComponent implements OnInit {

  @Input() phone: Phone;

  constructor() { }

  ngOnInit() {
  }

  selectedImage(): string {
    return this.phone.versions.find(version => {
      return version.selected = true;
    }).image;
  }

  onClickColor(color: string): void {
    console.log(color, 'clicked');
  }

}
