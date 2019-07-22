import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationFormComponent } from './vocation-form.component';

describe('VocationComponent', () => {
  let component: VocationFormComponent;
  let fixture: ComponentFixture<VocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
