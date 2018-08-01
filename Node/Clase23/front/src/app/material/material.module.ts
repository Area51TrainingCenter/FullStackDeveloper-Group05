import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout"
import {
	MatSidenavModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatTooltipModule,
	MatSnackBarModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatMenuModule,
	MatListModule,
	MatDialogModule
} from "@angular/material"


@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatMenuModule,
		MatListModule,
		MatDialogModule
	],
	declarations: [],
	exports: [
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		MatSnackBarModule,
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatMenuModule,
		MatListModule,
		MatDialogModule
	]
})
export class MaterialModule { }
