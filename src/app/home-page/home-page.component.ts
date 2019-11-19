import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  images = [1, 2, 3].map((n) => `assets/images/tractor-slider-${n}.jpg`);
  ngOnInit() {
  }

}
