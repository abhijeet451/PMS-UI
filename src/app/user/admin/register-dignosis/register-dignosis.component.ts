
// Angular
import { Component } from '@angular/core';
//Interfaces
import { CONSTANT } from 'src/app/shared/constants/shared-constants';
// Constant

@Component({
  selector: 'app-register-dignosis',
  templateUrl: './register-dignosis.component.html',
  styleUrls: ['./register-dignosis.component.css']
})
export class RegisterDignosisComponent {


	// Public
	CONSTANT = CONSTANT;
  hide=true;
  constructor(){}


  onRegister(){
    // this.authService.register(this.user);
  }
}
