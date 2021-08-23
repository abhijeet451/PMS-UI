import { PhysicianGuard } from './guards/physician.guard';
import { RegisterAllergyComponent } from './admin/register-allergy/register-allergy.component';
import { RegisterMedicationComponent } from './admin/register-medication/register-medication.component';
import { AdminModule } from './admin/admin.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Module
import { SharedImportsModule } from '../shared/shared-imports.module';
import { PatientModule } from './patient/patient.module';
// Component
import { AuthenticatedLayoutComponent } from '../shared/components/layouts/authenticated-layout/authenticated-layout.component';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
//others
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginTokenInterceptor } from '../shared/interceptors/loginTokenInterceptor.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserService } from './user.service';
import { PatientComponent } from './patient/patient.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { AllergyComponent } from './patient/allergy/allergy.component';
import { DemographicComponent } from './patient/demographic/demographic.component';
import { AppointmentComponent } from './patient/appointment/appointment.component';
import { PatientService } from './patient/patient.service';
import { AdminComponent } from './admin/admin.component';
import { NurseComponent } from './nurse/nurse.component';
import { NurseDashboardComponent } from './nurse/nurse-dashboard/nurse-dashboard.component';
import { NurseModule } from './nurse/nurse.module';
import { RegisterDignosisComponent } from './admin/register-dignosis/register-dignosis.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';

const routes: Routes = [{
	path: '',
	component: AuthenticatedLayoutComponent,

	children: [
		// {
		// path: '',
		// component: UserComponent,
		// children: [
		// 			{path: '',
		// 			redirectTo: 'profile',
		// 			pathMatch: 'full'},
		// 			{path: 'dashboard',
		// 			component: DashboardComponent,},
		// 			{path: 'profile',
		// 			component: ProfileComponent	},					
		// 			{path: 'change-password',
		// 			component: ChangePasswordComponent}
		// 		]},
			
					
					{path: 'admin',
					component: AdminComponent,
					//canActivate: [AdminGuard],
					// loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)	},
					children: [{path: '',
								redirectTo: 'dashboard',
								pathMatch: 'full'},

								{path: 'dashboard',
								component: AdminDashboardComponent,},

								{path: 'user',
								component: RegisterUserComponent,},

								{path: 'allergy',
								component: RegisterAllergyComponent,},

								{path: 'medication',
								component: RegisterMedicationComponent,},

								{path: 'diagnosis',
								component: RegisterDignosisComponent,},

								{path: 'profile',
								component: ProfileComponent},

								{path: 'change-password',
								component: ChangePasswordComponent,}]},

						{path: 'nurse',
						component: NurseComponent,
						//canActivate: [NurseGuard],
						//loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule);
						children: [{path: '',
									redirectTo: 'profile',
									pathMatch: 'full'},
									{path: 'dashboard',
									component: NurseDashboardComponent,},	
								 	{path: 'profile',
									component: ProfileComponent},
									{path: 'change-password',
									component: ChangePasswordComponent}]},
							
					{path: 'physician',
					component: UserComponent,
					canActivate: [PhysicianGuard],
					children: [{	path: '',
								  redirectTo: 'profile',
								  pathMatch: 'full'},
								//   {path: 'dashboard',
							    //   component: DashboardComponent,},					
								  {path: 'profile',
								  component: ProfileComponent},
						 		  {path: 'change-password',
								  component: ChangePasswordComponent}]},


					{path: 'patient',
					component: PatientComponent,
					//canActivate: [PatientGuard],
					children: [{path: '',
								redirectTo: 'dashboard',
								pathMatch: 'full'},
								{path: 'dashboard',
								component: PatientDashboardComponent,},
								{path: 'profile',
								component: ProfileComponent},
								{path: 'demographic',
								component: DemographicComponent},
								{path: 'change-password',
								component: ChangePasswordComponent},
								{path: 'allergy',
								component: AllergyComponent},
								{path: 'appointment',
								component: AppointmentComponent}]}
								
				]
				}];

@NgModule({
  declarations: [UserComponent,
				 ProfileComponent,
				 ChangePasswordComponent],

  imports: [RouterModule.forChild(routes),
			SharedImportsModule,
			PatientModule,
			AdminModule,
			NurseModule,
			NgMultiSelectDropDownModule.forRoot()],

	exports: [RouterModule],

	providers: [
	UserService,
	PatientService,
	{provide: HTTP_INTERCEPTORS,
	 useClass: LoginTokenInterceptor,
	 multi: true }]
				 
})
export class UserModule { }
