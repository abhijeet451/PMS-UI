//models
import { User } from 'src/app/shared/models/UserRegister.model';
// Angular
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Services
import { SharedToastrService } from 'src/app/shared/services/shared-toastr.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent { 

  UserDetails: FormGroup;
  age:number=0;
  
   usr:User={
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
  constructor(private _formBuilder: FormBuilder,
              private userService:UserService,
              private toastr:SharedToastrService) {}

  ngOnInit(){
    this.initFullForm();      
  }
  initFullForm(){
    this.UserDetails = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      contactNumber: ['', Validators.required],
      gender: ['', Validators.required],});
  }

  submit(){}
}
