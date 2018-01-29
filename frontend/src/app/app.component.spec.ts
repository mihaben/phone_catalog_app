import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './components/phone-list-container/phone-list-container.component';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducer } from './store/reducer';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PhoneListContainerComponent,
        PhoneDetailComponent,
        LoadingComponent
      ],
      imports: [
        StoreModule.forRoot({phonesReducer: reducer}),
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
