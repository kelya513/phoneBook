import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookCreateComponent } from './phone-book-create.component';

describe('PhoneBookCreateComponent', () => {
  let component: PhoneBookCreateComponent;
  let fixture: ComponentFixture<PhoneBookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
