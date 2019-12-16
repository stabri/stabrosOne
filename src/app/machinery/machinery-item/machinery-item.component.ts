import {Component, Input, OnInit} from '@angular/core';
import {Machine} from "../machinery.component";

@Component({
  selector: 'app-machinery-item',
  templateUrl: './machinery-item.component.html',
  styleUrls: ['./machinery-item.component.scss']
})
export class MachineryItemComponent implements OnInit {
  @Input() machine:Machine;

  constructor() { }

  ngOnInit(): void {
  }




}
