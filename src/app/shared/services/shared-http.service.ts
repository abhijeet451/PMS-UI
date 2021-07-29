// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Third Party
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// Service
import { SharedToastrService } from './shared-toastr.service';
// Environment
import { environment } from '../../../environments/environment';

@Injectable()
export class SharedHttpService {

	headers = {};
	private options: any = {};
	private apiUrl = environment.apiURL;

	constructor(
		private http: HttpClient,
		private sharedToastrService: SharedToastrService) {

	}

	get(endpoint = '', params= null) {
		const that = this;
		const queryString = params ? that.objectToQueryString(params) : '';
		endpoint = endpoint + (queryString ? '?' + queryString : '');
		return that.http
			.get(that.apiUrl + endpoint, that.options)
			.pipe(map(function (response) {
				return that.extractData(response);
			}))
			.pipe(catchError(function (error) {
				return that.handleError(error);
			}));
	}

	post(endpoint = '', data: any, params = null) {
		const that = this;
		const queryString = params ? this.objectToQueryString(params) : '';
		endpoint = endpoint + (queryString ? '?' + queryString : '');
		return this.http
			.post(this.apiUrl + endpoint, data, this.options)
			.pipe(map(function (response) {
				return that.extractData(response);
			}))
			.pipe(catchError(function (error) {
				return that.handleError(error);
			}));
	}

	put(endpoint = '', data: any, params= null) {
		const that = this;
		const queryString = params ? this.objectToQueryString(params) : '';
		endpoint = endpoint + (queryString ? '?' + queryString : '');
		return this.http
			.put(this.apiUrl + endpoint, data, this.options)
			.pipe(map(function (response) {
				return that.extractData(response);
			}))
			.pipe(catchError(function (error) {
				return that.handleError(error);
			}));
	}

	delete(endpoint = '', params = null) {
		const that = this;
		const queryString = params ? this.objectToQueryString(params) : '';
		endpoint = endpoint + (queryString ? '?' + queryString : '');
		return this.http
			.delete(this.apiUrl + endpoint, this.options)
			.pipe(map(function (response) {
				return that.extractData(response);
			}))
			.pipe(catchError(function (error) {
				return that.handleError(error);
			}));
	}

	private objectToQueryString(object: any) {
		return Object
			.keys(object)
			.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`)
			.join('&');
	}

	private extractData(res: any) {
		const that = this;
		if (res.code === 500) {
			const body = res.response;
			that.sharedToastrService.pop('error', 'Error', body);
		} else {
			let body = res.response;
			if (body) {
				body = Object.keys(body).map(key => body[key]);
			}
			return body || {};
		}
	}

	private handleError(error: any) {
		const that = this;
		let serverMsg = '';
		if (error.error) {
			const body = error.error;
			if (Object.keys(body).length && body.response && typeof body.response.msg === 'string') {
				serverMsg = body.response.msg;
				that.sharedToastrService.pop('error', 'Error', serverMsg);
			}
		}
		return throwError(error);
	}
}
