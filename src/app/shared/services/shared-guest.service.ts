
import { HttpClient } from '@angular/common/http';
import { SharedStorageService } from './shared-storage.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Language } from '../models/langauge.model';
import { User } from '../models/UserRegister.model';

@Injectable()
export class SharedGuestService {

    user:User;
	langauges:Language[]=[
		{
			lang_id:1,
			lang_name:'',
		}
	];

    baseUrl='http://localhost:9200/';
	constructor(
		private SharedStorageService: SharedStorageService,
        private _http : HttpClient) { }

	// Custom Methods
	registerUser(user1:User): Observable<User> {
        this.user=user1;
	   console.log("In Shared Guest Service");
		console.log(this.user);
		//console.log(this.getAllUser())
		this.getAllLaguages();
	 	let response:Observable<User> = this._http.post<User>(this.baseUrl+'user/register',this.user); 
		 response.subscribe((data)=>{
			 this.user=data;
		 });
		console.log(this.user);
		 return response;
	}

	getAllUser() {
	   console.log(this._http.get<User>(this.baseUrl+'user/get'));
	}

	getAllLaguages(){
		console.log("In Langauges")
		let langArr:Observable<Language[]> =this._http.get<Language[]>(this.baseUrl+'lang/getLang');
		console.log(langArr);
		langArr.subscribe((data)=>{
			this.langauges=data;
		});
		console.log(this.langauges);
	}
}
