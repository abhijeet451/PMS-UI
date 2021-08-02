import { Address } from './Address.model';
import { EmergencyContact } from './EmergencyContact.model';
import { Language } from './langauge.model';
import { User } from './UserRegister.model';

export interface PatientDetails{
	 id:Number;
	 user:User;
	 age:number;
	 race:String ;
	 ethnicity:String ;
	 languages:Language[];
	 address:Address;
	 emergencyContact:EmergencyContact; 
}