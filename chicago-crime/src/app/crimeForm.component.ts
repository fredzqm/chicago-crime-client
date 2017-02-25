import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'crime-form',
  template: `
  	<div> Crime form </div>
  `
})
export class CrimeFormComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/crimes');
  }
}