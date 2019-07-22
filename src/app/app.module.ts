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

@NgModule({
  declarations: [
    AppComponent,
    VocationContainerComponent,
    VocationFormComponent,
    VocationFormComponent
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
