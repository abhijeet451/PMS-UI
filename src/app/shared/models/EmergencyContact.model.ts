import { Address } from "./Address.model";

export interface EmergencyContact{
	firstName: String ;
	lastName: String ;
    relationship: String ;
	email: String ;
	contactNumber: String ;
	address: Address ;
}