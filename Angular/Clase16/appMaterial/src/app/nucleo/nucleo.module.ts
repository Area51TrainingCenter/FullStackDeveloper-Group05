import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { MaterialModule } from '../material/material.module';
import { RegistroComponent } from '../registro/registro.component';
import { NucleoRoutingModule } from './nucleo.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NucleoRoutingModule,
    MaterialModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CabeceraComponent
  ],
  exports: [
    CabeceraComponent, NucleoRoutingModule
  ]
})
export class NucleoModule { }
