/*
 * single ride
 */

import { Component } from '@angular/core';

@Component({
    selector: 'ride',
    template: 
    `
        <span>{{ title }}</span> 
    `
})

export class RideComponent {
     title: string;

     constructor() {
         this.title = 'default ride title';
     }
}