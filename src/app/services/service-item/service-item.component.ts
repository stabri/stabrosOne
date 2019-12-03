import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../services.component";

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input()service: Service;
  constructor() { }

  ngOnInit() {
  }

}
