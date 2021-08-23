import { PatientDetails } from './../models/PatientDetails.model';

import { HttpClient } from '@angular/common/http';
import { SharedStorageService } from './shared-storage.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Language } from '../models/langauge.model';
import { User } from '../models/UserRegister.model';
import { SharedToastrService } from './shared-toastr.service';
import { error } from '@angular/compiler/src/util';
import { ILoginSubmitPayload, ILoginSubmitResponse } from 'src/app/auth/auth.interface';

@Injectable()
export class SharedGuestService {

    user:User;

	langauges:Language[]=[];

    baseUrl='http://localhost:9200/';
	authUrl='http://localhost:8001/';
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

	// doLogin(payload: ILoginSubmitPayload): Observable<ILoginSubmitResponse> {
		
	//  }

	getAllUser() {
	   console.log(this._http.get<User>(this.baseUrl+'patient/get'));
	}
}
