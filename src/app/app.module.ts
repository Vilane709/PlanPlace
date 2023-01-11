import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MondayPlanComponent } from './monday-plan/monday-plan.component';
import { TuesdayPlanComponent } from './tuesday-plan/tuesday-plan.component';
import { WednesdayPlanComponent } from './wednesday-plan/wednesday-plan.component';
import { ThursdayPlanComponent } from './thursday-plan/thursday-plan.component';
import { FridayPlanComponent } from './friday-plan/friday-plan.component';
import { SaturdayPlanComponent } from './saturday-plan/saturday-plan.component';
import { SundayPlanComponent } from './sunday-plan/sunday-plan.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { PlanWorkPopupComponent } from './shared/components/plan-work-popup/plan-work-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    MondayPlanComponent,
    TuesdayPlanComponent,
    WednesdayPlanComponent,
    ThursdayPlanComponent,
    FridayPlanComponent,
    SaturdayPlanComponent,
    SundayPlanComponent,
    NotFoundComponent,
    PlanWorkPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }