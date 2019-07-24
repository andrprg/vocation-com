import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './Store';
import { MonthEffect } from './Store/effects/month.effects';
import { VocationContainerComponent } from './Components/vocation-container/vocation-container.component';
import { VocationFormComponent } from './Components/vocation-form/vocation-form.component';
import { MonthsFormComponent } from './Components/months-form/months-form.component';
import { DateToNamePipe } from './Pipes/date-to-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VocationContainerComponent,
    VocationFormComponent,
    MonthsFormComponent,
    DateToNamePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, 
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MonthEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
