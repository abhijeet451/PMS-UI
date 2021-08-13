//models

import { EmergencyContact } from 'src/app/shared/models/EmergencyContact.model';
import { User } from 'src/app/shared/models/UserRegister.model';
// Angular
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Services
import { SharedToastrService } from 'src/app/shared/services/shared-toastr.service';
import { Language } from 'src/app/shared/models/langauge.model';
import { PatientDetails } from 'src/app/shared/models/PatientDetails.model';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent { 

  langaues:FormGroup;
  basicDetailsForm: FormGroup;
  UserDetails: FormGroup;
  LanguageForm: FormGroup;
  EmegencyContactDetails:FormGroup;
  dropdownList:Language[] = [];
  selectedItems:Language[] = [];
  dropdownSettings = {};
  age:number=0;

  emrContact:EmergencyContact={
    firstName: '' ,
    lastName: '' ,
    relationship: '' ,
    email: '' ,
    contactNumber: '' ,
    address:'',
    portalAccess:false
  } 

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

  patientDetails:PatientDetails={
    user:this.usr,
    id:this.age,
    age:this.age,
    race:'' ,
    ethnicity:'',
    languages:this.selectedItems,
    address:'',
    emergencyContact:this.emrContact,
  }
  
  constructor(private _formBuilder: FormBuilder,
              private userService:UserService,
              private toastr:SharedToastrService) {}

  ngOnInit(){
    this.initLangForm();
    this.getAllLang();
    this.initFullForm();
    this.getPatient();

    this.dropdownSettings = {
      singleSelection: false,
      idField:'langId',
      textField:'langName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
      this.selectedItems = [ ];        
  }


  initLangForm(){
    this.LanguageForm = this._formBuilder.group({
      langaues: ['', Validators.required]
  });
  }

  initFullForm(){

    this.UserDetails = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      contactNumber: ['', Validators.required],
      gender: ['', Validators.required],});
      this.UserDetails.disable();

    this.basicDetailsForm = this._formBuilder.group({
      age: ['', Validators.required],
      race: ['', Validators.required],
      ethnicity: ['', Validators.required],
      address: ['', Validators.required],
    });
    
    this.EmegencyContactDetails = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      relationship: ['', Validators.required],
      email: ['', Validators.required],
      contactNumber: ['', Validators.required],
      address: ['', Validators.required],
    });


  }
  getAllLang(){
    this.userService.getAllLangauges().subscribe((data)=>{
      this.dropdownList=data;
    })
  }

  handleButtonClick(){
    console.log('reactive form value ', this.LanguageForm.value);
    console.log('Actual data ', this.getObjectListFromData(this.LanguageForm.value.langaues
      .map((Language: { langId: any; }) => Language.langId)));
  }

  onItemSelect($event:any){
    console.log('$event is ', $event);
    this.selectedItems.push($event);
    console.log(this.selectedItems);
  }
  onItemDeSelect($event:any){
    console.log('DeSelected element ', $event);
    console.log(this.selectedItems.pop());

    // let lang:Language=event;
    // console.log('lang is'+lang);
    // const index: number = this.selectedItems.indexOf(lang);
    // console.log(index);
    // if (index !== -1) {
    //     this.selectedItems.splice(index, 1);
    // } 
   console.log(this.selectedItems);
  }

  getObjectListFromData(ids:any){
    return this.dropdownList.filter(item => ids.includes(item.langId))
  }

  setDefaultSelection(){
    let item = this.dropdownList[1];
    this.LanguageForm.patchValue({
      langaues : [{
        langId : item['langId'],
        langName : item['langName']
      }]  
    })
  }

  submit(){
    console.log(this.patientDetails);
    this.userService.SavePatientDetails(this.patientDetails);
  }

  onChange($event:any){
    if($event.target.checked){
      this.patientDetails.emergencyContact.address=this.patientDetails.address;
    }
    else{
      this.patientDetails.emergencyContact.address='';
    }
  } 

  getPatient(){
    this.userService.getPatientDetails().subscribe((data)=>{
        this.patientDetails=data;
        console.log(this.patientDetails.user)
       let dateofbirth:Date=this.patientDetails.user.dob;
       console.log(dateofbirth)
        // var date = new Date(Date.UTC(year, month, day));
        this.selectedItems=data.languages;
        this.toastr.Info("Your Profile Details are Completed","Profile is Complete");
    },
    (error)=>{
      this.toastr.Info(error.error.message,"InComplete Profile");
    }
    );
  
  }

}
