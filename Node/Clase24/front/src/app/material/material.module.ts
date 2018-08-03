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
	MatDialogModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule
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
		MatDialogModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
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
		MatDialogModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
	]
})
export class MaterialModule { }
