import { AuthService } from './../auth.service';
// Angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { SharedGuestService } from 'src/app/shared/services/shared-guest.service';
//Interfaces
import { User } from 'src/app/shared/models/UserRegister.model';
// Constant
import { CONSTANT } from '../../shared/constants/shared-constants';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('loginForm') registartionFrom!: NgForm;


   user:User={
     title:{
      id: 1,
      titleName: ''
     },
     firstName:'',
     lastName:'',
     emailId:'',
     contactNumber: 1234567890,
     dob: new Date,
     userRole: {
      id: 1,
      roleName: "Patient",
      roleType: 'Patient',
     },
     Coutry:{
      id: 1,
      countryCode: 91,
      countryName: '',
     },
     gender:'',
     passwrd:'',
   }
	// Public
	CONSTANT = CONSTANT;
  hide=true;
  constructor(private authService:AuthService,
      private _formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.initRegFrom();
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  initRegFrom(){
    // this.registrationFrom= this._formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required],
    //   contactNumber: ['', Validators.required],
    // });

    
  }
  onRegister(){
    this.authService.register(this.user);
  }
}
