import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsFormComponent } from './months-form.component';

describe('MonthsFormComponent', () => {
  let component: MonthsFormComponent;
  let fixture: ComponentFixture<MonthsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
