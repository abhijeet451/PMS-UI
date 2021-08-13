// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Module
import { SharedImportsModule } from '../shared/shared-imports.module';
import { PatientModule } from './patient/patient.module';
// Component
import { AuthenticatedLayoutComponent } from '../shared/components/layouts/authenticated-layout/authenticated-layout.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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

const routes: Routes = [{
	path: '',
	component: AuthenticatedLayoutComponent,

	children: [{
		path: '',
		component: UserComponent,

		children: [
					// {path: '',
					// redirectTo: 'profile',
					// pathMatch: 'full'},
					{path: 'dashboard',
					component: DashboardComponent,},
					{path: 'profile',
					component: ProfileComponent	},
					{path: 'change-password',
					component: ChangePasswordComponent}]},
			
					// {path: 'admin',
					// component: UserComponent,
					// //loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
					// children: [{path: '',
					//				redirectTo: 'profile',
					// 				pathMatch: 'full'},
					// 				{path: 'dashboard',
					// 				component: DashboardComponent,},
					// 				{path: 'profile',
					// 				component: ProfileComponent},
					// 				{path: 'change-password',
					// 				component: ChangePasswordComponent}]},

					// 	{path: 'nurse',
					// 	component: UserComponent,
					// 	//loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule);
					// 	children: [{path: '',
					// 				redirectTo: 'profile',
					// 				pathMatch: 'full'},
					// 				{path: 'dashboard',
					// 				component: DashboardComponent,},	
					// 			 	{path: 'profile',
					// 				component: ProfileComponent},
					// 				{path: 'change-password',
					// 				component: ChangePasswordComponent}]},
							
					// {path: 'physician',
					// component: UserComponent,
					// children: [{	path: '',
					// 			  redirectTo: 'profile',
					// 			  pathMatch: 'full'},
					// 			  {path: 'dashboard',
					// 		      component: DashboardComponent,},					
					// 			  {path: 'profile',
					// 			  component: ProfileComponent},
					// 	 		  {path: 'change-password',
					// 			  component: ChangePasswordComponent}]},

					{path: 'patient',
					component: PatientComponent,
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
								component: AllergyComponent}]}
								
				]
				}];

@NgModule({
  declarations: [UserComponent,
				 DashboardComponent,
				 ProfileComponent,
				 ChangePasswordComponent],

  imports: [RouterModule.forChild(routes),
			SharedImportsModule,
			PatientModule,
			NgMultiSelectDropDownModule.forRoot()],

	exports: [RouterModule],

	providers: [
	UserService,{provide: HTTP_INTERCEPTORS,
				 useClass: LoginTokenInterceptor,
				 multi: true }]
				 
})
export class UserModule { }
