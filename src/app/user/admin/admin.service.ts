import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from 'src/app/shared/models/langauge.model';
import { User } from 'src/app/shared/models/UserRegister.model';
import { SharedToastrService } from 'src/app/shared/services/shared-toastr.service';
import { SharedService } from 'src/app/shared/shared.service';


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

}