import { Allergy } from './../../shared/models/Allergy.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Language } from "src/app/shared/models/langauge.model";
import { User } from "src/app/shared/models/UserRegister.model";
import { SharedToastrService } from 'src/app/shared/services/shared-toastr.service';
import { SharedService } from "src/app/shared/shared.service";
import { PatientDetails } from 'src/app/shared/models/PatientDetails.model';

@Injectable()
export class PatientService{


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
		let patientdetails:Observable<PatientDetails> =
		this._http.get<PatientDetails>("http://localhost:7000/patient/getPatientEmail");
		return patientdetails; 
	}

	getAllLangauges():Observable<Language[]>{
		let langArr:Observable<Language[]> =
		this._http.get<Language[]>('http://localhost:7000/lang/getLang');
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
		let response:Observable<PatientDetails> =
		 this._http.post<PatientDetails>(this.baseUrl+'patient/add',patient);
		response.subscribe((data)=>{
			let pt:PatientDetails=data;
		},
		error=>{
			this.toastr.Info(error.error,"Failed");
		});
		return response;
	}

	getPatientAllergies():Observable<Allergy[]> {
		return this._http.get<Allergy[]>('http://localhost:7000/patient/getAllergies');
		//throw new Error('Method not implemented.');
	  }

	  getAllAlergies():Observable<Allergy[]>{
		  console.log("geting allergy data")
		return this._http.get<Allergy[]>('http://localhost:9888/allergy/all');
	  }
}