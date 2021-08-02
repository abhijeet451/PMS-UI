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

	Success(message:string,title?:string){
		this.toastrService.success(message,title);
	}
	Warning(message:string,title?:string){
		this.toastrService.warning(message,title);
	}
	Error(message:string,title?:string){
		this.toastrService.error(message,title);
	}
	Info(message:string,title?:string){
		this.toastrService.info(message,title);
	}
}
