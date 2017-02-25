import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}