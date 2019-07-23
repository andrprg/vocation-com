import { Component, OnInit, Input } from '@angular/core';
import { Month } from 'src/app/Models';

@Component({
  selector: 'app-months-form',
  templateUrl: './months-form.component.html',
  styleUrls: ['./months-form.component.css']
})
export class MonthsFormComponent implements OnInit {

  @Input() months:Month[];

  constructor() { }

  ngOnInit() {
  }

}
