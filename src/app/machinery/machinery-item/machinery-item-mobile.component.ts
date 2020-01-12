import {Component, Input} from '@angular/core';
import {Machine} from "../machinery.component";

@Component({
  selector: 'app-machinery-item-mobile',
  templateUrl: './machinery-item-mobile.component.html',
  styleUrls: ['./machinery-item-mobile.component.scss']
})
export class MachineryItemMobileComponent{
  @Input() machine:Machine;
}
