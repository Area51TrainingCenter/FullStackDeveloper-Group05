import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		NucleoRoutingModule,
		MaterialModule,
		ReactiveFormsModule
	],
	declarations: [MenuComponent, LoginComponent],
	exports: [MenuComponent, NucleoRoutingModule]
})
export class NucleoModule { }
