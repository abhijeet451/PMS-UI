// Angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Guard
import { GuestGuard } from './guards/guest.guard';
import { AuthGuard } from './guards/auth.guard';
// Service
import { SharedToastrService } from './services/shared-toastr.service';
import { SharedStorageService } from './services/shared-storage.service';
import { SharedAuthService } from './services/shared-auth.service';
import { SharedHttpService } from './services/shared-http.service';
import { SharedService } from './shared.service';
import { SharedGuestService } from './services/shared-guest.service';

@NgModule({
	declarations: [],
	imports: [
		HttpClientModule
	],
	providers: [
		SharedToastrService,
		SharedStorageService,
		SharedAuthService,
		SharedHttpService,
		SharedService,
		SharedGuestService,
		GuestGuard,
		AuthGuard,
		
	]
})
export class SharedModule { }
