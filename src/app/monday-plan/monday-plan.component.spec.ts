import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayPlanComponent } from './monday-plan.component';

describe('MondayPlanComponent', () => {
  let component: MondayPlanComponent;
  let fixture: ComponentFixture<MondayPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondayPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MondayPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
