import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailComponentComponent } from './components/phone-detail-component/phone-detail-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
