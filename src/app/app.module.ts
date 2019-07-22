import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './Store';
import { MonthEffect } from './Store/effects/month.effects';
import { VocationContainerComponent } from './Components/vocation-container/vocation-container.component';
import { VocationComponent } from './Components/vocation/vocation.component';

@NgModule({
  declarations: [
    AppComponent,
    VocationContainerComponent,
    VocationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([MonthEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
