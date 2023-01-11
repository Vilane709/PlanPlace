import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { PlanWorkPopupComponent } from '../components/plan-work-popup/plan-work-popup.component';

@Injectable({
  providedIn: 'root'
})
export class PlanWorkPopupService {

  private _opened: boolean = false;
  private _component: ComponentRef<PlanWorkPopupComponent> | null = null;

  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  public createPopup(nameWork: string) {
    if (this._opened === true) {
      console.log('Попап уже открыт');
      return;
    }
    
    this._opened = true;
    this._component = this.viewContainerRef.createComponent(PlanWorkPopupComponent);
  }




}
