// Angular
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
// Service

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {

	constructor(private sharedService: SharedService) {}

	// Custom Methods
	doLogout() {
		this.sharedService.doLogout();
	}
}
