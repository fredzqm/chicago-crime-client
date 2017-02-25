import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
      Location: {{ item.location }} <br />
      time: {{ item.time }} <br />
      type: {{ item.type }} <br />
    </li>
  </ul>
  `
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/crimes');
  }
}