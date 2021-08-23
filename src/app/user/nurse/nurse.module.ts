
// Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Module
import { SharedImportsModule } from 'src/app/shared/shared-imports.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// Component

//others
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginTokenInterceptor } from 'src/app/shared/interceptors/loginTokenInterceptor.service';
import { NurseComponent } from './nurse.component';
import { NurseDashboardComponent } from './nurse-dashboard/nurse-dashboard.component';


// const routes: Routes = 
// 	[{
// 	path: '',
// 	component: AuthenticatedLayoutComponent,
// 	children: 

// 		[{
// 		path: '',
// 		component: UserComponent,
// 		children:

// 			[{
// 			path: '',
// 			component: PatientComponent,

// 			children:
// 				[{path: '',
// 					redirectTo: 'dashboard',
// 					pathMatch: 'full'},

// 					{path: 'dashboard',
// 					component: PatientDashboardComponent,},

// 					{path: 'profile',
// 					component: ProfileComponent},

// 					{path: 'change-password',
// 					component: ChangePasswordComponent},

// 					{path: 'allergy',
// 					component: AllergyComponent
// 				}]
// 			}]
// 		}]
// 	}];

@NgModule({
  declarations: [
	NurseComponent,
	NurseDashboardComponent
	],
  imports: [
		SharedImportsModule,
		NgMultiSelectDropDownModule.forRoot()
	],
	exports: [
	],
  providers: [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: LoginTokenInterceptor,
		multi: true ,
	}
]
})
export class NurseModule { }