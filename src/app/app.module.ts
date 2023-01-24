import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';

import { AppComponent } from './app.component';
import { MondayPlanComponent } from './monday-plan/monday-plan.component';
import { TuesdayPlanComponent } from './tuesday-plan/tuesday-plan.component';
import { WednesdayPlanComponent } from './wednesday-plan/wednesday-plan.component';
import { ThursdayPlanComponent } from './thursday-plan/thursday-plan.component';
import { FridayPlanComponent } from './friday-plan/friday-plan.component';
import { SaturdayPlanComponent } from './saturday-plan/saturday-plan.component';
import { SundayPlanComponent } from './sunday-plan/sunday-plan.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { ScheduleComponent } from './shared/components/schedule/schedule.component';
import { AlarmComponent } from './shared/components/alarm/alarm.component';
import { SoundsComponent } from './shared/components/sounds/sounds.component';
import { DialogSetTaskComponent } from './shared/components/dialog-set-task/dialog-set-task.component';

@NgModule({
  declarations: [
    AppComponent,
    // MondayPlanComponent,
    TuesdayPlanComponent,
    WednesdayPlanComponent,
    ThursdayPlanComponent,
    FridayPlanComponent,
    SaturdayPlanComponent,
    SundayPlanComponent,
    NotFoundComponent,
    PageMainComponent,
    ScheduleComponent,
    AlarmComponent,
    SoundsComponent,
    DialogSetTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    // A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
