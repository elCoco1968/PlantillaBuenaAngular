import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AerodromesComponent } from './pages/aerodromes/aerodromes.component';
import { AircraftComponent } from './pages/aircraft/aircraft.component';
import { AreasATMComponent } from './pages/areas-atm/areas-atm.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { PrimariesComponent } from './pages/primaries/primaries.component';
import { RoutesComponent } from './pages/routes/routes.component';

const routes: Routes = [
  //rutas principales
  {path: '',
   component: PagesComponent,
   children:[
    //rutas hijas
    {path: 'dashboard', component: DashboardComponent},
    {path: 'primaries', component: PrimariesComponent},
    {path: 'routes', component: RoutesComponent},
    {path: 'areasATM', component: AreasATMComponent},
    {path: 'aerodromes', component: AerodromesComponent},
    {path: 'aircraft', component: AircraftComponent},
    {path: 'assessment', component: AssessmentComponent},
   ]
},
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //{path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
