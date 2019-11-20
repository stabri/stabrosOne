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
    {title: 'Odśnieżanie', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'ac_unit'},
    {title: 'Mulczowanie', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'toys'},
    {title: 'Sprzedaż zrębki', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'shopping_cart'},
    {title: 'Rębakowanie', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'waves'},
    {title: 'Usługi rolnicze', description: 'Usluga w zakresie tego i tamtego, szczgoly tu i uwdzie', icon: 'eco'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
