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

@Injectable()
export class AuthService {
	
	authUrl:'http://localhost:8001/authenticate';

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
		// const url: string = environment.apiURL + '/login';
		//return this.sharedService.getHttpService().post(this.authUrl, payload);

		return of({
			token: 'HardCodedToken'
		});
		// console.log(payload);
		// return this._http.post<JwtResponse>(this.authUrl,payload);

	}

	register(user:User){
		this.sharedService.getsharedGuestService().registerUser(user);
		console.log(user);
		return 'SUCCESS'; 
	}





}
