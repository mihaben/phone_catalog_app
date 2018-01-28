import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Components
import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { LoadingComponent } from './components/loading/loading.component';

// Services
import { PhonesService } from './services/phones.service';

// ngrx
import { reducer } from './store/reducer';
import { PhoneEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailComponent,
    LoadingComponent
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
