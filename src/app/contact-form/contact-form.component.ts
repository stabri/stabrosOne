import {Component, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  lat = 49.566593;
  lng = 22.186002;
  constructor() { }

  ngOnInit(): void {}

}
