// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Third Party
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule } from '@angular/material/card';
import {MatInputModule } from '@angular/material/input';
import{ MatDialogModule } from '@angular/material/dialog';
import{MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
// Component
import { LayoutComponent } from './components/layouts/layout.component';
import { GuestLayoutComponent } from './components/layouts/guest-layout/guest-layout.component';
import { AuthenticatedLayoutComponent } from './components/layouts/authenticated-layout/authenticated-layout.component';



const importExportList: any[] = [
	// Angular
	CommonModule,
	RouterModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	// Material Components
	MatButtonModule,
	MatStepperModule,
	MatGridListModule,
	MatToolbarModule,
	MatCheckboxModule,
	MatSidenavModule,
	MatListModule,
	MatIconModule,
	MatToolbarModule,
	MatButtonModule, 
	MatCardModule,
	MatInputModule,
	MatDialogModule,
	MatTableModule,
	MatMenuModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatDatepickerModule,
	MatRadioModule
];

@NgModule({
	declarations: [
		LayoutComponent,
		GuestLayoutComponent,
		AuthenticatedLayoutComponent
	],
	imports: importExportList,
	exports: importExportList,
	providers: []
})
export class SharedImportsModule { }
