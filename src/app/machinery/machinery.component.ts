import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";

export interface Machine {
  name: string;
  image: string;
  description: string[];
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
      name: 'Deutz-Fahr',
      image: 'assets/images/cards/fendt-1.jpg',
      description: ['Moc: 123421', 'Lorem: Ipsum', 'More: Even More', 'Itp: Itd']
    },
    {
      name: 'Massey Ferguson',
      image: 'assets/images/cards/massey-1.jpg',
      description: ['Moc: 123421', 'Lorem: Ipsum', 'More: Even More', 'Itp: Itd']
    },
    {
      name: 'Rębak',
      image: 'assets/images/cards/rebak-1.webp',
      description: ['Moc: 123421', 'Lorem: Ipsum', 'More: Even More', 'Itp: Itd']
    },
    {
      name: 'Mulczer',
      image: 'assets/images/cards/mulczer-1.jpg',
      description: ['Moc: 123421', 'Lorem: Ipsum', 'More: Even More', 'Itp: Itd']
    },
    {
      name: 'Pługi śnieżne',
      image: 'assets/images/tractor-zima.jpg',
      description: ['Moc: 123421', 'Lorem: Ipsum', 'More: Even More', 'Itp: Itd']
    },
    {
      name: 'Transportery',
      image: 'assets/images/cards/ducato-1.jpg',
      description: ['Moc: 123421', 'Lorem: Ipsum', 'More: Even More', 'Itp: Itd']
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
