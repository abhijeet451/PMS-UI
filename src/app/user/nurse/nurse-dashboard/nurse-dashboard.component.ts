// Angular
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
// Service

@Component({
  selector: 'app-nurse-dashboard',
  templateUrl: './nurse-dashboard.component.html',
  styleUrls: ['./nurse-dashboard.component.css']
})
export class NurseDashboardComponent {

	constructor(private sharedService: SharedService) {}

	// Custom Methods
	doLogout() {
		this.sharedService.doLogout();
	}
}
