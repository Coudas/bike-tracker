/*
 * list of single rides
 */

import { Component } from '@angular/core';

import { Ride, RideComponent } from './ride.component';

@Component({
    selector: 'ride-list',
    template: 
    `
        <ride *ngFor="let ride of rides" [rdata]="ride" ></ride>
    `
})

export class RideListComponent {
     rides: Ride[];

     constructor() {
         this.rides = [
             new Ride('Anakonda s Edom', 38.6, '2016-08-08T12:54'),
             new Ride('Navrat domov cez mesto', 4.6, '2016-08-08T17:54'),
             new Ride('Repete Anakonda s Edom', 38.6, '2016-08-10T14:37')
         ];
     }
}