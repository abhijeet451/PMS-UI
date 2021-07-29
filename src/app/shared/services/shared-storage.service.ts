// Angular
import { Injectable } from '@angular/core';
// Third Party
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class SharedStorageService {

	constructor(
		private localStorageService: LocalStorageService,
		private sessionStorageService: SessionStorageService) { }

	// Custom Methods
	getLocal() {
		return this.localStorageService;
	}

	getSession() {
		return this.sessionStorageService;
	}

	setItem(arg0: string, token: string) {
		throw new Error('Method not implemented.');
	}
}
