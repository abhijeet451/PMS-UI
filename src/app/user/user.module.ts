// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Module
import { SharedImportsModule } from '../shared/shared-imports.module';
// Component
import { AuthenticatedLayoutComponent } from '../shared/components/layouts/authenticated-layout/authenticated-layout.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
  
//others
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginTokenInterceptor } from '../shared/interceptors/Token-Interceptor.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

const routes: Routes = [{
	path: '',
	component: AuthenticatedLayoutComponent,
	children: [{
		path: '',
		component: UserComponent,
		children: [
			{
				path: '',
				redirectTo: 'profile',
				pathMatch: 'full'
			},
			{
				path: 'dashboard',
				component: DashboardComponent,
				
			},
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: 'change-password',
				component: ChangePasswordComponent
			}
		]
	}]
}];

@NgModule({
  declarations: [
		UserComponent,
		DashboardComponent,
		ProfileComponent,
		ChangePasswordComponent
	],
  imports: [
		RouterModule.forChild(routes),
		SharedImportsModule,
		NgMultiSelectDropDownModule.forRoot()
	],
	exports: [
		RouterModule
	],
  providers: []
})
export class UserModule { }
