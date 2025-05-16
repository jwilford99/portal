import {Component, inject, input, InputSignal} from '@angular/core';
import {IonCol, IonGrid, IonItem, IonRow} from "@ionic/angular/standalone";
import {DataKeyPipe} from "../data-key.pipe";
import {NumberFormatService} from "../number-format.service";


@Component({
  selector: 'app-portal-table',
  templateUrl: './portal-table.component.html',
  styleUrls: ['./portal-table.component.scss'],
  imports: [
    IonRow,
    IonCol,
    IonGrid,
    IonItem,
    DataKeyPipe
  ]
})
export class PortalTableComponent {
  numberFormatService = inject(NumberFormatService);
  data: InputSignal<any | undefined> = input();
  columns: InputSignal<any> = input();
  type: string | undefined;
  test = 'currency';

  constructor() { }
}
