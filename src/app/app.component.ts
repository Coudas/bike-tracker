import { Component } from '@angular/core';
import '../styles.css';

@Component({
  selector: 'bt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
    addRide(title: HTMLInputElement, distance: HTMLInputElement): boolean {
        console.log(`Adding ride title: ${title.value} and distance: ${distance.value}`);
        return false;
    }
}
