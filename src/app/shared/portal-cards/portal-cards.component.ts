import {Component, inject, input, InputSignal, OnInit} from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle} from "@ionic/angular/standalone";
import {DataKeyPipe} from "../data-key.pipe";
import {NumberFormatService} from "../number-format.service";

@Component({
  selector: 'app-portal-cards',
  templateUrl: './portal-cards.component.html',
  styleUrls: ['./portal-cards.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    DataKeyPipe
  ]
})
export class PortalCardsComponent  implements OnInit {
  numberFormatService =   inject(NumberFormatService);
  data: InputSignal<any | undefined> = input();
  labels: InputSignal<string[] | undefined> = input();
  formattedData: any = {};

  constructor() {
  }

  ngOnInit() {
    this.formatData();
  }

  private formatData() {

    if (this.data()?.constructor === Array) {
      this.formattedData = this.data()[0];
    } else {
      this.formattedData = this.data();
    }
  }
}
