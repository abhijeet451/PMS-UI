import { RegisterMedicationComponent } from './register-medication/register-medication.component';
import { RegisterDignosisComponent } from './register-dignosis/register-dignosis.component';
import { RegisterAllergyComponent } from './register-allergy/register-allergy.component';

// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Module
import { SharedImportsModule } from 'src/app/shared/shared-imports.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// Component
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

//others
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginTokenInterceptor } from 'src/app/shared/interceptors/loginTokenInterceptor.service';
import { UserComponent } from '../user.component';
import { ProfileComponent } from '../profile/profile.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';


// const routes: Routes = 
// 	[{
// 		path: '',
// 		component: UserComponent,
// 		children:
// 			[{
// 			path: '',
// 			component: AdminComponent,
// 							children: [{path: '',
// 									redirectTo: 'profile',
// 									pathMatch: 'full'},
// 									{path: 'dashboard',
// 									component: AdminDashboardComponent,},
// 									{path: 'adduser',
// 									component: RegisterUserComponent,},
// 									{path: 'addallergy',
// 									component: RegisterAllergyComponent,},
// 									{path: 'addmedication',
// 									component: RegisterMedicationComponent,},
// 									{path: 'adddiagnosis',
// 									component: RegisterDignosisComponent,},
// 									{path: 'profile',
// 									component: ProfileComponent},
// 									{path: 'change-password',
// 									component: ChangePasswordComponent,}]
// 			}]
// 	}];

@NgModule({
  declarations: [
    AdminDashboardComponent,
	RegisterUserComponent,
	RegisterAllergyComponent,
	RegisterDignosisComponent,
	RegisterMedicationComponent,
	AdminComponent,
	],
  imports: [
		SharedImportsModule,
		NgMultiSelectDropDownModule.forRoot(),
		//RouterModule.forRoot(routes),
	],
	exports: [
		AdminDashboardComponent,
		AdminComponent,
		RegisterUserComponent,
		RegisterAllergyComponent,
		RegisterDignosisComponent,
		RegisterMedicationComponent
	],
  providers: [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: LoginTokenInterceptor,
		multi: true ,
	}
]
})
export class AdminModule { }