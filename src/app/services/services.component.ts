import { Component, OnInit } from '@angular/core';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [
    {title: 'Przewóz mebli', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'local_shipping'},
    {title: 'Odśnieżanie', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'favorite_border'},
    {title: 'Mulczowanie', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'grade'},
    {title: 'Sprzedaż zrębki', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'rowing'},
    {title: 'Rębakowanie', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'face'},
    {title: 'Skoki na bugee', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'accessible_forward'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
