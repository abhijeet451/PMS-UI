import { PatientDetails } from './../shared/models/PatientDetails.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from "../shared/models/langauge.model";
import { SharedService } from "../shared/shared.service";

@Injectable()
export class UserService{

	constructor(
		private sharedService: SharedService) { }

	// Custom Methods
	/**
	 * Makes API call for user login.
	 *
	 * 
	 *
	 * @return  {Observable<Language>}
	 */
	

	getAllLangauges():Observable<Language[]>{
		let allLangaues:Observable<Language[]> =this.sharedService.getsharedGuestService().getAllLaguages();
		return allLangaues; 
	}

	getPatientDetails():Observable<PatientDetails>{
		let patientdetails:Observable<PatientDetails> =this.sharedService.getsharedGuestService().getPatientDetails();
		return patientdetails; 
	}

	SavePatientDetails(details:PatientDetails):Observable<PatientDetails>{
		let patientdetails:Observable<PatientDetails> =this.sharedService.getsharedGuestService().savePatient(details);
		return patientdetails; 
	}
}