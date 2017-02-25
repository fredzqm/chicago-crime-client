import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { CrimeFormComponent } from './crimeForm.component';
import { CrimeListComponent } from './crimeList.component';

@Component({
  selector: 'my-app',
  template : `
    <crime-form> </crime-form>
    <crime-list> </crime-list>
  `
})
export class AppComponent {
  constructor() {
    
  }
}