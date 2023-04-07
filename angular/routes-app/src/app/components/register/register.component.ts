import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name:string="";
  email:string="";
  pass:string="";
  dateof:any=0;

  onSubmit(){
    console.log('Registration form submitted!');
    console.log("Name:" + this.name);
    console.log("Email:" + this.email);
    console.log("Password:" + this.pass);
  }

}
