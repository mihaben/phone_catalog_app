import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducer } from '../../store/reducer';
import { PhoneListContainerComponent } from './phone-list-container.component';
import { PhoneDetailComponent } from '../phone-detail/phone-detail.component';
import { LoadingComponent } from '../loading/loading.component';

describe('PhoneListContainerComponent', () => {
  let component: PhoneListContainerComponent;
  let fixture: ComponentFixture<PhoneListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneListContainerComponent, PhoneDetailComponent, LoadingComponent ],
      imports: [
        StoreModule.forRoot({phonesReducer: reducer}),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
