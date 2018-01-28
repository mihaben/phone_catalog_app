import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Components
import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailComponentComponent } from './components/phone-detail-component/phone-detail-component.component';

// Services
import { PhonesService } from './services/phones.service';

// ngrx
import { reducer } from './store/reducer';
import { PhoneEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({phonesReducer: reducer}),
    EffectsModule.forRoot([PhoneEffects])
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
