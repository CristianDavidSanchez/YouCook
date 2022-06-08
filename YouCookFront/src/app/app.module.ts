import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';
import {ImageModule} from 'primeng/image';
import {BadgeModule} from 'primeng/badge';
import { ProcesoComponent } from './pages/proceso/proceso.component';
import {StepsModule} from 'primeng/steps';
import {CardModule} from 'primeng/card';
import { PlanComponent } from './components/pasos/plan/plan.component';
import { RecetasComponent } from './components/pasos/recetas/recetas.component';
import { PagoComponent } from './components/pasos/pago/pago.component';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';

import {InputMaskModule} from 'primeng/inputmask';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LayoutComponent,
    LandingComponent,
    ProcesoComponent,
    PlanComponent,
    RecetasComponent,
    PagoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ImageModule,
    BadgeModule,
    StepsModule,
    CardModule,
    InputNumberModule,
    FormsModule,
    BrowserAnimationsModule,
    DataViewModule,
    InputTextModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
