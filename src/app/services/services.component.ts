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
    {title: 'Transport', description: 'Usługi transportowe ciągnik z przyczepą tandem 18m3 o ładowności dopuszczalnej 14ton - wywrot do tyłu, szyber do zboża.', icon: 'local_shipping'},
    {title: 'Odśnieżanie', description: 'Usługi zimowego utrzymania dróg – każdy ciągnik wyposażony jest w pług i posypywarkę', icon: 'ac_unit'},
    {title: 'Mulczowanie', description: 'Mulczowanie trawy i nieużytków, kosiarka bijakowa kuhn o szerokości roboczej 265cm', icon: 'toys'},
    // {title: 'Zrębkowanie', description: 'Zrębkowanie drzew i gałęzi, wycinka samosiejek, sprzedaż zrębki drzewnej', icon: 'loop'},
    {title: 'Zrębkowanie', description: 'Usługa nowoczesnym rębak Junkkari HJ250G, o maksymalnej średnicy zrebkowanego drzewa do 25cm', icon: 'loop'},
    {title: 'Usługi rolnicze', description: 'Wynajem ciągników z operatorem, koszenie, orka, talerzowanie, usługi glebogryzarką ', icon: 'waves'},
    {title: 'Talerzowanie', description: 'Uprawa przedsiewna broną talerzową Rol/ex - szerokości robocza 3m, talerze o średnicy 610mm i wał doprawiający crosskill', icon: 'eco'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
/**
 *- .
 Usługi transportowe
 Mulczowanie –
  –

 */
