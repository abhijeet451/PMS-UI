import { CONSTANT } from './../shared/constants/shared-constants';
import { HttpClient } from '@angular/common/http';
// Angular
import { Injectable } from '@angular/core';
// Third Party
import { Observable, of } from 'rxjs';
// Service
import { SharedService } from '../shared/shared.service';
// Interface
import { ILoginSubmitPayload, ILoginSubmitResponse } from './auth.interface';
import { User } from '../shared/models/UserRegister.model';

// Environment
import { environment } from '../../environments/environment';
import { coerceStringArray } from '@angular/cdk/coercion';
import { UserInfo } from '../shared/models/UserInfo.model';

@Injectable()
export class AuthService {
	
	newUrl:String ='http://localhost:8001/';

	constructor(
		private sharedService: SharedService,
		private _http:HttpClient) { }

	// Custom Methods
	/**
	 * Makes API call for user login.
	 *
	 * @param   {ILoginSubmitPayload}  payload
	 *
	 * @return  {Observable<ILoginSubmitResponse>}
	 */
	login(payload: ILoginSubmitPayload): Observable<ILoginSubmitResponse> {
		return this._http.post<ILoginSubmitResponse>(this.newUrl+'authenticate',payload); 
		//return this.sharedService.getsharedGuestService().doLogin(payload);
		// console.log(payload);
		// return this._http.post<JwtResponse>(this.authUrl,payload);
	}

	register(user:User){
		this.sharedService.getsharedGuestService().registerUser(user);
		console.log(user);
		return 'SUCCESS'; 
	}

	getUser(email:String):Observable<UserInfo> {
		return this._http.get<UserInfo>(this.newUrl+'user/'+email);
	 }
}
