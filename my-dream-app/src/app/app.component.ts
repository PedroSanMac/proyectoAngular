import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  name : string;
  email;// = "psanchezm@unsa.edu.pe";
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  constructor() {
    console.log("Constructor trabajando...");
    this.name = "Pedro";
    this.email = "psanchezm@unsa.edu.pe";
    this.webpage = "http://www.unsa.edu.pe";
    this.hobbies = ["Futbol","Programacion","DOTA2"];
    this.showHobbies = false;
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  showhobbies() {
    return this.showHobbies;
  }
}
