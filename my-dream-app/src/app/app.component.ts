import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name : string = "ASdasd";
  age :number = 40;
  posts = [] as any;

  users = ['ryan','joe','cameron','jhon'];
  activated = false;
  

  title = 'my-dream-app';
  hobbies : string[];
  showHobbies : boolean;
  webpage : string;
  email;
  
  //name : string;
  /*// = "psanchezm@unsa.edu.pe";
  
  

  /*constructor() {
    
    
  }*/
  constructor(private dataService: DataService){
    this.dataService.getData().subscribe(data =>{
      //console.log(data);
      this.posts = data;
    })
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

  newHobby(hobby : any) {
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }

  sayHello(){
    alert("Hola desde app component");
  }
  deleteUser(user:any){
    for(let i=0; i<this.users.length; i++) {
      if (user==this.users[i]) {
        this.users.splice(i,1);
      }
    }
  }
  addUser(newUser:any){
    this.users.push(newUser.value);
    newUser.focus();
    return false;
  }
}
