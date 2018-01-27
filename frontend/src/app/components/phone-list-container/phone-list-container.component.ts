import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../../services/phones.service';

@Component({
  selector: 'app-phone-list-container',
  templateUrl: './phone-list-container.component.html',
  styleUrls: ['./phone-list-container.component.scss']
})
export class PhoneListContainerComponent implements OnInit {

  loading: boolean;
  phoneList: any[];

  constructor(private phonesService: PhonesService) {
    this.loading = false;
  }

  ngOnInit() {
    this.loadPhones();
  }

  loadPhones() {
    this.loading = true;
    this.phonesService.getPhones().subscribe(phones => {
      console.log(phones);
      this.loading = false;
      this.phoneList = phones;
    });
  }

}
