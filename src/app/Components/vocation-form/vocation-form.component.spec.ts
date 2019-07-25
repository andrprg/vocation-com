import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationFormComponent } from './vocation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('VocationFormComponent', () => {
  let component: VocationFormComponent;
  let fixture: ComponentFixture<VocationFormComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VocationFormComponent 
      ],
      imports: [FormsModule, ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocationFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('должны быть отправлены данные', () => {
    const dateFrom = '2019-07-11'; 
    const dateFromWork = '2019-02-01';
    const countDay = 15;

    element.querySelector('#dateFrom').value = dateFrom;
    element.querySelector('#dateFromWork').value = dateFromWork;
    element.querySelector('#countDay').value = countDay;
    fixture.detectChanges();

    component.isFromWork = true;
    component.eventVocation.subscribe(({dateFrom:dt1,dateFromWork:dt2,countDay: days}) => {
      expect(dt1).toEqual(new Date(dateFrom));
      expect(dt2).toEqual(new Date(dateFromWork));
      expect(days).toEqual(countDay);
    });

    element.querySelector('button[type="submit"]').click();
  });
});
