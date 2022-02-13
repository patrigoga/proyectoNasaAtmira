import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { Fotos } from './models/fotos.model';

const routes: Routes = [

  {path:'',pathMatch:'full',redirectTo:'dashboard'},

  {path:'dashboard', component:DashboardComponent},
  {path:'detalles', component:DetalleComponent},
  {path:'**',redirectTo:'dashboard'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
