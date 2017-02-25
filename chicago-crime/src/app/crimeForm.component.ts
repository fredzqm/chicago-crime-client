import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'crime-form',
  template: `
  	<form [formGroup]="form" (ngSubmit)="onSubmit($event)">
  		<label for="location">Location: </label> 
  		<input formControlName="location" type="text"> <br />
  		<label for="time">Time: </label> 
	    <input formControlName="time" type="text"> <br />
  		<label for="type">Type: </label>
	    <input formControlName="type" type="text"> <br />
	    <button type="submit">Report</button>
	</form>
  `,
  providers: [AngularFire]
})
export class CrimeFormComponent {
  private form : FormGroup;

  constructor(private _formBuilder: FormBuilder, private _angularFire: AngularFire) {
  	this.form = this._formBuilder.group({
		location: [""],
		time: [""],
		type: [""]
	});
  }

  onSubmit(event) {
  	this._angularFire.database.list('/crimes').push({
  			location: this.form.value.location,
  			time: this.form.value.time,
  			type: this.form.value.type
  		});
  }
}