import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailComponentComponent } from './components/phone-detail-component/phone-detail-component.component';

// Services
import { PhonesService } from './services/phones.service';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
