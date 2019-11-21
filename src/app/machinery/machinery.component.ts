import { Component, OnInit } from '@angular/core';

export interface Machine {
  name: string;
  image: string;
}

@Component({
  selector: 'app-machinery',
  templateUrl: './machinery.component.html',
  styleUrls: ['./machinery.component.scss']
})
export class MachineryComponent implements OnInit {
  MACHINES: Machine[] = [
    {name:'Deutz-Fahr', image:'assets/images/cards/fendt-1.jpg'},
    {name:'Massey Ferguson', image:'assets/images/cards/massey-1.jpg'},
    {name:'Rębak', image:'assets/images/cards/rebak-1.webp'},
    {name:'Mulczer', image:'assets/images/cards/mulczer-1.jpg'},
    {name:'Pługi śnieżne', image:'assets/images/tractor-zima.jpg'},
    {name:'Transportery', image:'assets/images/cards/ducato-1.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
