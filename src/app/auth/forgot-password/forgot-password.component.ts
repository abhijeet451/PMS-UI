// Angular
import { Component } from '@angular/core';
// Constant
import { CONSTANT } from '../../shared/constants/shared-constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

	// Public
	CONSTANT = CONSTANT;
  username: string;
	password: string;
}
