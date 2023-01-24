import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Schedule } from '../../interfaces';
import { ScheduleService } from '../../services/schedule.service';
import { DialogSetTaskComponent } from '../dialog-set-task/dialog-set-task.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public schedule: Schedule[] = this.scheduleService.getSchedule();
  public routeDay: string | null = this.route.snapshot.paramMap.get('weekday');
  public tasks: string[] = [];

  constructor(
    private scheduleService: ScheduleService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private viewContainerRef: ViewContainerRef
  ) { }

  public activeDay(pathDay: string): boolean {
    return this.routeDay === pathDay;
  }

  public routerClick(pathDay: string): void {
    this.router.navigate(['day', pathDay]);
  }

  public openDialog(): void {
    this.dialog.open(DialogSetTaskComponent, {
      maxWidth: 800,
      minWidth: 300,
      viewContainerRef: this.viewContainerRef
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routeDay = params.get('weekday');
      if (this.routeDay !== null) {
        this.tasks = this.scheduleService.getTasksByDay(this.routeDay);
      }
    });
  }



}
