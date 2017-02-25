import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';
import {FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'crime-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit($event)">
    <div class="input-group">
      <label for="location">Location: </label> 
      <input formControlName="location" class="form-control" type="text"> <br />
    </div>
    <div class="input-group">      
      <label for="time">Time: </label> 
      <input formControlName="time" class="form-control" type="text"> <br />
    </div>
    <div class="input-group">      
      <label for="type">Type: </label>
      <input formControlName="type" class="form-control" type="text"> <br />
    </div>
    <button type="submit" class="btn btn-default">Report</button>
  </form>
  `,
  styles:[`
    .input-group {
      margin: 10px;
    }
  `],
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