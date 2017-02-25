import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'crime-list',
  template : `
	<div id="map_canvas" style="height: 600px; width: 800px;">
	</div>
  `
})
export class CrimeListComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/crimes');
  }

  onInit() {
  	
  }

}

