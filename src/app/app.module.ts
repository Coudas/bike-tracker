import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RideComponent } from './rides/ride.component';
import { RideListComponent } from './rides/list-rides.component';

@NgModule({
  imports:         [ BrowserModule ],   // describes which dependencies module has 
  declarations:    [                    // defines components in this module
      AppComponent, 
      RideComponent,
      RideListComponent
  ],    
  bootstrap:       [ AppComponent ]     // which component has to be used top-level upon bootstraping
})

export class AppModule { }
