import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { CrimeFormComponent } from './crimeForm.component';
import { CrimeListComponent } from './crimeList.component';
import { AppComponent } from './app.component';
import { MapComponent } from './map.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBoF2gpK4ISX5Tpov0EFqEI2NhJLFu1JWQ",
  authDomain: "chicago-crime-c82fb.firebaseapp.com",
  databaseURL: "https://chicago-crime-c82fb.firebaseio.com",
  storageBucket: "chicago-crime-c82fb.appspot.com",
  messagingSenderId: "766373141579"
};

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent, CrimeFormComponent, CrimeListComponent, MapComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule {}