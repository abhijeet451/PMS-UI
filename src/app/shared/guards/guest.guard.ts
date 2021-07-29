// Angular
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// Third Party
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// Service
import { SharedService } from '../shared.service';
// Constant
import { CONSTANT } from '../constants/shared-constants';

@Injectable()
export class GuestGuard implements CanActivate {

	/**
	 * Creates an instance of SharedCanActivateAuthService.
	 * 
	 * @param {Router} router 
	 * @param {SharedService} sharedService
	 * 
	 * @memberOf SharedCanActivateAuthService
	 */
	constructor(
		private router: Router,
		private sharedService: SharedService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		const isLoggedIn: boolean = this.sharedService.getAuthService().isLoggedIn();
		if (isLoggedIn) {	// if already logged in then redirect to dashboard
			this.router.navigate([CONSTANT.routes.user.dashboard]);
			return of(true);
		} else {	// if not logged in then allow the navigation
			return of(true);
		}
	}
}
