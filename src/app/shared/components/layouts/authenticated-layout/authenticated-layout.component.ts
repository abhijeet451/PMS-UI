// Angular
import { Component, OnInit } from '@angular/core';
// Interface
import { ISideNavs } from '../layout.interface';
// Constant
import { CONSTANT } from '../../../constants/shared-constants';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-authenticated-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.css']
})
export class AuthenticatedLayoutComponent implements OnInit {

	// Public
	CONSTANT = CONSTANT;
	navs: ISideNavs[] = [];
	constructor(private sharedService :SharedService){}
	// Angular Hooks
	/**
	 * Auto called when this component is initialized.
	 *
	 * @return  {void}
	 */
	 ngOnInit(): void {
		this.initNavs();
	}

	// Custom Methods
	/**
	 * Prepares the navigation menu.
	 *
	 * @return  {void}
	 */
	 private initNavs(): void {
		let role=this.sharedService.getStorageService().getLocal().retrieve('role')
		 if(role=="ADMIN"){
			this.navs = [{
				label: 'Dashboard',
				icon:'dashboard',
				route: this.CONSTANT.routes.user.admin.dashboard
			}, {
				label: 'My Profile',
				icon:'account_circle',
				route: this.CONSTANT.routes.user.admin.profile
			}, {
				label: 'Change Password',
				icon:'password',
				route: this.CONSTANT.routes.user.admin.changePassword
			},
			{
				label: 'Add User',
				icon:'group_add',
				route: this.CONSTANT.routes.user.admin.user
			},{
				label: 'Add Allergy',
				icon:'coronavirus',
				route: this.CONSTANT.routes.user.admin.allergy
			},{
				label: 'Add Medication',
				icon:'medication_liquid',
				route: this.CONSTANT.routes.user.admin.mediaction
			},{
				label: 'Add Diagnosis',
				icon:'healing',
				route: this.CONSTANT.routes.user.admin.diagnosis
			}
		];
		}

		if(this.CONSTANT.role=='PATIENT') {
			this.navs = [{
				label: 'Dashboard',
				icon:'dashboard',
				route: this.CONSTANT.routes.user.patient.dashboard
			}, {
				label: 'My Profile',
				icon:'account_circle',
				route: this.CONSTANT.routes.user.patient.profile
			},
			 {
				label: 'Demographic Details',
				icon:'manage_accounts',
				route: this.CONSTANT.routes.user.patient.demographic
			} ,{
				label: 'Change Password',
				icon:'password',
				route: this.CONSTANT.routes.user.patient.changePassword
			}, {
				label: 'Allergy',
				icon:'healing',
				route: this.CONSTANT.routes.user.patient.allergy
			},{
				label: 'Appointments',
				icon:'event',
				route: this.CONSTANT.routes.user.patient.appointments
			}];
		} 
		if (this.CONSTANT.role=='NURSE'){
			this.navs = [{
				label: 'Dashboard',
				icon:'dashboard',
				route: this.CONSTANT.routes.user.nurse.dashboard
			}, {
				label: 'My Profile',
				icon:'account_circle',
				route: this.CONSTANT.routes.user.nurse.profile
			}, {
				label: 'Change Password',
				icon:'password',
				route: this.CONSTANT.routes.user.nurse.changePassword
			}];
		}
		
		if(this.CONSTANT.role=='PHYSICIAN'){
			this.navs = [{
				label: 'Dashboard',
				icon:'dashboard',
				route: this.CONSTANT.routes.user.patient.dashboard
			}, {
				label: 'My Profile',
				icon:'account_circle',
				route: this.CONSTANT.routes.user.patient.profile
			}, {
				label: 'Change Password',
				icon:'password',
				route: this.CONSTANT.routes.user.patient.changePassword
			}];
		}

		// else{
		// 	this.navs = [{
		// 		label: 'Dashboard',
		// 		icon:'dashboard',
		// 		route: this.CONSTANT.routes.user.patient.dashboard
		// 	}, {
		// 		label: 'My Profile',
		// 		icon:'account_circle',
		// 		route: this.CONSTANT.routes.user.patient.profile
		// 	},
		// 	 {
		// 		label: 'Demographic Details',
		// 		icon:'manage_accounts',
		// 		route: this.CONSTANT.routes.user.patient.demographic
		// 	} ,{
		// 		label: 'Change Password',
		// 		icon:'password',
		// 		route: this.CONSTANT.routes.user.patient.changePassword
		// 	}, {
		// 		label: 'Allergy',
		// 		icon:'healing',
		// 		route: this.CONSTANT.routes.user.patient.allergy
		// 	},{
		// 		label: 'Appointments',
		// 		icon:'event',
		// 		route: this.CONSTANT.routes.user.patient.appointments
		// 	}];
		// }
	}

	logout(){
		console.log("Logout")
	}
}

