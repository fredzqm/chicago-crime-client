import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'crime-list',
  template : `
    <ul>
      <li *ngFor="let item of items | async">
        {{item | json}}
      </li>
    </ul>
  `
})
export class CrimeListComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/crimes');
  }
}