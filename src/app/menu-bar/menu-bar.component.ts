import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigateTo(element: string) {
   if(element === 'stabros') {
     history.pushState({}, element.toUpperCase(), `/`);
   } else {
     history.pushState({}, element.toUpperCase(), `/${element}`);
   }
    document.getElementById(element).scrollIntoView(true);
  }
}
