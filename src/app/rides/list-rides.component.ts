/*
 * list of single rides
 */

import { Component } from '@angular/core';

// import { RideComponent } from 'ride.component';

@Component({
    selector: 'ride-list',
    template: 
    `
        <p *ngFor="let ride of rides">
            <span>{{ ride }}</span>
        </p> 
    `
})

export class RideListComponent {
     rides: string[];

     constructor() {
         this.rides = ['Time trial po praci', 'Anakonda s Edom'];
     }
}