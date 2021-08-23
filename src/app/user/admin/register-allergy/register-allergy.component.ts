
// Angular
import { Component } from '@angular/core';
//Interfaces
import { CONSTANT } from 'src/app/shared/constants/shared-constants';
// Constant

@Component({
  selector: 'app-register-allergy',
  templateUrl: './register-allergy.component.html',
  styleUrls: ['./register-allergy.component.css']
})
export class RegisterAllergyComponent {
	// Public
	CONSTANT = CONSTANT;
  hide=true;
  constructor(){}

  onRegister(){
    // this.authService.register(this.user);
  }
}
