import { Component, OnInit } from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ]
})
export class ContactPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
