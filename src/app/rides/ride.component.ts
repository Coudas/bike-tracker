/*
 * single ride
 */

import { Component } from '@angular/core';

export class Ride {
    title: string;
    distance: number;
    date: string;

    constructor(title: string, distance: number, date: string) {
        this.title = title;
        this.distance = distance || 0;
        this.date = date;
    }
}

@Component({
    selector: 'ride',
    inputs: ['rdata'],
    template: 
    `
        <div><span>{{ rdata.title }}</span> | {{ rdata.distance }}km | date: {{ rdata.date }}</div>
    `
})
export class RideComponent {
     rdata: Ride;
}