import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationComponent } from './vocation.component';

describe('VocationComponent', () => {
  let component: VocationComponent;
  let fixture: ComponentFixture<VocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
