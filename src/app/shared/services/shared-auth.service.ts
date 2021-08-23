// Angular
import { Injectable } from '@angular/core';
// Service
import { SharedStorageService } from './shared-storage.service';
// Interface
import { ILoginSubmitResponse } from '../../auth/auth.interface';

@Injectable()
export class SharedAuthService {

	constructor(
		private sharedStorageService: SharedStorageService) { }

	// Custom Methods
	isLoggedIn() {
		return this.sharedStorageService.getLocal().retrieve('isLoggedIn') === true;
	}

	processLoginResponse(response: ILoginSubmitResponse) {
		this.sharedStorageService.getLocal().store('isLoggedIn', true);
		this.sharedStorageService.getLocal().store('token', response.token);
	}

	logout() {
		this.sharedStorageService.getLocal().store('isLoggedIn', false);
		this.sharedStorageService.getLocal().store('token', null);
		this.sharedStorageService.getLocal().store('role', null);
	}
}
