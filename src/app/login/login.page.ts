import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email:string="adri.cruz@gmail.com";
  password:string="";
  constructor() { }

  ngOnInit() {
  }
  login(){
   //si usuario = admin y password = admin
   //entonces console.log(login correcto)
   //sinp login incorrectyo

   if(this.email== 'admin' && this.password=='admin'){
    console.log('Login correcto')
   }else{
    console.log('Login incorrecto');
   }
    

  
}
}