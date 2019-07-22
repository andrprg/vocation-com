import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store';
import { Month, Result } from 'src/app/Models';


@Component({
  selector: 'app-vocation-container',
  templateUrl: './vocation-container.component.html',
  styleUrls: ['./vocation-container.component.css']
})
export class VocationContainerComponent implements OnInit {

  month$:  Observable<Month[]>;
  result$: Observable<Result>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onSubmitVocation(event){
    //
  }

}
