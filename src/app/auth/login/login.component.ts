import { User } from './../../shared/models/UserRegister.model';
import { Observable } from 'rxjs';
// Angular
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Third Party
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// Service
import { SharedService } from '../../shared/shared.service';
import { AuthService } from '../auth.service';
// Interface
import { ILoginSubmitPayload, ILoginSubmitResponse } from '../auth.interface';
// Constant
import { CONSTANT } from '../../shared/constants/shared-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

	// Decorator
	@ViewChild('loginForm') loginForm!: NgForm;

	// Public
	CONSTANT = CONSTANT;
	form!: FormGroup;
	username: string;
	password: string;
	hide=true;

	// Private
	private unsubscribe: Subject<void> = new Subject();
 
	constructor(
		private router: Router,
		private sharedService: SharedService,
		private authService: AuthService,
		private fb:FormBuilder) { }

	// Angular Hooks
	/**
	 * Auto called when this component is initialized.
	 *
	 * @return  {void}
	 */

	//  loginForm=this.fb.group({
	// 	username:['',[Validators.required]],
	// 	password:['',Validators.required],
	//   })
	//   get username(){ return this.loginForm.get('username')}
	//   get password(){ return this.loginForm.get('password')}

	

	ngOnInit(): void {
		this.initForm();
	}

	/**
	 * Auto called when this component is removed from the document.
	 *
	 * @return  {void}
	 */
	ngOnDestroy(): void {
		// Destroy all subscriptions.
		if (this.unsubscribe) {
			this.unsubscribe.next();
			this.unsubscribe.complete();
		}
	}

	// Custom Methods
	/**
	 * Prepares the form for login.
	 *
	 * @return  {void}
	 */
	private initForm(): void {
		this.form = new FormGroup({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}

	/**
	 * onClick handler for the form.
	 * Makes the API call by passing the entered username and password in the payload.
	 *
	 * @return  {void}
	 */
	onSubmit(): void {
		const payload: ILoginSubmitPayload = {
			username: this.username,
			password: this.password
		};
		console.log("in login login")
		this.authService
			.login(payload)
			.pipe(takeUntil(this.unsubscribe))
			.subscribe((response: ILoginSubmitResponse) => {
			this.sharedService.getStorageService().getLocal().store('token',response.token);
				this.sharedService.getAuthService().processLoginResponse(response);
				this.getUser(payload.username);
				this.sharedService.getToastrService().Success('Logged In','Success')
			},
			error=>{
				this.sharedService.getToastrService().Error('Not abale To process .. Something went wrong','Failed')
			});
	}

	email = new FormControl('', [Validators.required, Validators.email]);

	getErrorMessage() {
	  if (this.email.hasError('required')) {
		return 'You must enter a value';
	  }
  
	  return this.email.hasError('email') ? 'Not a valid email' : '';
	}

	getUser(email:String):void{

		 this.authService.getUser(email).subscribe((data)=>{
			 console.log(data);
			let role:string=data.userRole;
			this.sharedService.getStorageService().getLocal().store('role',role);
			this.navigate(role)
		},
		error=>{
			console.log(error)
		});	
	}

	navigate(userrole:string){
	console.log("Retrived "+this.sharedService.getStorageService().getLocal().retrieve('role'));

		if(userrole=="ADMIN"){
			console.log("redirecting towards admin")
			this.router.navigate(['/user/admin/dashboard']);
		}
		else if(userrole==="PATIENT"){
		this.router.navigate(['/user/patient/dashboard']);
		}
		else if(userrole==="PHYSICIAN"){
			this.router.navigate(['/user/physician/dashboard']);
		}
	
		else if(userrole==="NURSE"){
			this.router.navigate(['/user/nurse/dashboard']);
		}
		else {
			this.router.navigate(['/']);
		}
	}
}
