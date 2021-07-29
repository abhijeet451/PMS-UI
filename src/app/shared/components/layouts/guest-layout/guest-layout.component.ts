// Angular
import { Component } from '@angular/core';
// Constant
import { CONSTANT } from '../../../constants/shared-constants';

@Component({
  selector: 'app-guest-layout',
  templateUrl: './guest-layout.component.html',
  styleUrls: ['./guest-layout.component.css']
})
export class GuestLayoutComponent {

	// Public
	CONSTANT = CONSTANT;
}
