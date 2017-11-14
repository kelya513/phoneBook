import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBookEditComponent } from './phone-book-edit.component';

describe('PhoneBookEditComponent', () => {
  let component: PhoneBookEditComponent;
  let fixture: ComponentFixture<PhoneBookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneBookEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
