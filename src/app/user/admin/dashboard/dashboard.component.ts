// Angular
import { Component } from '@angular/core';
// Service
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

	constructor(private sharedService: SharedService) {}

	// Custom Methods
	doLogout() {
		this.sharedService.doLogout();
	}
}
