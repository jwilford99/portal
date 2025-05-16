import {Component, inject, input, InputSignal, OnInit} from '@angular/core';
import {IonItem, IonLabel} from "@ionic/angular/standalone";
import {DataKeyPipe} from "../data-key.pipe";
import {NumberFormatService} from "../number-format.service";

// interface Pairs {
//   label?: string;
//   value?: string | number;
// }

@Component({
  selector: 'app-portal-list',
  templateUrl: './portal-list.component.html',
  styleUrls: ['./portal-list.component.scss'],
  imports: [
    IonItem,
    IonLabel,
    DataKeyPipe
  ]
})
export class PortalListComponent  implements OnInit {
  numberFormatService =   inject(NumberFormatService);
  data: InputSignal<any | undefined> = input();
  accordionTitle: InputSignal<string | undefined> = input();
  color: InputSignal<string | undefined> = input();
  labels: InputSignal<string[] | undefined> = input();

  formattedData: any = {};

  constructor() { }

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
