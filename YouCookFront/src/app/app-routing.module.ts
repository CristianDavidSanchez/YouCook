import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { PagoComponent } from './components/pasos/pago/pago.component';
import { PlanComponent } from './components/pasos/plan/plan.component';
import { RecetasComponent } from './components/pasos/recetas/recetas.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProcesoComponent } from './pages/proceso/proceso.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'',
        redirectTo:'/landing',
        pathMatch: 'full'
      },
      {
        path:'landing',
        component:LandingComponent
      },
      {
        path:'proceso',
        redirectTo:'/proceso/plan',
        pathMatch: 'full'
      },
      {
        path:'proceso',
        component:ProcesoComponent,
        children:[
          {
            path:'plan',
            component:PlanComponent
          },
          {
            path:'recetas',
            component:RecetasComponent
          },
          {
            path:'pago',
            component:PagoComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
