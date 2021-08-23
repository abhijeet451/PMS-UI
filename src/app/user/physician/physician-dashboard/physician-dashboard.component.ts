// Angular
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
// Service

@Component({
  selector: 'app-physician-dashboard',
  templateUrl: './physician-dashboard.component.html',
  styleUrls: ['./physician-dashboard.component.css']
})
export class PhysicianDashboardComponent {

	constructor(private sharedService: SharedService) {}

	// Custom Methods
	doLogout() {
		this.sharedService.doLogout();
	}
}
