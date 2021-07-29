import { SharedGuestService } from 'src/app/shared/services/shared-guest.service';
// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// Shared
import { SharedAuthService } from './services/shared-auth.service';
import { SharedHttpService } from './services/shared-http.service';
import { SharedStorageService } from './services/shared-storage.service';
import { SharedToastrService } from './services/shared-toastr.service';

@Injectable()
export class SharedService {

	constructor(
		private authService: SharedAuthService,
		private httpService: SharedHttpService,
		private storageService: SharedStorageService,
		private toastrService: SharedToastrService,
		private sharedGuestService:SharedGuestService,
		private router: Router) { }

	getAuthService() {
		return this.authService;
	}

	getHttpService() {
		return this.httpService;
	}

	getStorageService() {
		return this.storageService;
	}

	getToastrService() {
		return this.toastrService;
	}

	getsharedGuestService() {
		return this.sharedGuestService;
	}

	doLogout() {
		this.getAuthService().logout();
		this.router.navigate(['/auth']);
		// this.router.navigate(['/auth/login']);
	}
}
