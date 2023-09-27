import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighLightDirective } from './sample.directive';
import { UserService } from './user.service';

@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  providers:    [ UserService ],
  declarations: [ AppComponent, HighLightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/