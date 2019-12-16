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
    {title: 'Transport', description: 'Usługi transportowe dużych przedmiotów, transport przyczepą wywrotkową', icon: 'local_shipping'},
    {title: 'Odśnieżanie', description: 'Odśnieżanie podjazdów, dróg miejskich, powiatowych i gminnych', icon: 'ac_unit'},
    {title: 'Mulczowanie', description: 'Mulczowanie trawy i nieużytków, koszenie kosiarką rotacyjną', icon: 'toys'},
    {title: 'Zrębkowanie', description: 'Zrębkowanie drzew i gałęzi, wycinka samosiejek, sprzedaż zrębki drzewnej', icon: 'loop'},
    {title: 'Glebogryzarka', description: 'Usługi glebogryzarką', icon: 'waves'},
    {title: 'Usługi rolnicze', description: 'Wynajem ciągników z operatorem, koszenie, orka, talerzowanie ', icon: 'eco'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
