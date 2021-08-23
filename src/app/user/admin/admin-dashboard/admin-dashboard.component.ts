// Angular
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
// Service


@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

	constructor(private sharedService: SharedService) {}

	// Custom Methods
	doLogout() {
		this.sharedService.doLogout();
	}
}
