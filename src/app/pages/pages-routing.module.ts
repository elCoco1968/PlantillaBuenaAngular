import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AerodromesComponent } from './aerodromes/aerodromes.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { ConsultAircraftComponent } from './aircraft/consultAircraft/consult-aircraft.component';
import { ValidationAircraftComponent } from './aircraft/validationAircraft/validation-aircraft.component';
import { AreasATMComponent } from './areas-atm/areas-atm.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { PrimariesComponent } from './primaries/primaries.component';
import { RoutesComponent } from './routes/routes.component';


const routes: Routes = [
  {path: 'dashboard',
  component: PagesComponent,
  children:[
   //rutas hijas
   {path: '', component: DashboardComponent},
   {path: 'primaries', component: PrimariesComponent},
   {path: 'routes', component: RoutesComponent},
   {path: 'areasATM', component: AreasATMComponent},
   {path: 'aerodromes', component: AerodromesComponent},

   {path: 'aircraft', component: AircraftComponent},
   {path: 'consultAircraft', component: ConsultAircraftComponent},
   {path: 'validationAircraft', component: ValidationAircraftComponent},

   {path: 'assessment', component: AssessmentComponent},
  ]
},
]

@NgModule({
  imports: [ 
  RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
