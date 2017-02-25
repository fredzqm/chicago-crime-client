import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { CrimeFormComponent } from './crimeForm.component';
import { CrimeListComponent } from './crimeList.component';
import { MapComponent } from './map.component';

@Component({
  selector: 'my-app',
  template : `
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">Home</a></li>
      <li role="presentation"><a href="#">Profile</a></li>
      <li role="presentation"><a href="#">Messages</a></li>
    </ul>
    <div class="container">
      <crime-form> </crime-form>
    </div>
    <div class="container">
      <heat-map></heat-map>
    </div>
    <div class="container">
      <crime-list> </crime-list>
    </div>
  `
})
export class AppComponent {
  constructor() {

  }
}