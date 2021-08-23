import { PatientService } from './../patient.service';
import { Allergy } from './../../../shared/models/Allergy.model';
// Angular
import { Component, OnInit } from '@angular/core';
// Service
import { SharedToastrService } from 'src/app/shared/services/shared-toastr.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css'],
})
export class AllergyComponent implements OnInit {

  AllergyForm: FormGroup;
  dropdownList:Allergy[] = [];
  selectedItems:Allergy[] = [];
  dropdownSettings = {};

	constructor(private _formBuilder: FormBuilder,
            private patientService:PatientService,
             private toastr:SharedToastrService) {}

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
    this.getPatientAllergies();
    this.getAllAllergies();

    this.AllergyForm = this._formBuilder.group({
      langaues: ['', Validators.required]
  });

    this.dropdownSettings = {
      singleSelection: false,
      idField:'allergyId',
      textField:'allergyName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
      this.selectedItems = [ ]; 
  }
  dataSource:Allergy[] ;
 
  getPatientAllergies(){
    this.patientService.getPatientAllergies().subscribe((data)=>{
      this.dataSource=data;
      this.toastr.Info("message","Success");
    },
    error=>{
      this.toastr.Info(error.error.message,"Failed");
    })
  }

  addData() {
  }

  removeData() {
  }

  getAllAllergies(){
    this.patientService.getAllAlergies().subscribe((data)=>{
      this.dropdownList=data;
      this.toastr.Success("Received","Ok");
     
    },
    error=>{
      
      this.toastr.Info(error.error.message,"Failed");
    })
  }
  handleButtonClick(){
    // console.log('reactive form value ', this.AllergyForm.value);
    console.log('Actual data ', this.getObjectListFromData(this.AllergyForm.value.alergies
      .map((Allergy: { allergyId: any; }) => Allergy.allergyId)));
  }

  onItemSelect($event:any){
    // console.log('$event is ', $event);
    this.selectedItems.push($event);
    // console.log(this.selectedItems);
  }
  onItemDeSelect($event:any){
    console.log('DeSelected element ', $event);
    console.log(this.selectedItems.pop());
  }

  
  getObjectListFromData(ids:any){
    return this.dropdownList.filter(item => ids.includes(item.allergyId))
  }

  submitAllergies(){
    console.log(this.selectedItems);
  }

}




