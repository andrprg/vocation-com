import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { Result } from 'src/app/Models';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultFormComponent implements OnInit {
  @Input() result: Result;
  @Output() eventReset = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  resetForm() {
    this.eventReset.emit();
  }
}
