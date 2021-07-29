// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

// Third Party
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
// Module
import { SharedModule } from './shared/shared.module';
// Guard
import { GuestGuard } from './shared/guards/guest.guard';
import { AuthGuard } from './shared/guards/auth.guard';
// Component
import { LayoutComponent } from './shared/components/layouts/layout.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: 'auth',
		component: LayoutComponent,
		canActivate: [GuestGuard],
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '',
		component: LayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'user',
				loadChildren: () => import('./user/user.module').then(m => m.UserModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'auth',
		pathMatch: 'full'
	}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		NgxWebstorageModule.forRoot({ prefix: 'pms', separator: '.', caseSensitive: true }),
		ToastrModule.forRoot(),
		SharedModule
  ],
	exports: [
		RouterModule
	],
  providers: [],
  bootstrap: [
		AppComponent
	]
})
export class AppModule { }
