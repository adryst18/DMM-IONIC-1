import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email:string="admin";
  password:string="";
  constructor() { }

  ngOnInit() {
  }
  login(formulario:NgForm){
    //console.log('email:',this.email);
    //console.log('password: ', this.password);


    //valores del formulario
    console.log(formulario.value);


    //validar el formulario
    console.log('valid', formulario.valid);

    //si form es invalido
    //console log (todos los campos son requeridos)
    //return

    if(formulario.invalid){
      console.log('Todos los campos son requeridos')
      return;
    }

   //si usuario = admin y password = admin
   //entonces console.log(login correcto)
   //sinp login incorrecto


   //ventaja num 1, validaciones, agrupacion de info, etc, etc, mandar errores al usuario,
   //validar si el formulario se

   if(this.email=== 'admin' && this.password==='admin'){
    console.log('Login correcto')
   }else{
    console.log('Login incorrecto');
   }
    

  
}
}