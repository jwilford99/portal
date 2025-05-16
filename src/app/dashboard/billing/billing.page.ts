import {Component, OnInit} from '@angular/core';
import {IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ]
})
export class BillingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
