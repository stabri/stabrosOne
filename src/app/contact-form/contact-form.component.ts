import {Component, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  lat = 49.696381;
  lng = 22.012477;
  constructor() { }

  ngOnInit(): void {}
  @ViewChild('f', {static: false}) mailForm: NgForm;
  defaultQuestion = 'Zapytanie o oferte';
  answer = '';

  user = {
    name: '',
    email: '',
    subject: '',
    question: '',
  };

  submitted = false;
  subjects: string[] = [
    'Zapytanie o oferte',
    'Prośba o kontatak',
    'Oferta współpracy',
  ];

  onSubmit(){
    this.user.name = this.mailForm.value.userData.username;
    this.user.email = this.mailForm.value.userData.email;
    this.user.subject = this.mailForm.value.userData.subject;
    this.user.question = this.mailForm.value.questionAnswer;
    console.log('=============================================');
    console.log(this.user);
    console.log('=============================================');
    this.submitted = true;

    this.mailForm.reset();
  }
}
