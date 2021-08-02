import { PatientDetails } from './../models/PatientDetails.model';

import { HttpClient } from '@angular/common/http';
import { SharedStorageService } from './shared-storage.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Language } from '../models/langauge.model';
import { User } from '../models/UserRegister.model';
import { SharedToastrService } from './shared-toastr.service';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class SharedGuestService {

    user:User;

	langauges:Language[]=[];

    baseUrl='http://localhost:9200/';
	constructor(
		private SharedStorageService: SharedStorageService,
        private _http : HttpClient,
		private tostr:SharedToastrService) { }

	// Custom Methods
	registerUser(user1:User): Observable<User> {
        this.user=user1;
	   console.log("In Shared Guest Service");
	 	let response:Observable<User> = this._http.post<User>(this.baseUrl+'user/register',this.user); 
		 response.subscribe((data)=>{
			this.user=data;
			this.tostr.Success("You are Registerd Successfully","Registerd");
		 },
		 error=>{
			this.tostr.Error("Not able to Regsiter Try Again","Failed");
		 }
		 );
		console.log(this.user);
		 return response;
	}

	getAllUser() {
	   console.log(this._http.get<User>(this.baseUrl+'patient/get'));
	}

	getAllLaguages():Observable<Language[]>{
		let langArr:Observable<Language[]> =this._http.get<Language[]>(this.baseUrl+'lang/getLang');
		langArr.subscribe((data)=>{
			this.langauges=data;
			this.tostr.Success("Languages Loaded Successfully","Loaded");
		},
		error=>{
			this.tostr.Error("Error while getting the Languages","Failed");
		});
		return langArr;
	}

	getPatientDetails(){
		return this._http.get<PatientDetails>(this.baseUrl+'patient/getPatientbyId')
	}

	savePatient(patient:PatientDetails){
		let response:Observable<PatientDetails> = this._http.post<PatientDetails>(this.baseUrl+'patient/add',patient);
		response.subscribe((data)=>{
			let pt:PatientDetails=data;
		},
		error=>{
			console.log(alert("Error while getting the Patient Details"))
		});
		return response;
	}
}
