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
      name: 'Rębak',
      image: 'assets/images/cards/rebak-1.webp',
      description: 'Rębak Junkkari HJ 250G'
    },
    {
      name: 'Mulczer',
      image: 'assets/images/cards/mulczer-1.jpg',
      description: 'Mulczer KUHN szerokość 265cm'
    },
    {
      name: 'Pługi',
      image: 'assets/images/tractor-zima.jpg',
      description: 'Pługi do odśnieżania + posypywarki samozaładowcze'
    },
    {
      name: 'Przyczepa Tandem',
      image: 'assets/images/tractor-zima.jpg',
      description: 'Przyczepa Tandem Wywrotka 14 ton'
    },{
      name: 'Brona Talerzowa',
      image: 'assets/images/tractor-zima.jpg',
      description: 'Brona Talerzowa ROL/EX Taurus, szerekość 3m'
    },
    {
      name: 'Transportery',
      image: 'assets/images/cards/ducato-1.jpg',
      description: ''
    },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
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
