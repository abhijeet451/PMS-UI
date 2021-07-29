// Angular
import { Component, OnInit } from '@angular/core';
// Interface
import { ISideNavs } from '../layout.interface';
// Constant
import { CONSTANT } from '../../../constants/shared-constants';

@Component({
  selector: 'app-authenticated-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrls: ['./authenticated-layout.component.css']
})
export class AuthenticatedLayoutComponent implements OnInit {

	// Public
	CONSTANT = CONSTANT;
	navs: ISideNavs[] = [];

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
		this.navs = [{
			label: 'Dashboard',
			route: this.CONSTANT.routes.user.dashboard
		}, {
			label: 'My Profile',
			route: this.CONSTANT.routes.user.profile
		}, {
			label: 'Change Password',
			route: this.CONSTANT.routes.user.changePassword
		}];
	}
}
