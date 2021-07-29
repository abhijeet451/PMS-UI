// Angular
import { Injectable } from '@angular/core';
// Third Party
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class SharedToastrService {

	constructor(
		private toastrService: ToastrService) { }

	pop(type = '', header = '', body = '') {
		switch(type) {
			case 'success':
				return this.toastrService.success(body, header);

			case 'error':
				return this.toastrService.error(body, header);

			default:
				return this.toastrService.info(body, header);
		}
	}
}
