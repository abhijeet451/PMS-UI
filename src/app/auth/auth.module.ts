// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Module
import { SharedImportsModule } from '../shared/shared-imports.module';
// Component
import { GuestLayoutComponent } from '../shared/components/layouts/guest-layout/guest-layout.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
// Service
import { AuthService } from './auth.service';
import { SharedGuestService } from '../shared/services/shared-guest.service';


const routes: Routes = [{
	path: '',
	component: GuestLayoutComponent,
	children: [{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'register',
				component: RegisterComponent
			},
			{
				path: 'forgot-password',
				component: ForgotPasswordComponent
			},
			{
				path: 'reset-password',
				component: ResetPasswordComponent
			}
		]
	}]
}];

@NgModule({
  declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		ForgotPasswordComponent,
		ResetPasswordComponent
	],
  imports: [
		RouterModule.forChild(routes),
		SharedImportsModule
	],
	exports: [
		RouterModule
	],
  providers: [
		AuthService,
		SharedGuestService,
	]
})
export class AuthModule { }
