import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//modulos


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrimariesComponent } from './primaries/primaries.component';
import { RoutesComponent } from './routes/routes.component';
import { AreasATMComponent } from './areas-atm/areas-atm.component';
import { AerodromesComponent } from './aerodromes/aerodromes.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ 
    NopagefoundComponent,
    DashboardComponent,
    PrimariesComponent,
    RoutesComponent,
    AreasATMComponent,
    AerodromesComponent,
    AircraftComponent,
    AssessmentComponent,
   ],
  exports:[
    NopagefoundComponent,
    DashboardComponent,
    PrimariesComponent,
    RoutesComponent,
    AreasATMComponent,
    AerodromesComponent,
    AircraftComponent,
    AssessmentComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
  ],
})
export class PagesModule { }
