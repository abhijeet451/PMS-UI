import { HttpClient } from '@angular/common/http';
import { PatientDetails } from './../shared/models/PatientDetails.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from "../shared/models/langauge.model";
import { SharedService } from "../shared/shared.service";
import { SharedToastrService } from '../shared/services/shared-toastr.service';
import { User } from '../shared/models/UserRegister.model';

@Injectable()
export class UserService{

	user:User;
	langauges:Language[]=[];
	baseUrl='http://localhost:9200/';

	constructor(
		private sharedService: SharedService,
		private _http:HttpClient,
		private toastr:SharedToastrService) { }

	// Custom Methods
	/**
	 * Makes API call for user login.
	 *
	 * 
	 *
	 * @return  {Observable<Language>}
	 * @return  {Observable<PatientDetails>}
	 */
	
	getPatientDetails():Observable<PatientDetails>{
		let patientdetails:Observable<PatientDetails> =this._http.get<PatientDetails>("http://localhost:7000/patient/getPatientEmail");
		return patientdetails; 
	}

	getAllLangauges():Observable<Language[]>{
		let langArr:Observable<Language[]> =this._http.get<Language[]>('http://localhost:7000/lang/getLang');
		langArr.subscribe((data)=>{
			this.langauges=data;
			this.toastr.Success("Languages Loaded Successfully","Loaded");
		},
		error=>{
			this.toastr.Error("Error while getting the Languages","Failed");
		});
		return langArr;
	}

	SavePatientDetails(patient:PatientDetails):Observable<PatientDetails>{
		let response:Observable<PatientDetails> = this._http.post<PatientDetails>(this.baseUrl+'patient/add',patient);
		response.subscribe((data)=>{
			let pt:PatientDetails=data;
		},
		error=>{
			this.toastr.Info(error.error,"Failed");
		});
		return response;
	}
}