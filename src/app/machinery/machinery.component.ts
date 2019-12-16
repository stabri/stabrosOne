import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";

export interface Machine {
  name: string;
  image: string;
  description: string;
}

export interface Machinery {
  prev: Machine;
  current: Machine;
  next: Machine;
}

@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.scss']
})
export class MachineryComponent implements OnInit {
  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;
  machinery: Machinery[] = [];
  mobile: boolean = false;


  MACHINES: Machine[] = [
    {
      name: 'Deutz Fahr 5120',
      image: 'assets/images/cards/fendt-1.jpg',
      description: ''
    },
    {
      name: 'Massey Ferguson 5612',
      image: 'assets/images/cards/massey-1.jpg',
      description: ''
    },
    {
      name: 'Rębak Junkkari HJ 250G',
      image: 'assets/images/cards/rebak-1.webp',
      description: ''
    },
    {
      name: 'Mulczer KUHN 265cm',
      image: 'assets/images/cards/mulczer-1.jpg',
      description: ''
    },
    {
      name: 'Pługi do odśnieżania + posypywarki samozaładowcze',
      image: 'assets/images/tractor-zima.jpg',
      description: ''
    },
    {
      name: 'Przyczepa Tandem Wywrotka 14 ton',
      image: 'assets/images/tractor-zima.jpg',
      description: ''
    },{
      name: 'Brona Talerzowa ROL/EX Taurus 3m',
      image: 'assets/images/tractor-zima.jpg',
      description: ''
    },
    {
      name: 'Transportery',
      image: 'assets/images/cards/ducato-1.jpg',
      description: ''
    },
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 50000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    if (screen.width <= 480) {
      this.mobile = true;
    } else {
      for (let i = 0; i < this.MACHINES.length; i++) {
        let prev = i === 0 ? this.MACHINES[this.MACHINES.length - 1] : this.MACHINES[i - 1];
        let current = this.MACHINES[i];
        let next = i == this.MACHINES.length - 1 ? this.MACHINES[0] : this.MACHINES[i + 1];
        this.machinery.push({prev, current, next});
      }
    }
  }
}
