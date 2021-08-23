
// Angular
import { Component } from '@angular/core';
//Interfaces
import { CONSTANT } from 'src/app/shared/constants/shared-constants';
import { AuthService } from 'src/app/auth/auth.service';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
// Constant

@Component({
  selector: 'admin-registeruser',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  //  user:User={
  //    title:{
  //     id: 1,
  //     titleName: ''
  //    },
  //    firstName:'',
  //    lastName:'',
  //    emailId:'',
  //    contactNumber: 1234567890,
  //    dob: new Date,
  //    userRole: {
  //     id: 1,
  //     roleName: "Patient",
  //     roleType: 'Patient',
  //    },
  //    Coutry:{
  //     id: 1,
  //     countryCode: 91,
  //     countryName: '',
  //    },
  //    gender:'',
  //    passwrd:'',
  //  }
	// Public
	CONSTANT = CONSTANT;
  hide=true;
  constructor(){}

  email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  // onRegister(){
  //   this.authService.register(this.user);
  // }
}
