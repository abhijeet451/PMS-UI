// Angular
import { Component } from '@angular/core';
//Interfaces
import { CONSTANT } from 'src/app/shared/constants/shared-constants';
// Constant

@Component({
  selector: 'app-register-medication',
  templateUrl: './register-medication.component.html',
  styleUrls: ['./register-medication.component.css']
})
export class RegisterMedicationComponent {

   
	// Public
	CONSTANT = CONSTANT;
  hide=true;
  constructor(){}
  onRegister(){
    // this.authService.register(this.user);
  }
}
